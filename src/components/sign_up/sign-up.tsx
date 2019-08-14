import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { Alert } from 'react-native';
import { BASE_URL } from '../../../config/client';
import { signupStyles } from '../style';
import { Email } from './email';
import { Nickname } from './nickname';
import { Password } from './password';
import { Terms } from './terms';
const uuidv1 = require('uuid/v1');
const uniqString = uuidv1();

export interface Props {}
export interface State {}

export class Signup extends React.Component<Props, State> {
  public props: any;
  constructor(props: Props) {
    super(props);
  }

  // 이메일 중복여부 확인
  emailValidity() {
    return fetch(BASE_URL + `api/v1/users/exists/${this.props.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // 회원가입요청
  signupFetch() {
    return fetch(BASE_URL + `api/v1/users/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.props.email,
        password: this.props.password,
        nickname: this.props.nickname,
        type: 1,
        birthDate: new Date(),
        relationship: this.props.relationship,
        location: '지역',
        hospital: '서울대병원',
        incidenceTime: '2000년 초',
        agreementService: this.props.agreementService,
        agreementServiceAt: 'Unknown Type: date',
        agreementPrivate: this.props.agreementPrivate,
        agreementPrivateAt: 'Unknown Type: date',
        agreementMarketing: this.props.agreementMarketing,
        agreementMarketingAt: 'Unknown Type: date',
      }),
    });
  }

  createWallet(id: any, uniq: any) {
    return fetch(BASE_URL + `api/v1/users/${id}/userWallet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: id,
        address: uniq,
        type: '1', // type은 뭔지 몰라서 '1'(string)로 해둠
        priority: 0, // priority도 뭔지 몰라서 0(number)으로 해둠
      }),
    });
  }

  render() {
    this.signupFetch = this.signupFetch.bind(this);
    this.emailValidity = this.emailValidity.bind(this);
    this.createWallet = this.createWallet.bind(this);
    // console.log('signup.tsx 렌더');
    return (
      <Container>
        <Form style={signupStyles.signupContent}>
          <Email reduxStore={this.props} />
          <Password reduxStore={this.props} />
          <Nickname reduxStore={this.props} />
        </Form>
        <Form style={signupStyles.termsContent}>
          <Terms reduxStore={this.props} />
        </Form>
        <Form style={signupStyles.shadow}>
          <Button
            onPress={() => {
              this.emailValidity()
                .then(response => {
                  return response.json();
                })
                .then(json => {
                  // console.log(' emailValidity json => ', json);
                  if (json.status === 'success') {
                    // 이메일 중복 경고
                    this.props.permit('permitEmail', false);
                    return;
                  }
                })
                .catch(error => {
                  // emailValidity 에러 = 가입 가능 email -> 가입요청
                  console.log('가입 가능한 email이라서 나오는 에러 =>', error);

                  this.signupFetch()
                    .then(response => {
                      return response.json();
                    })
                    .then(json => {
                      // console.log('회원가입 요청에 대한 response =>', json);
                      if (json.message === 'success') {
                        console.log(' 회원가입 성공 ');

                        Alert.alert(
                          '',
                          '회원가입이 완료되었습니다',
                          [
                            {
                              text: '확인',
                              onPress: () => {
                                this.props.navigation.navigate('ProfileRoot');
                              },
                            },
                          ],
                          { cancelable: false },
                        );
                      }
                      return json;
                    })
                    .then(json => {
                      if (json.message === 'success') {
                        this.props.changeSignupState('id', json.user.id);
                        this.props.changeSignupState('userWallet', uniqString);
                        this.createWallet(json.user.id, uniqString)
                          .then(response => {
                            return response.json();
                          })
                          .then(json => {
                            console.log(
                              'userWallet Post 요청에 대한 응답',
                              json,
                            );
                          })
                          .catch(error => {
                            console.log(
                              'userWallet Post 요청에 대한 에러',
                              error,
                            );
                          });
                        return;
                      }
                      if (json.message === 'Validation error') {
                        // 닉네임 중복 경고 띄우기
                        console.log(' 닉네임 중복됨 ');

                        this.props.permit('permitNickname', false);
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
            disabled={this.props.btnDisabled}
            style={[signupStyles.button, signupStyles.androidShadow]}
          >
            <Text style={{ color: this.props.btnColor }}>완료</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
