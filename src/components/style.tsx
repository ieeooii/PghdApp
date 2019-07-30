import { Platform, StyleSheet } from 'react-native';


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
