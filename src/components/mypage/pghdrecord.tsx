import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  pghdContainer: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        borderRadius: 20,
      },
      android: {
        borderRadius: 10,
      },
    }),
    marginTop: 10,
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
        elevation: 8,
      },
    }),
  },
});

export class PghdRecord extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View
          style={
            Platform.OS === 'ios'
              ? styles.pghdContainer
              : [styles.pghdContainer, styles.shadow]
          }
        >
          <Text style={{ textAlign: 'center' }}>일별 PGHD 기록</Text>
        </View>
      </View>
    );
  }
}
