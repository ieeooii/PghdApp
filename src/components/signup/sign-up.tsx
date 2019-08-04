import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { signupStyles } from '../style';
import { Email } from './email';
import { Nickname } from './nickname';
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
        <Form style={signupStyles.infoContent}>
          <Email />
          <Password />
          <Nickname />
        </Form>
        <Form style={signupStyles.termsContent}>
          <Terms />
        </Form>
        <Form style={signupStyles.shadow}>
          <Button
            onPress={() => {
              this.props.navigation.navigate('ProfileRoot');
            }}
            style={signupStyles.button}
          >
            <Text>완료</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
