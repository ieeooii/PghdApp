import { Form, Input, Item, Label, Text } from 'native-base';
import * as React from 'react';
import { nicknameStyles } from '../style';

export interface Props {}
export interface State {}

export class Nickname extends React.Component<Props, State> {
  render() {
    return (
      <Form style={nicknameStyles.form}>
        <Item>
          {/* <Label>닉네임</Label> */}
          <Input placeholder='닉네임' />
        </Item>
        <Text style={nicknameStyles.txtIsValid}>닉네임 유효성 체크</Text>
      </Form>
    );
  }
}
