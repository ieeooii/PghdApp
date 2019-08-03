import { Form, Input, Item, Text } from 'native-base';
import * as React from 'react';
import { emailStyles } from '../style';

export interface Props {
  changeSignupState: any;
  inputCheck: any;
}
export interface State {
  email: string;
}

export class Email extends React.Component<Props, State> {
  public state: State;
  public props: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  emailCheck() {
    const regCheckEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
      this.state.email,
    );
    if (regCheckEmail) {
      return this.props.inputCheck('emailCheck', true, <Text></Text>);
    }
    if (this.state.email.length !== 0) {
      return this.props.inputCheck(
        'emailCheck',
        false,
        <Text style={emailStyles.txtIsValid}>
          이메일 주소를 정확하게 입력해 주세요.
        </Text>,
      );
    }
  }

  render() {
    this.emailCheck = this.emailCheck.bind(this);
    // console.log('===Root===', this.props.rootState);

    return (
      <Form style={emailStyles.form}>
        <Item>
          <Input
            onChangeText={text => {
              this.setState({ email: text });
              this.props.changeSignupState('email', text);
            }}
            placeholder='이메일 주소'
          />
        </Item>
        {this.emailCheck()}
      </Form>
    );
  }
}
