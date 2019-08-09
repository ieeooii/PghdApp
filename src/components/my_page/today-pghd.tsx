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
const uploadButtonName = '등록';
const okButtonName = '확인';
const cancelButtonName = '취소';

interface State {
  str?: string;
  alertOkbutton?: boolean;
  beforePghd?: string;
}
interface Props {
  navigation: any;
}

export class TodayPghd extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      str: undefined,
      alertOkbutton: false,
      beforePghd: this.props.navigation.state.params.beforePghd,
    };
  }

  componentDidMount = () => {
    if (this.state.beforePghd === undefined) {
      return this.state.str;
    }
    if (
      this.state.beforePghd !== undefined &&
      this.state.beforePghd.length > 0
    ) {
      this.setState({
        str: this.state.beforePghd,
      });
    }
  }

  alertOkButtonOnPressFunc = () => {
    this.setState({ alertOkbutton: true });
    if (this.state.alertOkbutton === true) {
      this.props.navigation.goBack();
      this.setState({ alertOkbutton: false });
    }
  }

  alertOneSelectFunc = (alertTitle: string, goBackFunc: any) => {
    Alert.alert(
      alertTitle,
      '',
      [
        {
          text: okButtonName,
          onPress: () => goBackFunc,
        },
      ],
      { cancelable: false },
    );
  }

  alertTwoSelectFunc = (alertTitle: string) => {
    Alert.alert(
      alertTitle,
      '',
      [
        {
          text: okButtonName,
          onPress: this.alertOkButtonOnPressFunc,
        },
        {
          text: cancelButtonName,
          onPress: () => {},
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  uploadButtonOnPressFunc = async (str: string | undefined) => {
    try {
      const walletAddress = await AsyncStorage.getItem('walletAddress');
      const accessToken = await AsyncStorage.getItem('accessToken');

      if (this.props.navigation.state.params.pghdId !== undefined) {
        const pghdId = this.props.navigation.state.params.pghdId;
        const PATCH_USER_PGHD = `api/v1/clients/${CLIENT_ID}/users/${walletAddress}/pghd/${pghdId}`;

        // [PATCH]PGHD(Update pghd)
        await this.postOrPatchRequestFunc(
          'PATCH',
          accessToken,
          PATCH_USER_PGHD,
          str,
          'PGHD가 수정 되었습니다.',
        );
      } else if (str === undefined || str === '') {
        this.alertOneSelectFunc('내용을 입력해주세요.', {});
      } else if (str.length > 0 && str !== undefined) {
        // [POST]PGHD(Create pghd)
        const POST_USER_PGHD = `api/v1/clients/${CLIENT_ID}/users/${walletAddress}/pghd`;
        await this.postOrPatchRequestFunc(
          'POST',
          accessToken,
          POST_USER_PGHD,
          str,
          '오늘의 PGHD가 등록 되었습니다.',
        );
      }
    } catch (error) {
      alert(`error: ${error}`);
    }
  }

  backButtonOnPressFunc = (str: string | undefined) => {
    if (str === this.state.beforePghd && this.state.beforePghd !== undefined) {
      this.props.navigation.goBack();
      this.setState({
        str: undefined,
      });
    } else if (str === undefined || str === '') {
      this.props.navigation.goBack();
    } else if (
      str !== this.state.beforePghd &&
      str !== undefined &&
      str.length > 0
    ) {
      this.alertTwoSelectFunc('삭제하시겠습니까?');
    }
  }

  goBackAndSetParamsFunc = () => {
    const updateFunc = this.props.navigation.state.params.updateFunc;
    updateFunc();
    this.props.navigation.goBack();
  }

  // [POST]PGHD(Create pghd) || [PATCH]PGHD(Update pghd)
  postOrPatchRequestFunc = (
    methodReq: string,
    token: string | null,
    path: string,
    bodyStr: string | undefined,
    success: string,
  ) => {
    if (token !== null && bodyStr !== undefined) {
      return fetch(BASE_URL + path, {
        method: methodReq,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          pghd: bodyStr,
        }),
      })
        .then(res => {
          console.log(res);
          if (res.status !== 200) {
            alert(`error: ${'요청에 응답 할 수 없습니다.'}`);
          } else if (res.status === 200) {
            this.alertOneSelectFunc(success, this.goBackAndSetParamsFunc());
          }
        })
        .catch(error => {
          alert(`error: ${error}`);
        });
    }
  }

  paramsPghdCheckFunc = (str: string | undefined) => {
    if (this.state.beforePghd !== undefined) {
      this.backButtonOnPressFunc(this.state.beforePghd);
    } else {
      this.backButtonOnPressFunc(str);
    }
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button
              transparent
              onPress={() => this.paramsPghdCheckFunc(this.state.str)}
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
              onPress={() => this.uploadButtonOnPressFunc(this.state.str)}
              style={[styles.upIoadButton]}
            >
              <Text
                style={[
                  styles.buttonTextColor,
                  { position: 'relative', left: 20 },
                ]}
              >
                {uploadButtonName}
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
