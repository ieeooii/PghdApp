import { Form, Icon, Input, Item, Text } from 'native-base';
import * as React from 'react';
import { passwordStyles } from '../style';

export interface Props {
  changeSignupState: any;
  inputCheck: any;
  isBtnAble: any;
  isBtnDisAble: any;
  rootState: any;
  changeFocus: any;
}
export interface State {
  password: string;
  secureTextEntry: Boolean;
  borderColor: string;
  placeholderTextColor: string;
}

let focusFlag = 0;

export class Password extends React.Component<Props, State> {
  public state: State;
  public props: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      password: '',
      secureTextEntry: true,
      borderColor: '#D2D2D2',
      placeholderTextColor: '#717372',
    };
  }

  iconChange(boolean: Boolean, eye: string) {
    return (
      <Icon
        onPress={() => {
          this.setState({ secureTextEntry: boolean });
        }}
        name={eye}
      />
    );
  }

  pwdCheck() {
    const regCheckPwd1 = /[A-Za-z]/i.test(this.state.password); // 적어도 한개의 a-z 확인
    const regCheckPwd2 = /\d/.test(this.state.password); // 적어도 한개의 0-9 확인

    if (this.state.password.length !== 0 && this.state.password.length < 8) {
      this.props.inputCheck('passwordCheck', false);
      this.props.isBtnDisAble();
      return this.props.inputCheck(
        'passwordCheck',
        false,
        <Text style={passwordStyles.txtIsValid}>8자이상 입력해주세요.</Text>,
      );
    }
    if (this.state.password.length !== 0 && !(regCheckPwd1 && regCheckPwd2)) {
      this.props.inputCheck('passwordCheck', false);
      this.props.isBtnDisAble();
      return this.props.inputCheck(
        'passwordCheck',
        false,
        <Text style={passwordStyles.txtIsValid}>
          영문, 숫자로 조합해주세요.
        </Text>,
      );
    }
    if (this.state.password.length !== 0) {
      this.props.inputCheck('passwordCheck', true);
      this.props.isBtnAble();
      return this.props.inputCheck('passwordCheck', true, <Text></Text>);
    }
    this.props.inputCheck('passwordCheck', false);
    this.props.isBtnDisAble();
    return <Text></Text>;
  }

  render() {
    this.iconChange = this.iconChange.bind(this);
    this.pwdCheck = this.pwdCheck.bind(this);
    // console.log('password.tsx 렌더');

    if (!this.props.rootState.passwordFocus && focusFlag === 1) {
      this.state.borderColor = '#D2D2D2';
      this.state.placeholderTextColor = '#717372';
      this.props.changeFocus('passwordFocus', false);
      focusFlag = 0;
    }

    return (
      <Form style={passwordStyles.form}>
        <Item style={{ borderColor: this.state.borderColor }}>
          <Input
            onFocus={() => {
              this.props.changeFocus('emailFocus', false);
              this.props.changeFocus('passwordFocus', true);
              this.props.changeFocus('nicknameFocus', false);
              this.setState({
                borderColor: 'blue',
                placeholderTextColor: 'blue',
              });
              focusFlag = 1;
            }}
            onChangeText={text => {
              this.setState({
                password: text,
              });
              this.props.changeSignupState('password', text);
            }}
            placeholder='비밀번호'
            placeholderTextColor={this.state.placeholderTextColor}
            secureTextEntry={this.state.secureTextEntry}
          />
          {this.state.secureTextEntry === true
            ? this.iconChange(false, 'eye-off')
            : this.iconChange(true, 'eye')}
        </Item>
        {this.pwdCheck()}
      </Form>
    );
  }
}
