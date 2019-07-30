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


// profile-root STYLE
const saveBtnColor: string = 'white';
const skipBtnColor: string = '#5800ff';
const saveBtnTextColor: string = '#5800ff';
const skipBtnTextColor: string = '#F8FCFA';

export const profileRootStyles = StyleSheet.create({
  form: {
    ...Platform.select({
      ios: {
        top: 80,
        marginLeft: 140,
      },
      android: {
        top: 60,
        marginLeft: 150,
      },
    }),
  },
  formTxt: { fontSize: 30 },
  genderForm: {
    ...Platform.select({
      ios: {
        paddingBottom: 20,
      },
      android: {
        bottom: 20,
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
    marginLeft: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 10,
    ...Platform.select({
      ios: {
        borderRadius: 50,
      },
    }),
  },
  saveBtnColor: {
    backgroundColor: saveBtnColor,
  },
  skipBtnColor: {
    backgroundColor: skipBtnColor,
  },
  saveBtnText: {
    color: saveBtnTextColor,
  },
  skipBtnText: {
    color: skipBtnTextColor,
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
  elevation: 16,
  },
  titleGenderForm: {
    marginTop: -10,
  },
  btnForm: {
    ...Platform.select({
      ios: {
        top: 50,
      },
      android: {
        top: 50,
      },
    }),
  },
});

// profilebody STYLE
export const profileBodyStyles = StyleSheet.create({
  innerForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  datePicker: {
    marginTop: -7,
    flexDirection: 'row',
  },
  datePickerIcon: {
    marginLeft: 22,
    marginRight: 16,
    ...Platform.select({
      ios: {
        marginTop: 7,
        fontSize: 21,
      },
      android: {
        marginTop: 10,
        fontSize: 20,
        color: '#767877',
      },
    }),
  },
  LastPickerForm: {
    marginTop: -17,
    ...Platform.select({
      ios: {
        marginRight: 16,
      },
      android: {
        marginRight: 1,
      },
    }),
  },
  LastPicker: {
    // width를 안주면 android에서 클릭 불가능
    width: 130,
  },
});

// profilegender STYLE
export const profilegenderStyles = StyleSheet.create({
  genderSegment: {
    backgroundColor: 'transparent',
    marginTop: 70,
    height: 100,
  },
  genderBtn: {
    justifyContent: 'center',
    borderColor: 'black',
    height: 50,
    width: 100,
  },
  genderBtnTxt: {
    color: 'black',
  },

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
