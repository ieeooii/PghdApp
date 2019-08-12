// tslint:disable-next-line: import-name
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'native-base';
import * as React from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { mypageRootStyles } from '../style';
import { MiniProfile } from './mini-profile';
import { PghdRecord } from './pghd-record';

const styles = mypageRootStyles;

export interface Props {
  navigation: any;
  navi: any;
}
export interface State {}

export class MypageRoot extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount = async () => {
    try {
      await AsyncStorage.setItem(
        'token',
        JSON.stringify(this.props.navigation.state.params.signIn.signInToken),
      );
      await AsyncStorage.setItem(
        'email',
        JSON.stringify(this.props.navigation.state.params.signIn.email),
      );
    } catch (error) {
      console.log(error);
    }
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
              onPress={() => {
                this.props.navigation.navigate('TodayPghd');
              }}
            >
              <Text style={styles.todayRecord}>오늘 기록하기</Text>
            </Button>
          </View>
          <View style={[styles.shadow, { width: '90%', alignSelf: 'center' }]}>
            {/* scroll test용 입니다 */}
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
            <PghdRecord navi={this.props} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
