import { Form } from 'native-base';
import * as React from 'react';
import { signupStyles } from '../style';
import { Email } from './email';
import { Nickname } from './nickname';
import { Password } from './password';
import { Terms } from './terms';

export interface Props {
  changeSignupState: any;
  inputCheck: any;
  isBtnAble: any;
  isBtnDisAble: any;
  rootState: any;
  termsCheck: any;
  changeFocus: any;
  navi: any;
}
export interface State {}

export class SignupBody extends React.Component<Props, State> {
  render() {
    // console.log('signup_body.tsx 렌더');

    return (
      <>
        <Form style={signupStyles.signupContent}>
          <Email
            changeSignupState={this.props.changeSignupState}
            inputCheck={this.props.inputCheck}
            isBtnAble={this.props.isBtnAble}
            isBtnDisAble={this.props.isBtnDisAble}
            rootState={this.props.rootState}
            changeFocus={this.props.changeFocus}
          />
          <Password
            changeSignupState={this.props.changeSignupState}
            inputCheck={this.props.inputCheck}
            isBtnAble={this.props.isBtnAble}
            isBtnDisAble={this.props.isBtnDisAble}
            rootState={this.props.rootState}
            changeFocus={this.props.changeFocus}
          />
          <Nickname
            changeSignupState={this.props.changeSignupState}
            inputCheck={this.props.inputCheck}
            isBtnAble={this.props.isBtnAble}
            isBtnDisAble={this.props.isBtnDisAble}
            rootState={this.props.rootState}
            changeFocus={this.props.changeFocus}
          />
        </Form>
        <Form style={signupStyles.termsContent}>
          <Terms
            termsCheck={this.props.termsCheck}
            isBtnAble={this.props.isBtnAble}
            isBtnDisAble={this.props.isBtnDisAble}
            navi={this.props.navi}
            rootState={this.props.rootState} // state 변화 확인용
          />
        </Form>
      </>
    );
  }
}
