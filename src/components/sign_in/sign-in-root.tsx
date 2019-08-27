import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { BASE_URL } from '../../../config/client';
import { loginbtn } from '../style';
import { EmailPassword } from './email-password';

export interface Props {
  email: string;
  password: string;
  failMessageEmailCheck: boolean;
  failMessagePasswordCheck: boolean;
  changeSignInState: any;
  navigation: any;
  clientId: string;
  clientSecret: string;
}
export interface State {}

export class SignIn extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onClickLoginCheckEmail() {
    return fetch(
      BASE_URL + `api/v1/users/join/validation?email=${this.props.email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  onClickLogin() {
    return fetch(BASE_URL + `api/v1/users/login/moah`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.props.email,
        password: this.props.password,
        clientId: this.props.clientId,
        clientSecret: this.props.clientSecret,
      }),
    });
  }

  render() {
    this.onClickLoginCheckEmail = this.onClickLoginCheckEmail.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);

    return (
      <Container>
        <EmailPassword reduxStore={this.props} />
        <Form style={loginbtn.bottomLoginForm}>
          <Form style={loginbtn.shadowBtn}>
            <Button
              style={loginbtn.loginBtn}
              onPress={() => {
                console.log(this.props.email);
                this.onClickLoginCheckEmail()
                  .then(response => {
                    return response.json();
                  })
                  .then(responseJson => {
                    if (responseJson.email === this.props.email) {
                      this.props.changeSignInState(
                        'failMessageEmailCheck',
                        true,
                      );
                      this.onClickLogin()
                        .then(response => {
                          return response.json();
                        })
                        .then(responseJSON => {
                          this.props.changeSignInState(
                            'id',
                            responseJSON.userId,
                          );
                          this.props.navigation.navigate('MypageRoot', {
                            signData: {
                              accessToken: responseJSON.accessToken, // 로그인 성공시 mypage화면으로 token 전달
                              refreshToken: responseJSON.refreshToken,
                              accessTokenExpiresAt:
                                responseJSON.accessTokenExpiresAt,
                              refreshTokenExpiresAt:
                                responseJSON.refreshTokenExpiresAt,
                              email: this.props.email,
                            },
                          });
                        })
                        .catch(error => {
                          this.props.changeSignInState(
                            'failMessagePasswordCheck',
                            false,
                          );
                        });
                    } else {
                      this.props.changeSignInState(
                        'failMessageEmailCheck',
                        false,
                      );
                      this.props.changeSignInState(
                        'failMessagePasswordCheck',
                        true,
                      );
                    }
                  })
                  .catch(error => {
                    this.props.changeSignInState(
                      'failMessageEmailCheck',
                      false,
                    );
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
