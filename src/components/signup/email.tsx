import { Form, Input, Item, Text } from 'native-base';
import * as React from 'react';
import { emailStyles } from '../style';

export interface Props {}
export interface State {}

export class Email extends React.Component<Props, State> {
  render() {
    return (
      <Form style={emailStyles.form}>
        <Item>
          {/* <Label>이메일 주소</Label> */}
          <Input placeholder='이메일 주소' />
        </Item>
        <Text style={emailStyles.txtIsValid}>이메일 유효성 체크</Text>
      </Form>
    );
  }
}
