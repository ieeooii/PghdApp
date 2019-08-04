import { Body, Card, CardItem, Form, Icon, Text } from 'native-base';
import * as React from 'react';
import { termsStyles } from '../style';
import { TermsCardItem } from './terms_carditem';

export interface Props {
  termsCheck: any;
  isBtnAble: any;
  isBtnDisAble: any;
  rootState: any;
}
export interface State {
  checkAllColor: string;
  terms1Color: string;
  terms2Color: string;
  terms3Color: string;
}

let colorFlag = 0;
let colorFlag2 = 1;

export class Terms extends React.Component<Props, State> {
  public props: any;
  public state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      checkAllColor: 'black',
      terms1Color: 'black',
      terms2Color: 'black',
      terms3Color: 'black',
    };
  }

  changeColor(type: string, color: string) {
    if (type === 'all') {
      this.setState({
        checkAllColor: color,
        terms1Color: color,
        terms2Color: color,
        terms3Color: color,
      });
    } else if (type === 'terms1') {
      this.setState({
        terms1Color: color,
      });
    } else if (type === 'terms2') {
      this.setState({
        terms2Color: color,
      });
    } else if (type === 'terms3') {
      this.setState({
        terms3Color: color,
      });
    }
  }

  render() {
    this.changeColor = this.changeColor.bind(this);
    // console.log('terms.tsx 렌더');

    if (
      this.state.terms1Color === 'green' &&
      this.state.terms2Color === 'green' &&
      this.state.terms3Color === 'green' &&
      colorFlag === 0
    ) {
      this.props.termsCheck('all', true);
      this.changeColor('all', 'green');
      colorFlag = 1;
      colorFlag2 = 0;
    } else if (
      !(
        this.state.terms1Color === 'green' &&
        this.state.terms2Color === 'green' &&
        this.state.terms3Color === 'green'
      ) &&
      colorFlag2 === 0
    ) {
      colorFlag2 = 1;
      colorFlag = 0;
      this.setState({
        checkAllColor: 'black',
      });
    }

    return (
      <Form style={termsStyles.form}>
        <Card style={termsStyles.card}>
          <CardItem bordered>
            <Body style={[termsStyles.cardItemBody, termsStyles.allAgree]}>
              <Icon
                onPress={() => {
                  if (colorFlag === 0) {
                    this.changeColor('all', 'green');
                    this.props.termsCheck('all', true);
                    this.props.isBtnAble();
                    colorFlag = 1;
                    colorFlag2 = 0;
                  } else {
                    this.changeColor('all', 'black');
                    this.props.termsCheck('all', false);
                    this.props.isBtnDisAble();
                    colorFlag = 0;
                    colorFlag2 = 1;
                  }
                }}
                name='checkmark-circle-outline'
                style={[
                  termsStyles.allAgreeIcon,
                  { color: this.state.checkAllColor },
                ]}
              />
              <Text style={termsStyles.allAgreeTxt}>전체동의</Text>
            </Body>
          </CardItem>
          <TermsCardItem
            text={'서비스 이용약관'}
            option={''}
            eachCheckBtn={termsStyles.checkBtn1}
            eachArrowBtn={termsStyles.arrowBtn1}
            eachCheckColor={this.state.terms1Color}
            isBtnAble={this.props.isBtnAble}
            isBtnDisAble={this.props.isBtnDisAble}
            termsAgree={() => {
              this.changeColor('terms1', 'green');
              this.props.termsCheck('agreementService', true);
            }}
            termsDisAgree={() => {
              this.changeColor('terms1', 'black');
              this.props.termsCheck('agreementService', false);
            }}
            rootState={this.props.rootState} // root state 확인용
          />
          <TermsCardItem
            text={'개인정보 수집 및 이용'}
            option={''}
            eachCheckBtn={termsStyles.checkBtn2}
            eachArrowBtn={termsStyles.arrowBtn2}
            eachCheckColor={this.state.terms2Color}
            isBtnAble={this.props.isBtnAble}
            isBtnDisAble={this.props.isBtnDisAble}
            termsAgree={() => {
              this.changeColor('terms2', 'green');
              this.props.termsCheck('agreementPrivate', true);
            }}
            termsDisAgree={() => {
              this.changeColor('terms2', 'black');
              this.props.termsCheck('agreementPrivate', false);
            }}
            rootState={this.props.rootState} // root state 확인용
          />
          <TermsCardItem
            text={'홍보 안내 수신'}
            option={' (선택)'}
            eachCheckBtn={termsStyles.checkBtn3}
            eachArrowBtn={termsStyles.arrowBtn3}
            eachCheckColor={this.state.terms3Color}
            isBtnAble={this.props.isBtnAble}
            isBtnDisAble={this.props.isBtnDisAble}
            termsAgree={() => {
              this.changeColor('terms3', 'green');
              this.props.termsCheck('agreementMarketing', true);
            }}
            termsDisAgree={() => {
              this.changeColor('terms3', 'black');
              this.props.termsCheck('agreementMarketing', false);
            }}
            rootState={this.props.rootState} // root state 확인용
          />
        </Card>
      </Form>
    );
  }
}
