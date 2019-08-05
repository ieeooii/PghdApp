import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { signupStyles } from '../style';
import { SignupBody } from './signup-body';

export interface Props {
  navigation: any;
}
export interface State {
  email: any;
  emailCheck: Boolean;
  password: string;
  passwordCheck: Boolean;
  nickname: string;
  nicknameCheck: Boolean;
  relationship: string;
  birthDate: string;
  agreementService: Boolean;
  agreementServiceAt: string;
  agreementPrivate: Boolean;
  agreementPrivateAt: string;
  agreementMarketing: Boolean;
  agreementMarketingAt: string;
  btnDisabled: any;
  btnColor: string;
  emailFocus: Boolean;
  passwordFocus: Boolean;
  nicknameFocus: Boolean;
  permitEmail: Boolean;
  permitNickname: Boolean;
  [key: string]: any;
}

export class Signup extends React.Component<Props, State> {
  public state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      emailCheck: false,
      password: '',
      passwordCheck: false,
      nickname: '',
      nicknameCheck: false,
      birthDate: '',
      relationship: '',
      agreementService: false,
      agreementServiceAt: 'Unknown Type: date',
      agreementPrivate: false,
      agreementPrivateAt: 'Unknown Type: date',
      agreementMarketing: false,
      agreementMarketingAt: 'Unknown Type: date',
      btnDisabled: true,
      btnColor: 'grey',
      emailFocus: false,
      passwordFocus: false,
      nicknameFocus: false,
      permitEmail: true,
      permitNickname: true,
    };
  }

  // 이메일 중복여부 확인
  emailValidity() {
    return fetch(
      `http://api-stage.humanscape.io:80/api/v1/users/exists/${this.state.email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  // 회원가입요청
  signupFetch() {
    return fetch(`http://api-stage.humanscape.io:80/api/v1/users/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        nickname: this.state.nickname,
        type: 1,
        birthDate: this.state.birthDate,
        relationship: this.state.relationship,
        location: '지역',
        hospital: '서울대병원',
        incidenceTime: '2000년 초',
        agreementService: this.state.agreementService,
        agreementServiceAt: 'Unknown Type: date',
        agreementPrivate: this.state.agreementPrivate,
        agreementPrivateAt: 'Unknown Type: date',
        agreementMarketing: this.state.agreementMarketing,
        agreementMarketingAt: 'Unknown Type: date',
      }),
    });
  }

  // root state 변경
  changeSignupState(key: string, value: string) {
    this.state[key] = value;
  }

  // input 적절한 작성여부 확인
  inputCheck(key: string, boolean: Boolean, text: any) {
    this.state[key] = boolean;
    return text;
  }

  // 약관동의 체크
  termsCheck(type: string, boolean: Boolean) {
    if (type === 'all') {
      this.state.agreementService = boolean;
      this.state.agreementPrivate = boolean;
      this.state.agreementMarketing = boolean;
    } else {
      this.state[type] = boolean;
    }
  }

  // 버튼 활성화 위한 6개의 조건 만족여부 확인
  isBtnAble() {
    if (
      this.state.emailCheck &&
      this.state.passwordCheck &&
      this.state.nicknameCheck &&
      this.state.agreementService &&
      this.state.agreementPrivate
    ) {
      this.setState({
        btnDisabled: false,
        btnColor: 'white',
      });
    }
  }

  // 버튼 비활성화
  isBtnDisAble() {
    this.setState({
      btnDisabled: true,
      btnColor: 'grey',
    });
  }

  // 현재 input 커서의 위치 확인
  changeFocus(focus: string, boolean: Boolean) {
    this.state[focus] = boolean;
    this.setState({});
  }

  render() {
    this.changeSignupState = this.changeSignupState.bind(this);
    this.signupFetch = this.signupFetch.bind(this);
    this.inputCheck = this.inputCheck.bind(this);
    this.termsCheck = this.termsCheck.bind(this);
    this.isBtnAble = this.isBtnAble.bind(this);
    this.isBtnDisAble = this.isBtnDisAble.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
    this.emailValidity = this.emailValidity.bind(this);
    // console.log('signup.tsx state ==>', this.state);
    // console.log('signup.tsx 렌더');

    return (
      // 완료버튼이 비활성화 상태인 경우 -> 자식 컴포넌트에서 isBtnDisAble함수 작동 안됨
      // 완료버튼이 활성화 상태인 경우 -> 자식 컴포넌트에서 isBtnAble함수 작동 안됨
      // root컴포넌트의 setSate가 무한히 반복되는 것을 막기 위함
      <Container>
        {this.state.btnDisabled === true ? (
          <SignupBody
            changeSignupState={this.changeSignupState}
            inputCheck={this.inputCheck}
            isBtnAble={this.isBtnAble}
            isBtnDisAble={() => {}}
            rootState={this.state}
            termsCheck={this.termsCheck}
            changeFocus={this.changeFocus}
            navi={this.props}
          />
        ) : (
          <SignupBody
            changeSignupState={this.changeSignupState}
            inputCheck={this.inputCheck}
            isBtnAble={() => {}}
            isBtnDisAble={this.isBtnDisAble}
            rootState={this.state}
            termsCheck={this.termsCheck}
            changeFocus={this.changeFocus}
            navi={this.props}
          />
        )}
        <Form style={signupStyles.shadow}>
          <Button
            onPress={() => {
              this.emailValidity()
                .then(response => {
                  return response.json();
                })
                .then(json => {
                  // console.log(' emailValidity json == ', json);
                  if (json.status === 'success') {
                    // 이메일 중복 경고
                    this.setState({
                      permitEmail: false,
                    });
                    return;
                  }
                })
                .catch(error => {
                  // emailValidity 에러 = 가입 가능 email -> 가입요청
                  // console.log('가입 가능한 email == ', error);

                  this.signupFetch()
                    .then(response => {
                      return response.json();
                    })
                    .then(json => {
                      // console.log('가입 가능한 email == json ', json);

                      if (json.message === 'success') {
                        // 로컬에 토큰 저장하고 다음 페이지로 넘기기
                        console.log(' 회원가입 성공 == ');

                        this.props.navigation.navigate('ProfileRoot');
                        return;
                      }
                      if (json.message === 'Validation error') {
                        // 닉네임 중복 경고 띄우기
                        // console.log(' 닉네임 중복됨 == ');

                        this.setState({
                          permitNickname: false,
                        });
                        return;
                      }
                    })
                    .catch(error => {
                      console.log(
                        'email 중복도 아니고, nickname 중복도 아닌 에러',
                        error,
                      );
                    });
                });
            }}
            disabled={this.state.btnDisabled}
            style={[signupStyles.button, signupStyles.androidShadow]}
          >
            <Text style={{ color: this.state.btnColor }}>완료</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
