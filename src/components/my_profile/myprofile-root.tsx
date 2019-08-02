import { Container } from 'native-base';
import * as React from 'react';
import { ModifyPhoto } from './modify-photo';
import { UserInfo } from './user-info';

export interface Props {}
export interface State {}

export class MyProfile extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <ModifyPhoto />
        <UserInfo />
      </Container>
    );
  }
}
