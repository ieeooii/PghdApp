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
  formText: { fontSize: 30 },
  genderContent: {
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
  firstContent: {
    marginTop: -10,
  },
  btnContent: {
    bottom: 70,
  },
});

export interface Props {}
export interface State {}

export class ProfileRoot extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Content style={profileRootStyles.firstContent}>
          <Content style={profileRootStyles.form}>
            <Text style={profileRootStyles.formText}>내 정보</Text>
          </Content>
          <Content style={profileRootStyles.genderContent}>
            <ProfileGender />
          </Content>
        </Content>
        <Content>
          <ProfileBody />
        </Content>
        <Content style={profileRootStyles.btnContent}>
          <View style={profileRootStyles.shadow}>
            <Button
              style={[profileRootStyles.button, profileRootStyles.saveBtnColor]}
            >
              <Text style={profileRootStyles.saveBtnText}>저장</Text>
            </Button>
          </View>
          <View style={[profileRootStyles.shadow, { height: 170 }]}>
            <Button
              style={[profileRootStyles.button, profileRootStyles.skipBtnColor]}
            >
              <Text style={profileRootStyles.skipBtnText}>SKIP</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
