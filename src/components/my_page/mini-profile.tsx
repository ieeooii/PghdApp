import { Button } from 'native-base';
import * as React from 'react';
import { Text, View } from 'react-native';
import { myprofileStyles } from '../style';

const styles = myprofileStyles;
export interface Props {
  navi: any;
}
export interface State {}

export class MiniProfile extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={[styles.shadow]}>
          <Button
            onPress={() => {
              this.props.navi.navigation.navigate('MyProfile');
            }}
            style={styles.myprofile}
          >
            <View style={[styles.circle, { width: 80, height: 80 }]} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={[styles.usernicknameMypage, { color: 'black' }]}>
                react-native
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.usernicknameMypage, { color: '#767676' }]}>
                  10대
                </Text>
                <View style={styles.relationship}>
                  <Text style={styles.relationshipTag}>관계</Text>
                </View>
              </View>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}