import { Button, Segment, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';

const profileHeaderStyles = StyleSheet.create({
  genderSegment: {
    marginTop: 70,
    height: 100,
  },
  genderButton: {
    justifyContent: 'center',
    borderColor: 'black',
    height: 50,
    width: 100,
  },
  genderButtonText: {
    color: 'black',
  },
});

export interface Props {}
export interface State {}

export class ProfileGender extends React.Component<Props, State> {
  render() {
    return (
      <Segment style={profileHeaderStyles.genderSegment}>
        <Button style={profileHeaderStyles.genderButton} first>
          <Text style={profileHeaderStyles.genderButtonText}>남자</Text>
        </Button>
        <Button style={profileHeaderStyles.genderButton} last>
          <Text style={profileHeaderStyles.genderButtonText}>여자</Text>
        </Button>
      </Segment>
    );
  }
}
