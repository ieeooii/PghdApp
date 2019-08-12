import { Form, Input, Item, Text } from 'native-base';
import * as React from 'react';
import { emailStyles } from '../style';

export interface Props {
  reduxStore: any;
}
export interface State {
  borderColor: string;
  placeholderTextColor: string;
}

let focusFlag = 0;

export class Email extends React.Component<Props, State> {
  public state: State;
  public props: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      borderColor: '#D2D2D2',
      placeholderTextColor: '#717372',
    };
  }

  emailCheck() {
    const regCheckEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
      this.props.reduxStore.email,
    );
    if (!this.props.reduxStore.permitEmail) {
      this.props.reduxStore.inputCheck('emailCheck', false);
      this.props.reduxStore.btnCheck();
      return (
        <Text style={emailStyles.txtIsValid}>
          이미 가입된 이메일 주소입니다.
        </Text>
      );
    }
    if (regCheckEmail) {
      this.props.reduxStore.inputCheck('emailCheck', true);
      this.props.reduxStore.btnCheck();
      return <Text></Text>;
    }
    if (this.props.reduxStore.email.length !== 0) {
      this.props.reduxStore.inputCheck('emailCheck', false);
      this.props.reduxStore.btnCheck();
      return (
        <Text style={emailStyles.txtIsValid}>
          이메일 주소를 정확하게 입력해 주세요.
        </Text>
      );
    }
  }

  render() {
    this.emailCheck = this.emailCheck.bind(this);
    // console.log('email.tsx 렌더');
    if (!this.props.reduxStore.emailFocus && focusFlag === 1) {
      this.state.borderColor = '#D2D2D2';
      this.state.placeholderTextColor = '#717372';
      this.props.reduxStore.changeFocus('emailFocus', false);
      focusFlag = 0;
    }

    return (
      <Form style={emailStyles.form}>
        <Item style={{ borderColor: this.state.borderColor }}>
          <Input
            onFocus={() => {
              this.props.reduxStore.changeFocus('emailFocus', true);
              this.props.reduxStore.changeFocus('passwordFocus', false);
              this.props.reduxStore.changeFocus('nicknameFocus', false);
              this.setState({
                borderColor: '#690591',
                placeholderTextColor: '#690591',
              });
              focusFlag = 1;
            }}
            onChangeText={text => {
              this.props.reduxStore.permit('permitEmail', true);
              this.props.reduxStore.changeSignupState('email', text);
            }}
            placeholder='이메일 주소'
            placeholderTextColor={this.state.placeholderTextColor}
            autoCapitalize='none'
          />
        </Item>
        {this.emailCheck()}
      </Form>
    );
  }
}
