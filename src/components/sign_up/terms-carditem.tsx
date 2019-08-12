import { Button, CardItem, Icon, Text } from 'native-base';
import * as React from 'react';
import { Platform } from 'react-native';
import { termsStyles } from '../style';

export interface Props {
  text: string;
  option: string;
  termsStyles: any;
  termsAgree: any;
  termsDisAgree: any;
  eachCheckColor: any;
  eachIconBtn: any;
  reduxStore: any;
}
export interface State {}

let colorFlag = 0;

export class TermsCardItem extends React.Component<Props, State> {
  public props: any;
  constructor(props: Props) {
    super(props);
  }
  render() {
    // console.log('terms_carditem.tsx 렌더');
    return (
      <CardItem>
        <Button
          onPress={() => {
            if (colorFlag === 0) {
              this.props.termsAgree();
              colorFlag = 1;
            } else {
              this.props.termsDisAgree();
              colorFlag = 0;
            }
          }}
          style={[this.props.eachIconBtn]}
          transparent
        >
          <Icon
            name='checkmark'
            style={[
              this.props.eachCheckBtn,
              termsStyles.checkBtn,
              { color: this.props.eachCheckColor },
            ]}
          />
        </Button>
        <Text>{this.props.text}</Text>
        <Text style={termsStyles.promotionTxt}>{this.props.option}</Text>
        <Button
          onPress={() => {
            this.props.reduxStore.navigation.navigate('TermsText');
          }}
          style={[termsStyles.arrowBtn, this.props.eachArrowBtn]}
          transparent
        >
          {Platform.OS === 'ios' ? (
            <Icon name='arrow-forward' style={termsStyles.arrowBtnColor} />
          ) : (
            <Icon name='arrow-dropright' style={termsStyles.arrowBtnColor} />
          )}
        </Button>
      </CardItem>
    );
  }
}
