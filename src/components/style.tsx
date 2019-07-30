import { Platform, StyleSheet } from 'react-native';

// userinfo STYLE
const buttonColorIos: string = '#5800ff';
const buttonColorAndroid: string = '#5800ff';

export const userinfoStyles = StyleSheet.create({
  infoContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    ...Platform.select({
      ios: {
        marginTop: 50,
        marginBottom: 40,
      },
      android: { marginTop: 20, marginBottom: 50 },
    }),
  },
  termsContent: {
    ...Platform.select({
      ios: {
        bottom: 80,
        marginBottom: 100,
      },
      android: {
        bottom: 100,
      },
    }),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '80%',
    marginLeft: 38,
    ...Platform.select({
      ios: {
        borderColor: buttonColorIos,
        backgroundColor: buttonColorIos,
        borderRadius: 50,
        bottom: 150,
      },
      android: {
        borderColor: buttonColorAndroid,
        backgroundColor: buttonColorAndroid,
        bottom: 70,
        right: 1,
      },
    }),
  },
  buttonText: {
    color: 'white',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
});

// email STYLE
export const emailStyles = StyleSheet.create({
  form: {
    marginBottom: 0,
    marginRight: 20,
  },
  txtIsValid: {
    color: 'red',
    marginLeft: 20,
  },
});

// password STYLE
export const passwordStyles = StyleSheet.create({
  form: {
    marginRight: 20,
  },
  txtIsValid: {
    color: 'red',
    marginLeft: 20,
  },
});

// terms STYLE
export const termsStyles = StyleSheet.create({
  form: {
    ...Platform.select({
      ios: {
        marginLeft: 35,
      },
      android: {
        marginLeft: 40,
      },
    }),
  },
  card: {
    alignItems: 'center',
    width: 300,
    ...Platform.select({
      ios: {},
    }),
  },
  cardItem: {},
  cardItemBody: {
    alignItems: 'center',
  },
  promotionTxt: {
    color: 'red',
  },
  arrowBtnColor: {
    color: 'black',
  },
  arrowBtn: {
    height: 35,
    bottom: 2,
  },
  arrowBtn1: {
    left: 52,
  },
  arrowBtn2: {
    left: 36,
  },
  arrowBtn3: {
    left: 40,
  },
  checkBtn: {
    color: 'green',
    ...Platform.select({
      ios: {
        fontSize: 40,
      },
      android: {
        fontSize: 23,
      },
    }),
  },
  checkBtn1: {
    right: 35,
  },
  checkBtn2: {
    right: 20,
  },
  checkBtn3: {
    right: 20,
  },
  allAgree: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  allAgreeIcon: {
    color: 'green',
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
        right: 90,
      },
      android: {
        right: 91,
      },
    }),
  },
  allAgreeTxt: {
    right: 20,
  },
});
