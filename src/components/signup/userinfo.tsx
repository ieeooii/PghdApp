import { Button, Container, Content, Form, Text } from 'native-base';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Email } from './email';
import { Nickname } from './nickname';
import { Password } from './password';
import { Terms } from './terms';

const buttonColorIos: string = '#5800ff';
const buttonColorAndroid: string = '#5800ff';

const userinfoStyles = StyleSheet.create({
  infoContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    ...Platform.select({
      ios: {
        marginTop: 50,
        marginBottom: 40,
      },
      android: { marginTop: 20, marginBottom: 50 },
    }),
  },
  termsContent: {
    ...Platform.select({
      ios: {
        bottom: 80,
        marginBottom: 100,
      },
      android: {
        bottom: 100,
        // marginBottom: 100,
      },
    }),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '80%',
    marginLeft: 38,
    ...Platform.select({
      ios: {
        borderColor: buttonColorIos,
        backgroundColor: buttonColorIos,
        borderRadius: 50,
        bottom: 150,
      },
      android: {
        borderColor: buttonColorAndroid,
        backgroundColor: buttonColorAndroid,
        bottom: 70,
        right: 1,
      },
    }),
  },
  buttonText: {
    color: 'white',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
});

export interface Props {}
export interface State {}

export class Userinfo extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Form style={userinfoStyles.infoContent}>
          <Email />
          <Password />
          <Nickname />
        </Form>
        <Form style={userinfoStyles.termsContent}>
          <Terms />
        </Form>
        <Form style={userinfoStyles.shadow}>
          <Button style={userinfoStyles.button}>
            <Text style={userinfoStyles.buttonText}>완료</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
