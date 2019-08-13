import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { Alert } from 'react-native';
import { BASE_URL } from '../../../config/client';
import { profileRootStyles } from '../style';
import { ProfileBody } from './profile-body';
import { ProfileGender } from './profile-gender';

export interface Props {}
export interface State {}

export class ProfileRoot extends React.Component<Props, State> {
  public props: any;
  constructor(props: any) {
    super(props);
  }

  // 버튼 클릭시 로그인 fetch
  login() {
    return fetch(`${BASE_URL}api/v1/users/login/moah`, {
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

  // Pghd 페이지로 이동
  goPghdPage(jsonData: any) {
    this.props.navigation.navigate('MypageRoot', {
      signData: {
        accessToken: jsonData.accessToken,
        refreshToken: jsonData.refreshToken,
        accessTokenExpiresAt: jsonData.accessTokenExpiresAt,
        refreshTokenExpiresAt: jsonData.refreshTokenExpiresAt,
      },
    });
  }

  render() {
    this.login = this.login.bind(this);
    this.goPghdPage = this.goPghdPage.bind(this);
    // console.log('profile-root.tsx 렌더');
    return (
      <Container>
        <Form style={profileRootStyles.titleGenderForm}>
          <Form style={profileRootStyles.form}>
            <Text style={profileRootStyles.formTxt}>내 정보</Text>
          </Form>
          <Form style={profileRootStyles.genderForm}>
            <ProfileGender reduxStore={this.props} />
          </Form>
        </Form>
        <Form>
          <ProfileBody reduxStore={this.props} />
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
                    Alert.alert(
                      '',
                      '내정보가 저장되었습니다',
                      [
                        {
                          text: '확인',
                          onPress: () => {},
                        },
                      ],
                      { cancelable: false },
                    );
                    return json;
                  })
                  .then(json => {
                    this.goPghdPage(json);
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
                    this.props.changeProfileState('gender', '');
                    this.props.changeProfileState('birthDate', '');
                    this.props.changeProfileState('relationship', '');
                    this.goPghdPage(json);
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
