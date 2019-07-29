import { Button, Container, Content, Form } from 'native-base';
import * as React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { Email } from './email';
import { Nickname } from './nickname';
import { Password } from './password';
import { Terms } from './terms';

const buttonColorIos: string = '#5800ff';
const buttonColorAndroid: string = '#5800ff';

const userinfoStyles = StyleSheet.create({
  infoContent: {
    marginTop: 50,
  },
  button: {
    marginLeft: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '80%',
    ...Platform.select({
      ios: {
        borderColor: buttonColorIos,
        backgroundColor: buttonColorIos,
        borderRadius: 50,
      },
      android: {
        borderColor: buttonColorAndroid,
        backgroundColor: buttonColorAndroid,
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
    elevation: 1,
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
        <Content style={userinfoStyles.infoContent}>
          <Email />
          <Password />
          <Nickname />
        </Content>
        <Content>
          <Terms />
        </Content>
        <Content style={userinfoStyles.shadow}>
          <Button style={userinfoStyles.button}>
            <Text style={userinfoStyles.buttonText}>완료</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
