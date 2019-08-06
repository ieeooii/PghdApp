import { Container } from 'native-base';
import * as React from 'react';
import { ModifyPhoto } from './modify-photo';
import { UserInfo } from './user-info';

export interface Props {}
export interface State {}

export class MyProfile extends React.Component<Props, State> {
  requestFetch() {
    return fetch('http://api-stage.humanscape.io:80/api/v1/users/{email}', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  render() {
    this.requestFetch = this.requestFetch.bind(this);

    return (
      <Container>
        <ModifyPhoto />
        <UserInfo />
      </Container>
    );
  }
}
