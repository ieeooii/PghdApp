// tslint:disable-next-line: import-name
import AsyncStorage from '@react-native-community/async-storage';
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Left,
  Right,
  Text,
} from 'native-base';
import * as React from 'react';
import { Alert, Platform, TextInput } from 'react-native';
import { BASE_URL, CLIENT_ID } from '../../../config/client';
import { todayPghd } from '../style';

const styles = todayPghd;

interface State {
  str?: string;
  alertOkbutton?: boolean;
}
interface Props {
  navigation: any;
}

export class TodayPghd extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { str: '', alertOkbutton: false };
  }

  alertFunc = (alertTitle: string, goBackFunc: any) => {
    Alert.alert(
      alertTitle,
      '',
      [
        {
          text: '확인',
          onPress: () => goBackFunc,
        },
      ],
      { cancelable: false },
    );
  }

  alertOkButtonFunc = () => {
    this.setState({ alertOkbutton: true });
    if (this.state.alertOkbutton === true) {
      this.props.navigation.goBack();
      this.setState({ alertOkbutton: false });
    }
  }

  alertTwoSelectFunc = (alertTitle: string) => {
    Alert.alert(
      alertTitle,
      '',
      [
        {
          text: '확인',
          onPress: this.alertOkButtonFunc,
        },
        {
          text: '취소',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  buttonOnpressFunc = async (str: string | undefined) => {
    try {
      if (str === undefined || str === '') {
        this.alertFunc('내용을 입력해주세요.', {});
      } else if (str.length > 0 && str !== undefined) {
        const walletAddress = await AsyncStorage.getItem('walletAddress');
        const accessToken = await AsyncStorage.getItem('accessToken');
        const POST_PGHD = `api/v1/clients/${CLIENT_ID}/users/${walletAddress}/pghd`;

        // [POST]PGHD(Create pghd)
        await this.postRequestFunc(accessToken, POST_PGHD, str);
      }
    } catch (error) {
      alert(`error: ${error}`);
    }
  }

  backButtonOnpressFunc = (str: string | undefined) => {
    if (str === undefined || str === '') {
      this.props.navigation.goBack();
    } else if (str !== undefined && str.length > 0) {
      this.alertTwoSelectFunc('삭제하시겠습니까?');
    }
  }

  postRequestFunc = (token: any, path: string | null, bodyStr: string) => {
    if (token !== null && bodyStr !== undefined) {
      return fetch(BASE_URL + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          pghd: bodyStr,
        }),
      })
        .then(res => {
          if (res.status !== 200) {
            alert(`error: ${res.status}`);
          } else if (res.status === 200) {
            return res.json();
          }
        })
        .then(() =>
          this.alertFunc(
            '오늘의 PGHD가 등록 되었습니다.',
            this.props.navigation.goBack(),
          ),
        )
        .catch(error => {
          alert(`error: ${error}`);
        });
    }
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button
              transparent
              onPress={this.backButtonOnpressFunc.bind(this, this.state.str)}
            >
              <Icon
                name='arrow-back'
                style={Platform.OS === 'android' ? { color: 'black' } : {}}
              />
              <Text style={styles.buttonTextColor}>
                {Platform.OS === 'ios' ? 'Back' : ''}
              </Text>
            </Button>
          </Left>
          <Right>
            <Button
              onPress={this.buttonOnpressFunc.bind(this, this.state.str)}
              style={[styles.upIoadButton]}
            >
              <Text
                style={[
                  styles.buttonTextColor,
                  { position: 'relative', left: 20 },
                ]}
              >
                등록
              </Text>
            </Button>
          </Right>
        </Header>
        <Form style={{ flex: 1 }}>
          <TextInput
            style={styles.textInput}
            placeholder='오늘의 건강 상태와 운동량을 기록해보세요.'
            editable={true}
            multiline={true}
            autoFocus={true}
            onChangeText={str => this.setState({ str })}
            value={this.state.str}
          />
        </Form>
      </Container>
    );
  }
}
