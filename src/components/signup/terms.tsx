import { Body, Button, Card, CardItem, Form, Icon, Text } from 'native-base';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

const termsStyles = StyleSheet.create({
  form: {
    ...Platform.select({
      ios: {
        marginLeft: 35,
      },
      android: {
        marginLeft: 40,
      },
    }),
  },
  card: {
    alignItems: 'center',
    width: 300,
    ...Platform.select({
      ios: {},
    }),
  },
  cardItem: {},
  cardItemBody: {
    alignItems: 'center',
  },
  promotionTxt: {
    color: 'red',
  },
  arrowBtnColor: {
    color: 'black',
  },
  arrowBtn: {
    height: 35,
    bottom: 2,
  },
  arrowBtn1: {
    left: 52,
  },
  arrowBtn2: {
    left: 36,
  },
  arrowBtn3: {
    left: 40,
  },
  checkBtn: {
    color: 'green',
    ...Platform.select({
      ios: {
        fontSize: 40,
      },
      android: {
        fontSize: 23,
      },
    }),
  },
  checkBtn1: {
    right: 35,
  },
  checkBtn2: {
    right: 20,
  },
  checkBtn3: {
    right: 22,
  },
  allAgree: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  allAgreeIcon: {
    color: 'green',
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
        right: 90,
      },
      android: {
        right: 91,
      },
    }),
  },
  allAgreeTxt: {
    right: 20,
  },
});

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
