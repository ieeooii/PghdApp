// tslint:disable-next-line: import-name
// import AsyncStorage from '@react-native-community/async-storage';
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
import { todayPghd } from '../style';

const styles = todayPghd;

interface State {
  str?: string;
}
interface Props {
  navigation: any;
}

export class TodayPghd extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { str: '' };
  }

  uploadAlertOrFetch = () => {
    if (this.state.str === '') {
      Alert.alert(
        '내용을 입력해주세요.',
        '',
        [
          {
            text: '확인',
            onPress: () => {},
          },
        ],
        { cancelable: false },
      );
    } else {
      return fetch(
        'http://api-stage.humanscape.io:80/api/v1/users/login/moah',
        {
          method: 'POST', // method get & post 헷갈릴 수 있으니 조심!!
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pghd: this.state.str,
          }),
        },
      )
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  componentDidMount = async () => {
    try {
      // const walletAddress = await AsyncStorage.getItem('walletAddress');
    } catch {}
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
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
              onPress={this.uploadAlertOrFetch}
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
