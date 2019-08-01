import { Button } from 'native-base';
import * as React from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { mypageRootStyles } from '../style';
import { MiniProfile } from './mini-profile';
import { PghdRecord } from './pghdrecord';

const styles = mypageRootStyles;

export interface Props {
  navi: any;
}
export interface State {}

export class MypageRoot extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <MiniProfile navi={this.props} />
          <View
            style={[styles.shadow, { alignItems: 'center', marginBottom: 20 }]}
          >
            <Button
              style={
                Platform.OS === 'ios'
                  ? styles.mainButton
                  : [styles.mainButton, styles.shadow]
              }
            >
              <Text style={styles.todayRecord}>오늘 기록하기</Text>
            </Button>
          </View>
          <View style={[styles.shadow, { width: '90%', alignSelf: 'center' }]}>
            {/* scroll test용 입니다 */}
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
            <PghdRecord />
          </View>
        </ScrollView>
      </View>
    );
  }
}
