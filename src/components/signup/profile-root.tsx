import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { profileRootStyles } from '../style';
import { ProfileBody } from './profile-body';
import { ProfileGender } from './profile-gender';

export interface Props {
  navigation: any;
}
export interface State {
  gender: string;
  birthDate: string;
  relationShip: string;
  email: string;
  password: string;
  nickname: string;
  clientId: string;
  clientSecret: string;
  id: string;
  [key: string]: any;
}

export class ProfileRoot extends React.Component<Props, State> {
  public state: State;
  public props: any;
  constructor(props: any) {
    super(props);
    this.state = {
      gender: '',
      birthDate: '',
      relationShip: '환자',
      email: this.props.navigation.state.params.signupData.email,
      password: this.props.navigation.state.params.signupData.password,
      nickname: this.props.navigation.state.params.signupData.nickname,
      id: this.props.navigation.state.params.signupData.id,
      clientId: '0b9fead3-889f-4885-840d-1572729f7d98',
      clientSecret:
        '6Ter8XpjqsVSFT98Os4n0KAWZddbBzL7jUrHaI7uCZs=$2a$10$iLeBxZCoVCf35NpP9gq9DO',
    };
  }

  // root state 변화시키는 함수
  changeState(key: string, value: any) {
    this.state[key] = value;
  }

  login() {
    return fetch(`http://api-stage.humanscape.io:80/api/v1/users/login/moah`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        clientId: this.state.clientId,
        clientSecret: this.state.clientSecret,
      }),
    });
  }

  goPghdPage(
    jsonData: any,
    userGender: string,
    userBirthDate: string,
    userRelationShip: string,
  ) {
    this.props.navigation.navigate('MypageRoot', {
      userData: {
        nickname: this.state.nickname,
        id: this.state.id,
        clientId: this.state.clientId,
        clientSecret: this.state.clientSecret,
        gender: userGender,
        birthDate: userBirthDate,
        relationShip: userRelationShip,
      },
      loginData: {
        accessToken: jsonData.accessToken,
        refreshToken: jsonData.refreshToken,
        accessTokenExpiresAt: jsonData.accessTokenExpiresAt,
        refreshTokenExpiresAt: jsonData.refreshTokenExpiresAt,
      },
    });
  }

  render() {
    this.changeState = this.changeState.bind(this);
    this.login = this.login.bind(this);
    this.goPghdPage = this.goPghdPage.bind(this);
    // console.log('profile-root.tsx 렌더');
    // console.log('profile-root.tsx PROPS ==> ', this.props);
    // console.log('profile-root.tsx State ==> ', this.state);

    return (
      <Container>
        <Form style={profileRootStyles.titleGenderForm}>
          <Form style={profileRootStyles.form}>
            <Text style={profileRootStyles.formTxt}>내 정보</Text>
          </Form>
          <Form style={profileRootStyles.genderForm}>
            <ProfileGender
              changeState={this.changeState}
              rootState={this.state} // root state 확인용
            />
          </Form>
        </Form>
        <Form>
          <ProfileBody
            changeState={this.changeState}
            rootState={this.state} // root state 확인용
          />
        </Form>
        <Form style={profileRootStyles.btnForm}>
          <Form style={profileRootStyles.shadow}>
            <Button
              onPress={() => {
                this.login()
                  .then(response => {
                    return response.json();
                  })
                  .then(json => {
                    alert('내정보를 저장하였습니다');
                    return json;
                  })
                  .then(json => {
                    this.goPghdPage(
                      json,
                      this.state.gender,
                      this.state.birthDate,
                      this.state.relationShip,
                    );
                  })
                  .catch(error => {
                    console.log('내정보 -> PGHD 페이지로의 이동 실패 ', error);
                  });
              }}
              style={[
                profileRootStyles.button,
                profileRootStyles.saveBtnColor,
                profileRootStyles.androidShadow,
              ]}
            >
              <Text style={profileRootStyles.saveBtnText}>저장</Text>
            </Button>
          </Form>
          <Form style={[profileRootStyles.shadow, { height: 170 }]}>
            <Button
              onPress={() => {
                this.login()
                  .then(response => {
                    return response.json();
                  })
                  .then(json => {
                    this.goPghdPage(json, '', '', '');
                  })
                  .catch(error => {
                    console.log('내정보 -> PGHD 페이지로의 이동 실패 ', error);
                  });
              }}
              style={[
                profileRootStyles.button,
                profileRootStyles.skipBtnColor,
                profileRootStyles.androidShadow,
              ]}
            >
              <Text style={profileRootStyles.skipBtnText}>SKIP</Text>
            </Button>
          </Form>
        </Form>
      </Container>
    );
  }
}
