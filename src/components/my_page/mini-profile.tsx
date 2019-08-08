import { Button, Form, Text } from 'native-base';
import * as React from 'react';
import { myprofileStyles } from '../style';

const styles = myprofileStyles;
interface Props {
  navi: any;
}
interface State {}

export class MiniProfile extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Form>
        <Form style={[styles.shadow]}>
          <Button
            onPress={() => {
              this.props.navi.navigation.navigate('MyProfile');
            }}
            style={styles.myprofile}
          >
            <Form style={[styles.circle, { width: 80, height: 80 }]} />
            <Form style={{ flexDirection: 'column' }}>
              <Text style={[styles.usernicknameMypage, { color: 'black' }]}>
                react-native
              </Text>
              <Form style={{ flexDirection: 'row' }}>
                <Text style={[styles.usernicknameMypage, { color: '#767676' }]}>
                  10대
                </Text>
                <Form style={styles.relationship}>
                  <Text style={styles.relationshipTag}>관계</Text>
                </Form>
              </Form>
            </Form>
          </Button>
        </Form>
      </Form>
    );
  }
}
