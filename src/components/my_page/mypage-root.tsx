// tslint:disable-next-line: import-name
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Container, Form } from 'native-base';
import * as React from 'react';
import { Platform, ScrollView, Text } from 'react-native';
import { BASE_URL, CLIENT_ID } from '../../../config/client';
import { mypageRootStyles } from '../style';
import { MiniProfile } from './mini-profile';
import { PghdRecord } from './pghd-record';

const styles = mypageRootStyles;

interface Props {
  navigation: any;
  navi: any;
  date: string;
}
interface State {
  usersPghdData: any;
  personalInfo: any;
}

const dateFunc = (dateStr: string) => {
  return dateStr.slice(0, 10);
};

export class MypageRoot extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      usersPghdData: null,
      personalInfo: [],
    };
  }

  componentDidMount = async () => {
    try {
      const signIn = this.props.navigation.state.params.signIn;
      const GET_USER_DATA = `api/v1/users/${signIn.email}`;
      const GET_USER_WALLET = `api/v1/users/${signIn.userId}/userWallet`;
      await AsyncStorage.setItem('accessToken', signIn.signInToken);
      await AsyncStorage.setItem('userEmail', signIn.email);

      // [GET]userWallet
      const getUserWallet = await this.getRequestFunc(
        signIn.signInToken,
        GET_USER_WALLET,
      );
      await AsyncStorage.setItem(
        'walletAddress',
        getUserWallet.data[0].address,
      );

      // [GET]PGHD(Get user pghd)
      const walletAddress = await AsyncStorage.getItem('walletAddress');
      const GET_PGHD = `api/v1/clients/${CLIENT_ID}/users/${walletAddress}/pghd`;
      const getUserPghd = await this.getRequestFunc(
        signIn.signInToken,
        GET_PGHD,
      );
      if (getUserPghd.data !== null) {
        this.setState({ usersPghdData: getUserPghd.data });
      }

      // [GET]Users
      const getUserInfo = await this.getRequestFunc(
        signIn.signInToken,
        GET_USER_DATA,
      );
      let relationStr = '';
      if (getUserInfo.relationship === null) {
        relationStr += '관계미정';
      } else {
        relationStr += getUserInfo.relationship;
      }
      this.setState({
        personalInfo: [getUserInfo.nickname, relationStr],
      });
    } catch (error) {
      alert(`error: ${error}`);
    }
  }

  getRequestFunc = (token: string | null, path: string | null) => {
    if (token !== null) {
      return fetch(BASE_URL + path, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then(res => {
          if (res.status !== 200) {
            alert(`error: ${res.status}`);
          } else if (res.status === 200) {
            return res.json();
          }
        })
        .catch(error => {
          alert(`error: ${error}`);
        });
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <MiniProfile navi={this.props} children={this.state.personalInfo} />
          <Form
            style={[styles.shadow, { alignItems: 'center', marginBottom: 20 }]}
          >
            <Button
              style={
                Platform.OS === 'ios'
                  ? styles.mainButton
                  : [styles.mainButton, styles.shadow]
              }
              onPress={() => {
                this.props.navigation.navigate('TodayPghd');
              }}
            >
              <Text style={styles.todayRecord}>오늘 기록하기</Text>
            </Button>
          </Form>

          <Form style={[styles.shadow, { width: '90%', alignSelf: 'center' }]}>
            {this.state.usersPghdData === null ? (
              <Text></Text>
            ) : (
              this.state.usersPghdData.map((pghdData: any) => {
                const date = dateFunc(pghdData.updatedAt);
                const pghd = JSON.parse(pghdData.data).pghd;
                return (
                  <PghdRecord
                    navi={this.props}
                    key={pghdData.id}
                    children={[this.state.personalInfo[0], date, pghd]}
                  />
                );
              })
            )}
          </Form>
        </ScrollView>
      </Container>
    );
  }
}
