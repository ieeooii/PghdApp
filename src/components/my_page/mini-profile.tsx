import { Button, Form, Text } from 'native-base';
import * as React from 'react';
import { myprofileStyles } from '../style';

const styles = myprofileStyles;

export interface Props {
  navi: any;
  children?: any;
}
export interface State {}

export class MiniProfile extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let age = '미정';
    if (this.props.children[2] !== undefined) {
      age = String(this.props.children[2])[0] + '0대';
    }
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
                {this.props.children[0]}
              </Text>
              <Form style={{ flexDirection: 'row' }}>
                <Text style={[styles.usernicknameMypage, { color: '#767676' }]}>
                  {age}
                </Text>
                <Form style={styles.relationship}>
                  <Text style={styles.relationshipTag}>
                    {this.props.children[1]}
                  </Text>
                </Form>
              </Form>
            </Form>
          </Button>
        </Form>
      </Form>
    );
  }
}
