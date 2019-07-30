import { Form, Item, Label } from 'native-base';
import * as React from 'react';
import { emailPasswordForm } from '../style';

export interface Props {}
export interface State {}

export class EmailPassword extends React.Component<Props, State> {
  render() {
    return (
      <Form style={emailPasswordForm.topLoginForm}>
        <Item style={emailPasswordForm.labelWidth} floatingLabel>
          <Label>이메일 주소</Label>
        </Item>
        <Item style={emailPasswordForm.labelWidth} floatingLabel>
          <Label>비밀번호</Label>
        </Item>
      </Form>
    );
  }
}
