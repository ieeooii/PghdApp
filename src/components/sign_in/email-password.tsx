import { Form, Icon, Input, Item, Text } from 'native-base';
import * as React from 'react';
import { emailPasswordForm } from '../style';

export interface Props {
  email: string;
  password: string;
  failMessageEmailCheck: boolean;
  failMessagePasswordCheck: boolean;
}
export interface State {
  onClickShowHidePassWord: boolean;
  inputEmail: string;
  inputPassWord: string;
  eyeButtonChange: string;
  emailCircleButtonChange: string;
  emailSelectArea: string;
  passwordSelectArea: string;
}

export class EmailPassword extends React.Component<Props, State> {
  public state: State;
  public props: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      onClickShowHidePassWord: true,
      inputEmail: '',
      inputPassWord: '',
      eyeButtonChange: 'eye-off',
      emailCircleButtonChange: 'close-circle',
      emailSelectArea: '#1F67F1',
      passwordSelectArea: 'black',
    };
  }

  deleteEmailIcon() {
    if (this.state.inputEmail.length > 0) {
      this.setState({
        inputEmail: '',
      });
    }
  }

  showHidePasswordIcon() {
    this.state.onClickShowHidePassWord
      ? this.setState({
        onClickShowHidePassWord: false,
        eyeButtonChange: 'eye',
      })
      : this.setState({
        onClickShowHidePassWord: true,
        eyeButtonChange: 'eye-off',
      });
  }

  onFocusEmailInputIcon() {
    this.setState({
      emailCircleButtonChange: 'close-circle',
    });
    this.setState({
      passwordSelectArea: 'black',
    });
    this.setState({
      emailSelectArea: '#1F67F1',
    });
  }

  offFocusEmailInputIcon() {
    this.setState({
      emailCircleButtonChange: '',
    });
    this.setState({
      emailSelectArea: 'black',
    });
    this.setState({
      passwordSelectArea: '#1F67F1',
    });
  }

  render() {
    this.deleteEmailIcon = this.deleteEmailIcon.bind(this);
    this.showHidePasswordIcon = this.showHidePasswordIcon.bind(this);
    this.onFocusEmailInputIcon = this.onFocusEmailInputIcon.bind(this);
    this.offFocusEmailInputIcon = this.offFocusEmailInputIcon.bind(this);

    return (
      <Form style={emailPasswordForm.topLoginForm}>
        <Item
          style={[
            emailPasswordForm.labelWidth,
            { borderColor: this.state.emailSelectArea },
          ]}
        >
          <Input
            autoCapitalize='none'
            autoFocus={true}
            onFocus={this.onFocusEmailInputIcon}
            placeholder='이메일 주소'
            placeholderTextColor={this.state.emailSelectArea}
            value={this.state.inputEmail}
            onChangeText={text => {
              this.props.rootState.email = text;
              this.setState({
                inputEmail: text,
              });
            }}
          />
          <Icon
            name={this.state.emailCircleButtonChange}
            onPress={this.deleteEmailIcon}
          />
        </Item>
        {this.props.rootState.failMessageEmailCheck === true ? null : (
          <Text style={{ color: 'red', marginLeft: 20 }}>
            이메일 주소를 다시 확인해주세요.
          </Text>
        )}

        <Item
          style={[
            emailPasswordForm.labelWidth,
            { borderColor: this.state.passwordSelectArea },
          ]}
        >
          <Input
            onFocus={this.offFocusEmailInputIcon}
            placeholder='비밀번호'
            placeholderTextColor={this.state.passwordSelectArea}
            onChangeText={text => {
              this.props.rootState.password = text;
              this.setState({
                inputPassWord: text,
              });
            }}
            secureTextEntry={this.state.onClickShowHidePassWord}
          />
          <Icon
            name={this.state.eyeButtonChange}
            onPress={this.showHidePasswordIcon}
          />
        </Item>
        {this.props.rootState.failMessagePasswordCheck === true ? null : (
          <Text style={{ color: 'red', marginLeft: 20 }}>
            비밀번호를 다시 확인해 주세요.
          </Text>
        )}
      </Form>
    );
  }
}
