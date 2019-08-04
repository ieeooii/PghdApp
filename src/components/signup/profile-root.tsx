import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { profileRootStyles } from '../style';
import { ProfileBody } from './profile-body';
import { ProfileGender } from './profile-gender';

export interface Props {
  navigation: any;
}
export interface State {
  gender: string;
  birthDate: string;
  relationShip: string;
  [key: string]: any;
}

export class ProfileRoot extends React.Component<Props, State> {
  public state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      gender: '',
      birthDate: '',
      relationShip: '환자',
    };
  }

  // root state 변화시키는 함수
  changeState(key: string, value: any) {
    this.state[key] = value;
  }

  render() {
    this.changeState = this.changeState.bind(this);
    console.log('profile-root.tsx 렌더');

    return (
      <Container>
        <Form style={profileRootStyles.titleGenderForm}>
          <Form style={profileRootStyles.form}>
            <Text style={profileRootStyles.formTxt}>내 정보</Text>
          </Form>
          <Form style={profileRootStyles.genderForm}>
            <ProfileGender
              changeState={this.changeState}
              rootState={this.state} // root state 확인용
            />
          </Form>
        </Form>
        <Form>
          <ProfileBody
            changeState={this.changeState}
            rootState={this.state} // root state 확인용
          />
        </Form>
        <Form style={profileRootStyles.btnForm}>
          <Form style={profileRootStyles.shadow}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('MypageRoot');
              }}
              style={[
                profileRootStyles.button,
                profileRootStyles.saveBtnColor,
                profileRootStyles.androidShadow,
              ]}
            >
              <Text style={profileRootStyles.saveBtnText}>저장</Text>
            </Button>
          </Form>
          <Form style={[profileRootStyles.shadow, { height: 170 }]}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('MypageRoot');
              }}
              style={[
                profileRootStyles.button,
                profileRootStyles.skipBtnColor,
                profileRootStyles.androidShadow,
              ]}
            >
              <Text style={profileRootStyles.skipBtnText}>SKIP</Text>
            </Button>
          </Form>
        </Form>
      </Container>
    );
  }
}
