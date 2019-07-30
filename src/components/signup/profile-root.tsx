import { Button, Container, Content, Form, Text, View } from 'native-base';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { ProfileBody } from './profilebody';
import { ProfileGender } from './profilegender';

const saveBtnColor: string = '#F3F5F4';
const skipBtnColor: string = '#5800ff';
const saveBtnTextColor: string = '#5800ff';
const skipBtnTextColor: string = '#F8FCFA';

const profileRootStyles = StyleSheet.create({
  form: {
    ...Platform.select({
      ios: {
        top: 80,
        marginLeft: 140,
      },
      android: {
        top: 60,
        marginLeft: 150,
      },
    }),
  },
  formTxt: { fontSize: 30 },
  genderForm: {
    ...Platform.select({
      ios: {
        paddingBottom: 20,
      },
      android: {
        bottom: 20,
      },
    }),
  },
  button: {
    marginLeft: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 10,
    ...Platform.select({
      ios: {
        borderRadius: 50,
      },
    }),
  },
  saveBtnColor: {
    backgroundColor: saveBtnColor,
  },
  skipBtnColor: {
    backgroundColor: skipBtnColor,
  },
  saveBtnText: {
    color: saveBtnTextColor,
  },
  skipBtnText: {
    color: skipBtnTextColor,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 16,
  },
  titleGenderForm: {
    marginTop: -10,
  },
  btnForm: {
    ...Platform.select({
      ios: {
        top: 50,
      },
      android: {
        top: 50,
      },
    }),
  },
});

export interface Props {}
export interface State {}

export class ProfileRoot extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Form style={profileRootStyles.titleGenderForm}>
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
        <Form style={profileRootStyles.btnForm}>
          <Form style={profileRootStyles.shadow}>
            <Button
              style={[profileRootStyles.button, profileRootStyles.saveBtnColor]}
            >
              <Text style={profileRootStyles.saveBtnText}>저장</Text>
            </Button>
          </Form>
          <Form style={[profileRootStyles.shadow, { height: 170 }]}>
            <Button
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
