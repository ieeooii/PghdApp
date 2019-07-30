import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { userinfoStyles } from '../style';
import { Email } from './email';
import { Nickname } from './nickname';
import { Password } from './password';
import { Terms } from './terms';

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
