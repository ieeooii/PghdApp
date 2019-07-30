import { Platform, StyleSheet } from 'react-native';

const mainColor: string = '#5800ff';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  shadow: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation: 10,
      },
      android: {},
    }),
  },
  mainbutton: {
    width: '88%',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        height: '7%',
        borderRadius: 50,
        marginTop: 16,
      },
      android: {
        marginTop: 10,
      },
    }),
    justifyContent: 'center',
  },
  signinplat: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        paddingBottom: 2,
      },
      android: {
        marginTop: 10,
      },
    }),
  },
  signupplat: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: mainColor,
        backgroundColor: mainColor,
        paddingBottom: 2,
      },
      android: {},
    }),
  },
  fontweight: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
  },
  imagepo: {
    flex: 0,
    resizeMode: 'contain',
    maxHeight: '100%',
    width: '100%',
    ...Platform.select({
      ios: {
        height: '11%',
        marginTop: '120%',
      },
      android: {
        height: '15%',
        marginTop: '100%',
      },
    }),
  },
});
