import { Button, Segment, Text } from 'native-base';
import * as React from 'react';
import { profilegenderStyles } from '../style';

export interface Props {
  reduxStore: any;
}
export interface State {
  btnColorMan: string;
  btnColorWoman: string;
}

export class ProfileGender extends React.Component<Props, State> {
  public state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      btnColorMan: 'transparent',
      btnColorWoman: 'transparent',
    };
  }
  render() {
    // console.log('profilgender.tsx 렌더');
    return (
      <Segment style={profilegenderStyles.genderSegment}>
        <Button
          onPress={() => {
            this.props.reduxStore.changeProfileState('gender', '남자');
            this.setState({
              btnColorMan: 'skyblue',
              btnColorWoman: 'transparent',
            });
          }}
          style={[
            profilegenderStyles.genderBtn,
            { backgroundColor: this.state.btnColorMan },
          ]}
          first
        >
          <Text style={profilegenderStyles.genderBtnTxt}>남자</Text>
        </Button>
        <Button
          onPress={() => {
            this.props.reduxStore.changeProfileState('gender', '여자');
            this.setState({
              btnColorWoman: 'skyblue',
              btnColorMan: 'transparent',
            });
          }}
          style={[
            profilegenderStyles.genderBtn,
            { backgroundColor: this.state.btnColorWoman },
          ]}
          last
        >
          <Text style={profilegenderStyles.genderBtnTxt}>여자</Text>
        </Button>
      </Segment>
    );
  }
}
