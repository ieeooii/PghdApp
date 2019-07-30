import { Button, Segment, Text } from 'native-base';
import * as React from 'react';
import { profilegenderStyles } from '../style';

export interface Props {}
export interface State {}

export class ProfileGender extends React.Component<Props, State> {
  render() {
    return (
      <Segment style={profilegenderStyles.genderSegment}>
        <Button style={profilegenderStyles.genderBtn} first>
          <Text style={profilegenderStyles.genderBtnTxt}>남자</Text>
        </Button>
        <Button style={profilegenderStyles.genderBtn} last>
          <Text style={profilegenderStyles.genderBtnTxt}>여자</Text>
        </Button>
      </Segment>
    );
  }
}
