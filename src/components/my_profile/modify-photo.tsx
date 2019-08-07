import { Form } from 'native-base';
import * as React from 'react';
import { Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { modifyPhoto } from '../style';

export interface Props {}
export interface State {}

export class ModifyPhoto extends React.Component<Props, State> {
  render() {
    return (
      <Form style={modifyPhoto.userIconMoveCenter}>
        <AntDesign name='user' style={modifyPhoto.userIcon}></AntDesign>
        <SimpleLineIcons
          style={modifyPhoto.penIconMoveRight}
          name='pencil'
          onPress={() => {
            {
              Alert.alert(
                '',
                '',
                [
                  {
                    text: '앨범에서 사진 선택',
                    onPress: () => {},
                  },
                  {
                    text: '기본 이미지 선택',
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
          }}
        />
      </Form>
    );
  }
}
