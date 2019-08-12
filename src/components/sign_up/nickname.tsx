import { Form, Input, Item, Text } from 'native-base';
import * as React from 'react';
import { nicknameStyles } from '../style';

export interface Props {
  reduxStore: any;
}
export interface State {
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
      borderColor: '#D2D2D2',
      placeholderTextColor: '#717372',
    };
  }

  nicknameCheck = () => {
    const regCheckNickname = /^[A-Za-z0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,12}$/.test(
      this.props.reduxStore.nickname,
    );

    if (!this.props.reduxStore.permitNickname) {
      this.props.reduxStore.inputCheck('nicknameCheck', false);
      this.props.reduxStore.btnCheck();
      return (
        <Text style={nicknameStyles.txtIsValid}>
          이미 사용중인 닉네임입니다.
        </Text>
      );
    }
    if (
      this.props.reduxStore.nickname.length !== 0 &&
      this.props.reduxStore.nickname.length > 12
    ) {
      this.props.reduxStore.inputCheck('nicknameCheck', false);
      this.props.reduxStore.btnCheck();
      return (
        <Text style={nicknameStyles.txtIsValid}>
          최대 12자까지 입력할 수 있습니다.
        </Text>
      );
    }
    if (this.props.reduxStore.nickname.length !== 0 && !regCheckNickname) {
      this.props.reduxStore.inputCheck('nicknameCheck', false);
      this.props.reduxStore.btnCheck();
      return (
        <Text style={nicknameStyles.txtIsValid}>
          한글, 영문, 숫자만 입력할 수 있습니다.
        </Text>
      );
    }
    if (this.props.reduxStore.nickname.length !== 0) {
      this.props.reduxStore.inputCheck('nicknameCheck', true);
      this.props.reduxStore.btnCheck();
      return <Text></Text>;
    }
    this.props.reduxStore.inputCheck('nicknameCheck', false);
    this.props.reduxStore.btnCheck();
    return <Text></Text>;
  }

  render() {
    // console.log('nickname.tsx 렌더');
    if (!this.props.reduxStore.nicknameFocus && focusFlag === 1) {
      this.state.borderColor = '#D2D2D2';
      this.state.placeholderTextColor = '#717372';
      this.props.reduxStore.changeFocus('nicknameFocus', false);
      focusFlag = 0;
    }

    return (
      <Form style={nicknameStyles.form}>
        <Item style={{ borderColor: this.state.borderColor }}>
          <Input
            onFocus={() => {
              this.props.reduxStore.changeFocus('emailFocus', false);
              this.props.reduxStore.changeFocus('passwordFocus', false);
              this.props.reduxStore.changeFocus('nicknameFocus', true);
              this.setState({
                borderColor: '#690591',
                placeholderTextColor: '#690591',
              });
              focusFlag = 1;
            }}
            onChangeText={text => {
              this.props.reduxStore.permit('permitNickname', true);
              this.props.reduxStore.changeSignupState('nickname', text);
            }}
            placeholder='닉네임'
            placeholderTextColor={this.state.placeholderTextColor}
            autoCapitalize='none'
          />
        </Item>
        {this.nicknameCheck()}
      </Form>
    );
  }
}
