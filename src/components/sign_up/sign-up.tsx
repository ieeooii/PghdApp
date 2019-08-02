import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { profileRootStyles, userinfoStyles } from '../style';
import { Email } from './email';
import { Nickname } from './nick-name';
import { Password } from './password';
import { Terms } from './terms';

export interface Props {
  navigation: any;
}
export interface State {}

export class Signup extends React.Component<Props, State> {
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
        <Form style={profileRootStyles.shadow}>
          <Button
            onPress={() => {
              this.props.navigation.navigate('ProfileRoot');
            }}
            style={profileRootStyles.button}
          >
            <Text style={profileRootStyles.buttonText}>완료</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
