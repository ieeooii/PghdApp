import { Platform, StyleSheet } from 'react-native';

export const emailPasswordForm = StyleSheet.create({
  topLoginForm: {
    marginTop: 200,
  },
  labelWidth: {
    marginRight: 20,
  },
});

export const buttonColorIos: string = '#5800ff';
export const buttonColorAndroid: string = '#5800ff';

export const loginbtn = StyleSheet.create({
  loginBtn: {
    marginLeft: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '80%',
    ...Platform.select({
      ios: {
        borderColor: buttonColorIos,
        backgroundColor: buttonColorIos,
        borderRadius: 50,
      },
      android: {
        borderColor: buttonColorAndroid,
        backgroundColor: buttonColorAndroid,
      },
    }),
  },
  bottomLoginForm: {
    marginTop: 30,
    marginBottom: 30,
  },
  signupPasswordRow: {
    flexDirection: 'row',
  },
  signupPasswordFont: {
    color: 'black',
    fontSize: 13,
  },
  etcLeftBtnMargin: {
    ...Platform.select({
      ios: {
        marginLeft: 63,
      },
      android: {
        marginLeft: 75,
      },
    }),
  },
  MiddleLineMargin: {
    top: 13,
    marginLeft: 40,
    marginRight: 30,
  },
  loginTextColor: {
    color: 'white',
  },
  shadowBtn: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 16,
  },
});
