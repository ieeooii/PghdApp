import { Form, Input, Item, Label } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';

const nicknameStyles = StyleSheet.create({
  form: {
    marginRight: 20,
  },
});

export interface Props {}
export interface State {}

export class Nickname extends React.Component<Props, State> {
  render() {
    return (
      <Form style={nicknameStyles.form}>
        <Item floatingLabel>
          <Label>닉네임</Label>
          <Input />
        </Item>
      </Form>
    );
  }
}
