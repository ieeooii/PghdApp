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
  isBtnAble: any;
  isBtnDisAble: any;
  rootState: any;
}
export interface State {}

let colorFlag = 0;

export class TermsCardItem extends React.Component<Props, State> {
  public props: any;
  public state: State;
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('terms_carditem.tsx 렌더');

    return (
      <CardItem>
        <Icon
          onPress={() => {
            if (colorFlag === 0) {
              this.props.termsAgree();
              this.props.isBtnAble();
              colorFlag = 1;
            } else {
              this.props.termsDisAgree();
              this.props.isBtnDisAble();
              colorFlag = 0;
            }
          }}
          name='checkmark'
          style={[
            this.props.eachCheckBtn,
            termsStyles.checkBtn,
            { color: this.props.eachCheckColor },
          ]}
        />
        <Text>{this.props.text}</Text>
        <Text style={termsStyles.promotionTxt}>{this.props.option}</Text>
        <Button
          transparent
          style={[termsStyles.arrowBtn, this.props.eachArrowBtn]}
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
