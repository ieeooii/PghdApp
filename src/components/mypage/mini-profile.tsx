import { Button } from 'native-base';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  myprofile: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderRadius: 0,
    alignSelf: 'stretch',
    ...Platform.select({
      ios: {
        height: 160,
        paddingLeft: 30,
        paddingTop: 30,
      },
      android: {
        height: 140,
      },
    }),
    padding: 30,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowRadius: 16,
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: '#F0F0F5',
    alignItems: 'center',
  },
  usernicknameMypage: {
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: 30,
    marginLeft: 20,
  },
  relationship: {
    width: 60,
    padding: 4,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        borderRadius: 20,
      },
      android: {
        borderRadius: 4,
      },
    }),
    borderWidth: 0.5,
    borderColor: '#2600FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});

export class MiniProfile extends React.Component {
  render() {
    return (
      <View>
        <View style={[styles.shadow]}>
          <Button style={styles.myprofile}>
            <View style={styles.circle} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={[styles.usernicknameMypage, { color: 'black' }]}>
                react-native
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.usernicknameMypage, { color: '#767676' }]}>
                  10대
                </Text>
                <View style={styles.relationship}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#2600FF',
                    }}
                  >
                    관계
                  </Text>
                </View>
              </View>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}
