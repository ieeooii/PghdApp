import { Form, Input, Item, Label } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';

const emailStyles = StyleSheet.create({
  form: {
    marginBottom: 0,
    marginRight: 20,
  },
});

export interface Props {}
export interface State {}

export class Email extends React.Component<Props, State> {
  render() {
    return (
      <Form style={emailStyles.form}>
        <Item floatingLabel>
          <Label>이메일 주소</Label>
          <Input />
        </Item>
      </Form>
    );
  }
}
