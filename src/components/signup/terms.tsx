import { Form } from 'native-base';
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

const termsStyles = StyleSheet.create({
  form: {
    alignItems: 'center',
  },
});

export interface Props {}
export interface State {}

export class Terms extends React.Component<Props, State> {
  render() {
    return (
      <Form style={termsStyles.form}>
        <Text>약관 페이지</Text>
      </Form>
    );
  }
}
