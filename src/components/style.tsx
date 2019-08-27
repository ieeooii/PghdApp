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
        margin: 3,
      },
      android: {
        margin: 0,
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
        marginRight: 138,
      },
      android: {
        marginRight: 179,
      },
    }),
  },
  relationshipPickerWidth: {
    ...Platform.select({
      ios: {
        width: 100,
        right: 7,
      },
      android: {
        width: 100,
        right: 0,
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

// signup STYLE
const buttonColorIos: string = '#5800ff';
const buttonColorAndroid: string = '#5800ff';

export const signupStyles = StyleSheet.create({
  signupContent: {
    // flex: 1,
    justifyContent: 'space-evenly',
    ...Platform.select({
      ios: {
        marginTop: 20,
        marginBottom: 10,
      },
      android: { marginTop: 20, marginBottom: 50 },
    }),
  },
  termsContent: {
    ...Platform.select({
      ios: {
        bottom: 30,
        marginBottom: 100,
      },
      android: {
        bottom: 70,
      },
    }),
  },
  button: {
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
        bottom: 100,
      },
      android: {
        borderColor: buttonColorAndroid,
        backgroundColor: buttonColorAndroid,
        bottom: 40,
        right: 1,
      },
    }),
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 3,
      },
    }),
  },
  androidShadow: {
    ...Platform.select({
      android: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 3,
      },
    }),
  },
});

export const emailPasswordForm = StyleSheet.create({
  topLoginForm: {
    marginTop: 200,
  },
  labelWidth: {
    marginRight: 20,
  },
});

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

// nickname STYLE
export const nicknameStyles = StyleSheet.create({
  form: {
    marginRight: 20,
    height: 120,
  },
  txtIsValid: {
    color: 'red',
    marginLeft: 20,
  },
});

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
  titleGenderForm: {
    marginTop: -10,
  },
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
  btnForm: {
    ...Platform.select({
      ios: {
        top: 170,
      },
      android: {
        top: 50,
      },
    }),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '80%',
    marginLeft: 38,
    marginBottom: 15,
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
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 10,
    ...Platform.select({
      ios: {
        borderRadius: 50,
        marginLeft: 175,
      },
      android: {
        marginLeft: 190,
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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 3,
      },
    }),
  },
  androidShadow: {
    ...Platform.select({
      android: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 3,
      },
    }),
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
  },
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
    ...Platform.select({
      ios: {},
      android: {
        right: 50,
        width: 45,
      },
    }),
  },
  arrowBtn1: {
    left: 40,
  },
  arrowBtn2: {
    left: 25,
  },
  arrowBtn3: {
    left: 25,
  },
  checkBtn: {
    ...Platform.select({
      ios: {
        fontSize: 43,
      },
      android: {
        fontSize: 25,
      },
    }),
  },
  iconBtn1: {
    right: 37,
  },
  iconBtn2: {
    right: 20,
  },
  iconBtn3: {
    right: 20,
  },
  checkBtn1: {
    right: 2,
  },
  checkBtn2: {
    right: 2,
  },
  checkBtn3: {
    right: 2,
  },
  allAgreeBtn: {
    ...Platform.select({
      ios: {
        right: 85,
      },
      android: {
        right: 85,
      },
    }),
  },
  allAgreeIcon: {
    ...Platform.select({
      ios: {
        fontSize: 33,
        fontWeight: 'bold',
        left: 10,
      },
      android: {
        fontSize: 32,
        left: 10,
      },
    }),
  },
  allAgree: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  allAgreeTxt: {
    right: 20,
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
  relationPickerForm: {
    marginTop: -17,
    ...Platform.select({
      ios: {
        marginRight: 0,
      },
      android: {
        marginRight: 1,
      },
    }),
  },
  relationPicker: {
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
});

const mainColor: string = '#5800ff';

// main.tsx
export const mainStyles = StyleSheet.create({
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

// mypage-mypage-root.tsx
export const mypageRootStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
      },
      android: {
        backgroundColor: '#F0F0F5',
      },
    }),
    flexDirection: 'column',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowRadius: 15,
        shadowOpacity: 0.15,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  mainButton: {
    width: '90%',
    height: 60,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        borderRadius: 50,
      },
      android: {
        borderRadius: 10,
      },
    }),
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  todayRecord: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },
});

// mypage-my-profile.tsx
export const myprofileStyles = StyleSheet.create({
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
  relationshipTag: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2600FF',
  },
});

// mypage-pghdrecord.tsx
export const pghdRecordStyles = StyleSheet.create({
  pghdContainerTop: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderBottomColor: '#F0F0F5',
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pghdContainerBotttom: {
    zIndex: 0,
    width: '100%',
    minHeight: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 10,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowRadius: 15,
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  shadowZero: {
    ...Platform.select({
      ios: {
        shadowColor: 'white',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 0,
        shadowOpacity: 0,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  fab: {
    backgroundColor: 'rgba(0, 255, 0, 0)',
    borderRadius: 0,
    height: 40,
    position: 'absolute',
    ...Platform.select({
      ios: {
        width: 40,
        margin: 26,
        right: -36,
      },
      android: {
        width: 60,
        margin: 26,
        marginTop: -10,
        right: -38,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonForm: {
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'column',
    marginTop: -40,
    position: 'absolute',
    right: 60,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowRadius: 10,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    ...Platform.select({
      ios: {
        width: 80,
      },
      android: {
        width: 60,
        marginTop: -18,
        borderWidth: 1,
        borderColor: '#F0F0F5',
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// mypage-today-pghd.tsx
export const todayPghd = StyleSheet.create({
  textInput: {
    padding: 20,
    paddingTop: 10,
    fontSize: 18,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  upIoadButton: {
    backgroundColor: 'white',
    height: 36,
    borderColor: 'white',
    borderWidth: 1,
    elevation: 0,
  },
  buttonTextColor: {
    fontSize: 17,
    marginLeft: 2,
    fontWeight: 'normal',
    ...Platform.select({
      ios: {
        color: 'dodgerblue',
      },
      android: {
        color: 'black',
      },
    }),
  },
});

export const myProfile = StyleSheet.create({
  logoutButton: {
    top: 100,
    borderColor: mainColor,
    backgroundColor: mainColor,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 3,
    marginLeft: 3,
    ...Platform.select({
      ios: {
        borderRadius: 50,
      },
      android: {
        borderRadius: 0,
      },
    }),
  },
});
