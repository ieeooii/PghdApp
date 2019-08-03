import { Button } from 'native-base';
import * as React from 'react';
import {
  Image,
  Platform,
  // StyleSheet,
  Text,
  View,
  YellowBox,
} from 'react-native';

import { myprofileStyles, pghdRecordStyles } from '../style';

const styles = pghdRecordStyles;

export class PghdRecord extends React.Component {
  constructor(props: any) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated',
      'Module RCTImageLoader',
    ]);
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View
          style={[
            styles.pghdContainerTop,
            Platform.OS === 'android' ? styles.shadow : {},
          ]}
        >
          <View style={[myprofileStyles.circle, { width: 36, height: 36 }]} />
          <Text style={{ marginLeft: 10 }}>react-native</Text>
          <Text style={{ marginLeft: 5, color: '#767676' }}>| 1.10</Text>
          <Button
            style={[
              { backgroundColor: 'white', position: 'absolute', right: 5 },
              Platform.OS === 'android' ? { elevation: 0 } : {},
            ]}
          >
            <Image
              source={require('./PGHD-RECORD-SELECT-ICON.png')}
              style={{ resizeMode: 'contain', height: '45%' }}
            />
          </Button>
        </View>
        <View
          style={[
            styles.pghdContainerBotttom,
            Platform.OS === 'ios' ? {} : styles.shadow,
          ]}
        >
          <Text style={{ textAlign: 'center' }}>일별 PGHD 기록</Text>
        </View>
      </View>
    );
  }
}
