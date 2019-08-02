import { Body, Button, Card, CardItem, Form, Icon, Text } from 'native-base';
import * as React from 'react';
import { Platform } from 'react-native';
import { termsStyles } from '../style';

export interface Props {}
export interface State {}

export class Terms extends React.Component<Props, State> {
  render() {
    return (
      <Form style={termsStyles.form}>
        <Card style={termsStyles.card}>
          <CardItem bordered>
            <Body style={[termsStyles.cardItemBody, termsStyles.allAgree]}>
              <Icon
                name='checkmark-circle-outline'
                style={termsStyles.allAgreeIcon}
              />
              <Text style={termsStyles.allAgreeTxt}>전체동의</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Icon
              name='checkmark'
              style={[termsStyles.checkBtn1, termsStyles.checkBtn]}
            />
            <Text>서비스 이용약관 </Text>
            <Button
              transparent
              style={[termsStyles.arrowBtn, termsStyles.arrowBtn1]}
            >
              {Platform.OS === 'ios' ? (
                <Icon name='arrow-forward' style={termsStyles.arrowBtnColor} />
              ) : (
                <Icon
                  name='arrow-dropright'
                  style={termsStyles.arrowBtnColor}
                />
              )}
            </Button>
          </CardItem>
          <CardItem>
            <Icon
              name='checkmark'
              style={[termsStyles.checkBtn2, termsStyles.checkBtn]}
            />
            <Text>개인정보 수집 및 이용</Text>
            <Button
              transparent
              style={[termsStyles.arrowBtn, termsStyles.arrowBtn2]}
            >
              {Platform.OS === 'ios' ? (
                <Icon name='arrow-forward' style={termsStyles.arrowBtnColor} />
              ) : (
                <Icon
                  name='arrow-dropright'
                  style={termsStyles.arrowBtnColor}
                />
              )}
            </Button>
          </CardItem>
          <CardItem>
            <Icon
              name='checkmark'
              style={[termsStyles.checkBtn3, termsStyles.checkBtn]}
            />
            <Text>홍보 안내 수신</Text>
            <Text style={termsStyles.promotionTxt}> (선택)</Text>
            <Button
              transparent
              style={[termsStyles.arrowBtn, termsStyles.arrowBtn3]}
            >
              {Platform.OS === 'ios' ? (
                <Icon name='arrow-forward' style={termsStyles.arrowBtnColor} />
              ) : (
                <Icon
                  name='arrow-dropright'
                  style={termsStyles.arrowBtnColor}
                />
              )}
            </Button>
          </CardItem>
        </Card>
      </Form>
    );
  }
}
