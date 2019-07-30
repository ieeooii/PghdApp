import { Form, Input, Item, Label, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';

const nicknameStyles = StyleSheet.create({
  form: {
    marginRight: 20,
    height: 120,
  },
  txtIsValid: {
    color: 'red',
    marginLeft: 20,
  },
});

export interface Props {}
export interface State {}

export class Nickname extends React.Component<Props, State> {
  render() {
    return (
      <Form style={nicknameStyles.form}>
        <Item inlineLabel>
          <Label>닉네임</Label>
          <Input />
        </Item>
        <Text style={nicknameStyles.txtIsValid}>닉네임 유효성 체크</Text>
      </Form>
    );
  }
}
