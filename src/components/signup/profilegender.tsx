import { Button, Segment, Text } from 'native-base';
import * as React from 'react';
import { StyleSheet } from 'react-native';

const profileHeaderStyles = StyleSheet.create({
  genderSegment: {
    backgroundColor: 'transparent',
    marginTop: 70,
    height: 100,
  },
  genderBtn: {
    justifyContent: 'center',
    borderColor: 'black',
    height: 50,
    width: 100,
  },
  genderBtnTxt: {
    color: 'black',
  },
});

export interface Props {}
export interface State {}

export class ProfileGender extends React.Component<Props, State> {
  render() {
    return (
      <Segment style={profileHeaderStyles.genderSegment}>
        <Button style={profileHeaderStyles.genderBtn} first>
          <Text style={profileHeaderStyles.genderBtnTxt}>남자</Text>
        </Button>
        <Button style={profileHeaderStyles.genderBtn} last>
          <Text style={profileHeaderStyles.genderBtnTxt}>여자</Text>
        </Button>
      </Segment>
    );
  }
}
