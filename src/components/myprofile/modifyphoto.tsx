import { Form } from 'native-base';
import * as React from 'react';
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
          name='pencil'
          style={modifyPhoto.penIconMoveRight}
        ></SimpleLineIcons>
      </Form>
    );
  }
}
