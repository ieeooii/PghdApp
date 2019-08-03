import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { signupStyles } from '../style';
import { Email } from './email';
import { Nickname } from './nickname';
import { Password } from './password';
import { Terms } from './terms';

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
    };
  }

  // 완료버튼 -> fetch 통신
  signupComplete() {
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

  // Signup.tsx state 변경
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

  isBtnDisAble() {
    this.setState({
      btnDisabled: true,
      btnColor: 'grey',
    });
  }

  render() {
    this.changeSignupState = this.changeSignupState.bind(this);
    this.signupComplete = this.signupComplete.bind(this);
    this.inputCheck = this.inputCheck.bind(this);
    this.termsCheck = this.termsCheck.bind(this);
    this.isBtnAble = this.isBtnAble.bind(this);
    this.isBtnDisAble = this.isBtnDisAble.bind(this);
    console.log('signup.tsx 렌더');

    if (this.state.btnDisabled === true) {
      return (
        <Container>
          <Form style={signupStyles.infoContent}>
            <Email
              changeSignupState={this.changeSignupState}
              inputCheck={this.inputCheck}
              isBtnAble={this.isBtnAble}
              isBtnDisAble={() => {}}
              rootState={this.state} // state 변화 확인용
            />
            <Password
              changeSignupState={this.changeSignupState}
              inputCheck={this.inputCheck}
              isBtnAble={this.isBtnAble}
              isBtnDisAble={() => {}}
              rootState={this.state} // state 변화 확인용
            />
            <Nickname
              changeSignupState={this.changeSignupState}
              inputCheck={this.inputCheck}
              isBtnAble={this.isBtnAble}
              isBtnDisAble={() => {}}
              rootState={this.state} // state 변화 확인용
            />
          </Form>
          <Form style={signupStyles.termsContent}>
            <Terms
              termsCheck={this.termsCheck}
              isBtnAble={this.isBtnAble}
              isBtnDisAble={() => {}}
              rootState={this.state} // state 변화 확인용
            />
          </Form>
          <Form style={signupStyles.shadow}>
            <Button
              disabled={this.state.btnDisabled}
              onPress={() => {
                this.props.navigation.navigate('ProfileRoot');
              }}
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
    return (
      <Container>
        <Form style={signupStyles.infoContent}>
          <Email
            changeSignupState={this.changeSignupState}
            inputCheck={this.inputCheck}
            isBtnAble={() => {}}
            isBtnDisAble={this.isBtnDisAble}
            rootState={this.state} // state 변화 확인용
          />
          <Password
            changeSignupState={this.changeSignupState}
            inputCheck={this.inputCheck}
            isBtnAble={() => {}}
            isBtnDisAble={this.isBtnDisAble}
            rootState={this.state} // state 변화 확인용
          />
          <Nickname
            changeSignupState={this.changeSignupState}
            inputCheck={this.inputCheck}
            isBtnAble={() => {}}
            isBtnDisAble={this.isBtnDisAble}
            rootState={this.state} // state 변화 확인용
          />
        </Form>
        <Form style={signupStyles.termsContent}>
          <Terms
            termsCheck={this.termsCheck}
            isBtnAble={() => {}}
            isBtnDisAble={this.isBtnDisAble}
            rootState={this.state} // state 변화 확인용
          />
        </Form>
        <Form style={signupStyles.shadow}>
          <Button
            disabled={this.state.btnDisabled}
            onPress={() => {
              this.props.navigation.navigate('ProfileRoot');
            }}
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
