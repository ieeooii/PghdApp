// tslint:disable-next-line: import-name
import AsyncStorage from '@react-native-community/async-storage';
import { Container } from 'native-base';
import * as React from 'react';
import { ModifyPhoto } from './modify-photo';
import { UserInfo } from './user-info';

export interface Props {}
export interface State {
  email: string;
  nickname: string;
  type: string;
  birthDate: string;
  relationship: string;
}

export class MyProfile extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      nickname: '',
      type: '',
      birthDate: '',
      relationship: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(token =>
        AsyncStorage.getItem('email')
          .then(email => {
            const checkToken = token !== null ? JSON.parse(token) : null;
            const checkEmail = email !== null ? JSON.parse(email) : null;
            return fetch(
              `http://api-stage.humanscape.io:80/api/v1/users/${checkEmail}`,
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + checkToken,
                },
              },
            )
              .then(response => {
                return response.json();
              })
              .then(responseJSON => {
                // console.log(responseJSON)
                this.setState({
                  email: responseJSON.email,
                  nickname: responseJSON.nickname,
                  type: responseJSON.type,
                  birthDate: responseJSON.birthDate,
                  relationship: responseJSON.relationship,
                });
              })
              .catch(error => {
                console.log('fetch error', error);
              });
          })
          .catch(error => console.log('email erorr', error)),
      )
      .catch(error => console.log('token error', error));
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <ModifyPhoto />
        <UserInfo rootState={this.state} />
      </Container>
    );
  }
}
