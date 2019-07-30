import { Button, Segment, Text } from 'native-base';
import * as React from 'react';
import { profileHeaderStyles } from '../style';

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
