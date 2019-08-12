import { Form } from 'native-base';
import * as React from 'react';
import { Alert } from 'react-native';
// tslint:disable-next-line: import-name
import ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { modifyPhoto } from '../style';

export interface Props {}
export interface State {
  photo: string;
}

export class ModifyPhoto extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      photo: '',
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
    });
  }

  render() {
    return (
      <Form style={modifyPhoto.userIconMoveCenter}>
        <AntDesign name='user' style={modifyPhoto.userIcon}></AntDesign>
        <SimpleLineIcons
          style={modifyPhoto.penIconMoveRight}
          name='pencil'
          onPress={() => {
            Alert.alert(
              '',
              '',
              [
                {
                  text: '앨범에서 사진 선택',
                  onPress: () => {
                    this.handleChoosePhoto();
                  },
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
          }}
        />
      </Form>
    );
  }
}
