// tslint:disable-next-line: import-name
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Fab, Form } from 'native-base';
import * as React from 'react';
import { Alert, Image, Platform, Text } from 'react-native';
import { BASE_URL, CLIENT_ID } from '../../../config/client';
import { myprofileStyles, pghdRecordStyles } from '../style';

const styles = pghdRecordStyles;
const deleteButtonName = '삭제';
const modifyButtonName = '수정';
const cancelButtonName = '취소';

interface State {
  activebutton?: boolean;
}

interface Props {
  navi?: any;
  children?: any;
}

export class PghdRecord extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      activebutton: false,
    };
  }

  modifyNavigationFunc = (beforePghdRecord: string) => {
    this.props.navi.navigation.navigate('TodayPghd', {
      beforePghd: beforePghdRecord,
      pghdId: this.props.children[3],
      updateFunc: this.props.children[4],
    });
  }

  // [DELETE]PGHD(Delete pghd by account address)
  deleteRequestFunc = (token: string | null, path: string) => {
    const updateFunc = this.props.children[4];
    if (token !== null) {
      return fetch(BASE_URL + path, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then(res => {
          if (res.status !== 200) {
            alert(`error: ${'요청에 응답 할 수 없습니다.'}`);
          } else if (res.status === 200) {
            alert('삭제되었습니다.');
            updateFunc();
          }
        })
        .catch(error => {
          alert(`error: ${error}`);
        });
    }
  }

  alertDelectFunc = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const walletAddress = await AsyncStorage.getItem('walletAddress');
    const pghdId = this.props.children[3];
    const DELETE_USER_PGHD = `api/v1/clients/${CLIENT_ID}/users/${walletAddress}/pghd/${pghdId}`;

    await Alert.alert(
      '삭제하시겠습니까?',
      '',
      [
        {
          text: deleteButtonName,
          onPress: () => this.deleteRequestFunc(accessToken, DELETE_USER_PGHD),
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

  // android에서 수정, 삭제 버튼이 작동하지 않아 alert로 변경
  androidAlertTwoSelectFunc = () => {
    Alert.alert(
      '수정 또는 삭제 버튼을 클릭해주세요.',
      '',
      [
        {
          text: modifyButtonName,
          onPress: this.modifyNavigationFunc.bind(this, this.props.children[2]),
        },
        {
          text: deleteButtonName,
          onPress: this.alertDelectFunc,
        },
      ],
      { cancelable: false },
    );
  }

  render() {
    if (this.props.children !== null) {
      return (
        <Form style={{ alignItems: 'center' }}>
          <Form
            style={[
              { zIndex: 1 },
              styles.pghdContainerTop,
              Platform.OS === 'android' ? styles.shadow : {},
            ]}
          >
            <Form style={[myprofileStyles.circle, { width: 36, height: 36 }]} />
            <Text style={{ marginLeft: 10 }}>{this.props.children[0]}</Text>
            <Text style={{ marginLeft: 5, color: '#767676' }}>
              | {this.props.children[1]}
            </Text>
            <Fab
              active={this.state.activebutton}
              direction='down'
              containerStyle={{}}
              style={[
                styles.fab,
                Platform.OS === 'ios'
                  ? styles.shadowZero
                  : { backgroundColor: 'white', elevation: 0 },
              ]}
              position='topRight'
              onPress={
                Platform.OS === 'ios'
                  ? () =>
                      this.setState({ activebutton: !this.state.activebutton })
                  : this.androidAlertTwoSelectFunc
              }
            >
              <Image
                source={require('./PGHD-RECORD-SELECT-ICON.png')}
                style={{ resizeMode: 'contain', height: '40%' }}
              />
              <Button
                style={[
                  styles.button,
                  Platform.OS === 'android'
                    ? { elevation: 0 }
                    : styles.buttonForm,
                ]}
                onPress={() =>
                  this.modifyNavigationFunc(this.props.children[2])
                }
              >
                <Text>{modifyButtonName}</Text>
              </Button>
              <Button
                style={[
                  styles.button,
                  Platform.OS === 'android'
                    ? { elevation: 0 }
                    : styles.buttonForm,
                ]}
                onPress={this.alertDelectFunc}
              >
                <Text>{deleteButtonName}</Text>
              </Button>
            </Fab>
          </Form>
          <Form
            style={[
              styles.pghdContainerBotttom,
              Platform.OS === 'ios' ? {} : styles.shadow,
              { padding: 20 },
            ]}
          >
            <Text style={{ textAlign: 'center' }}>
              {this.props.children[2]}
            </Text>
          </Form>
        </Form>
      );
    }
  }
}
