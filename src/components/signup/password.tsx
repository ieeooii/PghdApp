import { Form, Icon, Input, Item, Label, Text } from 'native-base';
import * as React from 'react';
import { passwordStyles } from '../style';

export interface Props {}
export interface State {}

export class Password extends React.Component<Props, State> {
  render() {
    return (
      <Form style={passwordStyles.form}>
        <Item inlineLabel>
          <Label>비밀번호</Label>
          <Input />
          <Icon name='eye-off' />
          {/* <Icon name='eye' /> 클릭하면 아이콘 모양 이거로 바꿈*/}
        </Item>
        <Text style={passwordStyles.txtIsValid}>패스워드 유효성 체크</Text>
      </Form>
    );
  }
}
