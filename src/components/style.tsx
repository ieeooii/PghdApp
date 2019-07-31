import { Platform, StyleSheet } from 'react-native';

export const userInfo = StyleSheet.create({
  background: {
    ...Platform.select({
      ios: {
        top: 100,
      },
      android: {
        top: 100,
      },
    }),
  },
  textHeight: {
    ...Platform.select({
      ios: {
        margin: 10,
      },
      android: {
        margin: 5,
      },
    }),
  },
  pickerWidth: {
    ...Platform.select({
      ios: {
        width: 100,
        marginLeft: 200,
      },
      android: {
        width: 100,
        marginLeft: 240,
      },
    }),
  },
  datePickerWidth: {
    ...Platform.select({
      ios: {
        marginRight: 150,
      },
      android: {
        marginRight: 180,
      },
    }),
  },
});

export const modifyPhoto = StyleSheet.create({
  userIcon: {
    fontSize: 120,
  },
  userIconMoveCenter: {
    alignItems: 'center',
    ...Platform.select({
      ios: {
        top: 70,
      },
      android: {
        top: 50,
      },
    }),
  },
  penIconMoveRight: {
    fontSize: 25,
    ...Platform.select({
      ios: {
        marginLeft: 280,
        bottom: 20,
      },
      android: {
        marginLeft: 300,
      },
    }),
  },
});
