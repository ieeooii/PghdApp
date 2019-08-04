import { Form, Input, Item, Text } from 'native-base';
import * as React from 'react';
import { nicknameStyles } from '../style';

export interface Props {
  changeSignupState: any;
  inputCheck: any;
  isBtnAble: any;
  isBtnDisAble: any;
  rootState: any;
  changeFocus: any;
}
export interface State {
  nickname: string;
  borderColor: string;
  placeholderTextColor: string;
}

let focusFlag = 0;

export class Nickname extends React.Component<Props, State> {
  public state: State;
  public props: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      nickname: '',
      borderColor: '#D2D2D2',
      placeholderTextColor: '#717372',
    };
  }

  nicknameCheck = () => {
    const regCheckNickname = /^[A-Za-z0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,12}$/;

    if (this.state.nickname.length !== 0 && this.state.nickname.length > 12) {
      this.props.inputCheck('nicknameCheck', false);
      this.props.isBtnDisAble();
      return this.props.inputCheck(
        'nicknameCheck',
        false,
        <Text style={nicknameStyles.txtIsValid}>
          최대 12자까지 입력할 수 있습니다.
        </Text>,
      );
    }
    if (
      this.state.nickname.length !== 0 &&
      !regCheckNickname.test(this.state.nickname)
    ) {
      this.props.inputCheck('nicknameCheck', false);
      this.props.isBtnDisAble();
      return this.props.inputCheck(
        'nicknameCheck',
        false,
        <Text style={nicknameStyles.txtIsValid}>
          한글, 영문, 숫자만 입력할 수 있습니다.
        </Text>,
      );
    }
    if (
      this.state.nickname.length !== 0 &&
      this.props.rootState.nickname.length !== 0
    ) {
      this.props.inputCheck('nicknameCheck', true);
      this.props.isBtnAble();
      return this.props.inputCheck('nicknameCheck', true, <Text></Text>);
    }
    this.props.inputCheck('nicknameCheck', false);
    this.props.isBtnDisAble();
    return <Text></Text>;
  }

  render() {
    // console.log('nickname.tsx 렌더');
    if (!this.props.rootState.nicknameFocus && focusFlag === 1) {
      this.state.borderColor = '#D2D2D2';
      this.state.placeholderTextColor = '#717372';
      this.props.changeFocus('nicknameFocus', false);
      focusFlag = 0;
    }

    return (
      <Form style={nicknameStyles.form}>
        <Item style={{ borderColor: this.state.borderColor }}>
          <Input
            onFocus={() => {
              this.props.changeFocus('emailFocus', false);
              this.props.changeFocus('passwordFocus', false);
              this.props.changeFocus('nicknameFocus', true);
              this.setState({
                borderColor: 'blue',
                placeholderTextColor: 'blue',
              });
              focusFlag = 1;
            }}
            onChangeText={text => {
              this.setState({
                nickname: text,
              });
              this.props.changeSignupState('nickname', text);
            }}
            placeholder='닉네임'
            placeholderTextColor={this.state.placeholderTextColor}
          />
        </Item>
        {this.nicknameCheck()}
      </Form>
    );
  }
}
