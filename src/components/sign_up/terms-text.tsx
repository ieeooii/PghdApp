import { Text } from 'native-base';
import * as React from 'react';

export interface Props {}
export interface State {}

export class TermsText extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    // console.log('terms-text.tsx 렌더');
    return <Text></Text>;
  }
}
