import { Button, Fab, Form } from 'native-base';
import * as React from 'react';
import { Alert, Image, Platform, Text } from 'react-native';
import { myprofileStyles, pghdRecordStyles } from '../style';

const styles = pghdRecordStyles;

interface State {
  activebutton?: boolean;
}

interface Props {
  navi?: any;
}

export class PghdRecord extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      activebutton: false,
    };
  }

  deleteAlert = () => {
    Alert.alert(
      '삭제하시겠습니까?',
      '',
      [
        {
          text: '삭제',
          onPress: () => {},
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

  selectAlert = () => {
    Alert.alert(
      '수정 또는 삭제 버튼을 클릭해주세요.',
      '',
      [
        {
          text: '수정',
          onPress: () => {
            this.props.navi.navigation.navigate('TodayPghd');
          },
        },
        {
          text: '삭제',
          onPress: this.deleteAlert,
        },
      ],
      { cancelable: false },
    );
  }

  render() {
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
          <Text style={{ marginLeft: 10 }}>react-native</Text>
          <Text style={{ marginLeft: 5, color: '#767676' }}>| 1.10</Text>
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
                : this.selectAlert
            }
          >
            <Image
              source={require('./PGHD-RECORD-SELECT-ICON.png')}
              style={{ resizeMode: 'contain', height: '40%' }}
            />
            {/* <Form style={[styles.buttonForm, { width: 80, height: 80 }]}> */}
            <Button
              style={[
                styles.button,
                Platform.OS === 'android' ? { elevation: 0 } : styles.buttonForm,
              ]}
              onPress={() => {
                this.props.navi.navigation.navigate('TodayPghd');
              }}
            >
              <Text>수정</Text>
            </Button>
            <Button
              style={[
                styles.button,
                Platform.OS === 'android' ? { elevation: 0 } : styles.buttonForm,
              ]}
              onPress={this.deleteAlert}
            >
              <Text>삭제</Text>
            </Button>
            {/* </Form> */}
          </Fab>
        </Form>
        <Form
          style={[
            styles.pghdContainerBotttom,
            Platform.OS === 'ios' ? {} : styles.shadow,
          ]}
        >
          <Text style={{ textAlign: 'center' }}>일별 PGHD 기록</Text>
        </Form>
      </Form>
    );
  }
}
