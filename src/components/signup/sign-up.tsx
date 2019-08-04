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
  btnDisabled: Boolean;
  btnColor: string;
  emailFocus: Boolean;
  passwordFocus: Boolean;
  nicknameFocus: Boolean;
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
    };
  }

  // 완료버튼 클릭 -> fetch 통신
  signupFetch() {
    return fetch('http://api-stage.humanscape.io:80/api/v1/users/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
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
      },
    });
  }

  // root state 변경 함수
  changeSignupState(key: string, value: string) {
    this.state[key] = value;
  }

  // input 적절한 작성여부 확인 함수
  inputCheck(key: string, boolean: Boolean, text: any) {
    this.state[key] = boolean;
    return text;
  }

  // 약관동의 체크 함수
  termsCheck(type: string, boolean: Boolean) {
    if (type === 'all') {
      this.state.agreementService = boolean;
      this.state.agreementPrivate = boolean;
      this.state.agreementMarketing = boolean;
    } else {
      this.state[type] = boolean;
    }
  }

  // 버튼 활성화 위한 6개의 조건 만족여부 확인 함수
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

  // 버튼 비활성화 함수
  isBtnDisAble() {
    this.setState({
      btnDisabled: true,
      btnColor: 'grey',
    });
  }

  // 현재 커서의 위치 확인 함수
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
    // console.log('signup.tsx 렌더');

    return (
      // 완료버튼이 비활성화 상태인 경우 -> 자식 컴포넌트에서 isBtnDisAble함수 작동 안됨
      // 완료버튼이 활성화 상태인 경우 -> 자식 컴포넌트에서 isBtnAble함수 작동 안됨
      // root컴포넌트의 setSate가 무한히 반복되는 것을 막음
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
          />
        )}
        <Form style={signupStyles.shadow}>
          <Button
            onPress={() => {
              this.props.navigation.navigate('ProfileRoot');
            }}
            disabled={this.state.btnDisabled}
            style={[signupStyles.button, signupStyles.androidShadow]}
          >
            <Text style={{ color: this.state.btnColor }}>완료</Text>
          </Button>
          {/* 완료 버튼 클릭 -> response message -> 'conflict'(이미 가입된 메일)
            이메일 주소는 다르지만 닉네임이 같은경우의 response message -> "Validation error"  */}
        </Form>
      </Container>
    );
  }
}
