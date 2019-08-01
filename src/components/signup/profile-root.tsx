import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { profileRootStyles, termsStyles } from '../style';
import { ProfileBody } from './profilebody';
import { ProfileGender } from './profilegender';

export interface Props {
  navigation: any;
}
export interface State {}

export class ProfileRoot extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Form style={termsStyles.titleGenderForm}>
          <Form style={profileRootStyles.form}>
            <Text style={profileRootStyles.formTxt}>내 정보</Text>
          </Form>
          <Form style={profileRootStyles.genderForm}>
            <ProfileGender />
          </Form>
        </Form>
        <Form>
          <ProfileBody />
        </Form>
        <Form style={termsStyles.btnForm}>
          <Form style={profileRootStyles.shadow}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('MypageRoot');
              }}
              style={[profileRootStyles.button, profileRootStyles.saveBtnColor]}
            >
              <Text style={profileRootStyles.saveBtnText}>저장</Text>
            </Button>
          </Form>
          <Form style={[profileRootStyles.shadow, { height: 170 }]}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('MypageRoot');
              }}
              style={[profileRootStyles.button, profileRootStyles.skipBtnColor]}
            >
              <Text style={profileRootStyles.skipBtnText}>SKIP</Text>
            </Button>
          </Form>
        </Form>
      </Container>
    );
  }
}
