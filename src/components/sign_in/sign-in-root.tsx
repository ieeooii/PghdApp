import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { CLIENT_ID, CLIENT_SECRET } from '../../../config/client';
import { loginbtn } from '../style';
import { EmailPassword } from './email-password';

export interface Props {
  navigation: any;
}
export interface State {
  email: string;
  password: string;
  failMessageEmailCheck: boolean;
  failMessagePasswordCheck: boolean;
}

export class SignIn extends React.Component<Props, State> {
  public state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      failMessageEmailCheck: true,
      failMessagePasswordCheck: true,
    };
  }

  onClickLoginCheckEmail() {
    return fetch(
      `http://api-stage.humanscape.io:80/api/v1/users/join/validation?email=${this.state.email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  onClickLogin() {
    return fetch('http://api-stage.humanscape.io:80/api/v1/users/login/moah', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      }),
    });
  }

  render() {
    this.onClickLoginCheckEmail = this.onClickLoginCheckEmail.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);

    return (
      <Container>
        <EmailPassword rootState={this.state} />
        <Form style={loginbtn.bottomLoginForm}>
          <Form style={loginbtn.shadowBtn}>
            <Button
              style={loginbtn.loginBtn}
              onPress={() => {
                this.onClickLoginCheckEmail()
                  .then(response => {
                    return response.json();
                  })
                  .then(responseJson => {
                    if (responseJson.email === this.state.email) {
                      this.setState({
                        failMessageEmailCheck: true,
                      });
                      this.onClickLogin()
                        .then(response => {
                          return response.json();
                        })
                        .then(responseJSON => {
                          this.props.navigation.navigate('MypageRoot', {
                            signIn: {
                              signInToken: responseJSON.accessToken, // 로그인 성공시 mypage화면으로 token 전달
                              userId: responseJSON.userId,
                              email: this.state.email,
                            },
                          });
                        })
                        .catch(error => {
                          this.setState({
                            failMessagePasswordCheck: false,
                          });
                        });
                    } else {
                      this.setState({
                        failMessageEmailCheck: false,
                        failMessagePasswordCheck: true,
                      });
                    }
                  })
                  .catch(error => {
                    this.setState({
                      failMessageEmailCheck: false,
                    });
                  });
              }}
            >
              <Text style={loginbtn.loginTextColor}>로그인</Text>
            </Button>
          </Form>
          <Form style={loginbtn.signupPasswordRow}>
            <Form>
              <Button
                transparent
                style={loginbtn.etcLeftBtnMargin}
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}
              >
                <Text style={loginbtn.signupPasswordFont}>회원가입</Text>
              </Button>
            </Form>
            <Form style={loginbtn.MiddleLineMargin}>
              <Text> | </Text>
            </Form>
            <Form>
              <Button transparent onPress={() => {}}>
                <Text style={loginbtn.signupPasswordFont}>비밀번호 찾기</Text>
              </Button>
            </Form>
          </Form>
        </Form>
      </Container>
    );
  }
}
