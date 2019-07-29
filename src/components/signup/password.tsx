import { Form, Input, Item, Label } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';

const passwordStyles = StyleSheet.create({
  form: {
    marginRight: 20,
  },
});

export interface Props {}
export interface State {}

export class Password extends React.Component<Props, State> {
  render() {
    return (
      <Form style={passwordStyles.form}>
        <Item floatingLabel>
          <Label>비밀번호</Label>
          <Input />
        </Item>
      </Form>
    );
  }
}
