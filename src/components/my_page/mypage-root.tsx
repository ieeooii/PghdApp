// tslint:disable-next-line: import-name
// import AsyncStorage from '@react-native-community/async-storage';
import { Button, Container, Form } from 'native-base';
import * as React from 'react';
import { Platform, ScrollView, Text } from 'react-native';
import { accountAddress, BASE_URL, CLIENT_ID } from '../../../config/client';
import { mypageRootStyles } from '../style';
import { MiniProfile } from './mini-profile';
import { PghdRecord } from './pghd-record';

interface Props {
  navigation: any;
  navi: any;
}
interface State {}

const styles = mypageRootStyles;

// const saveStorage = (key: string, value: string) => {
//   AsyncStorage.setItem(key, JSON.stringify(value));
// };

// accountAddress는 userWallet이 완료되면 navigator를 통해 받아와야함.
const getPghdFunc = (token: string | null) => {
  if (token !== null) {
    return fetch(
      BASE_URL + `/api/v1/clients/${CLIENT_ID}/users/${accountAddress}/pghd`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export class MypageRoot extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount = async () => {
    try {
      // const signIn = this.props.navigation.state.params.signIn;
      // await saveStorage('accessToken', signIn.signInToken);
      // await saveStorage('userEmail', signIn.email);

      // const accessToken = await AsyncStorage.getItem('accessToken');
      await getPghdFunc('2793de1f-44f4-4c69-a770-d509531bdfd8');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <ScrollView>
          <MiniProfile navi={this.props} />
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
            {/* scroll test용 입니다 */}
            <PghdRecord navi={this.props} />
          </Form>
        </ScrollView>
      </Container>
    );
  }
}
