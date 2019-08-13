// Import
import { CLIENT_ID, CLIENT_SECRET } from '../../config/client.tsx';

// Actions
const CHANGE_SIGN_UP_STATE = 'CHANGE_SIGN_UP_STATE';
const INPUT_CHECK = 'INPUT_CHECK';
const CHANGE_FOCUS = 'CHANGE_FOCUS';
const TERMS_CHECK = 'TERMS_CHECK';
const PERMIT = 'PERMIT';
const BTN_CHECK = 'BTN_CHECK';
const CHANGE_PROFILE_ROOT_STATE = 'CHANGE_PROFILE_ROOT_STATE';
const CHANGE_SIGN_IN_STATE = 'CHANGE_SIGN_IN_STATE';

// Action-Creators
function changeSignupStateAction(key, value) {
  return {
    type: CHANGE_SIGN_UP_STATE,
    key,
    value
  };
}
function inputCheckAction(checkKey, boolean) {
  return {
    type: INPUT_CHECK,
    checkKey,
    boolean
  };
}
function changeFocusAction(inputKey, boolean) {
  return {
    type: CHANGE_FOCUS,
    inputKey,
    boolean
  };
}

function termsCheckAction(termsKey, boolean) {
  return {
    type: TERMS_CHECK,
    termsKey,
    boolean
  };
}

function btnCheckAction() {
  return {
    type: BTN_CHECK
  };
}

function permitAction(permited, boolean) {
  return {
    type: PERMIT,
    permited,
    boolean
  };
}

function changeProfileStateAction(key, value) {
  return {
    type: CHANGE_PROFILE_ROOT_STATE,
    key,
    value
  };
}

function changeSignInStateAction(key, value) {
  return {
    type: CHANGE_SIGN_IN_STATE,
    key,
    value
  };
}

// Reducer Functions
function changeSignupState(state, key, value) {
  const obj = { ...state };
  obj[key] = value;
  return obj;
}

function inputCheck(state, key, boolean) {
  const obj = { ...state };
  obj[key] = boolean;
  return obj;
}

function changeFocus(state, key, boolean) {
  const obj = { ...state };
  obj[key] = boolean;
  return obj;
}

function termsCheck(state, termsKey, boolean) {
  const obj = { ...state };
  if (termsKey === 'all') {
    obj.agreementService = boolean;
    obj.agreementPrivate = boolean;
    obj.agreementMarketing = boolean;
  } else {
    obj[termsKey] = boolean;
  }
  return obj;
}

function btnCheck(state) {
  const obj = { ...state };
  if (
    obj.emailCheck
    && obj.passwordCheck
    && obj.nicknameCheck
    && obj.agreementService
    && obj.agreementPrivate
  ) {
    obj.btnDisabled = false;
    obj.btnColor = 'white';
  } else {
    obj.btnDisabled = true;
    obj.btnColor = 'grey';
  }
  return obj;
}

function permit(state, permited, boolean) {
  const obj = { ...state };
  obj[permited] = boolean;
  return obj;
}

function changeProfileState(state, key, value) {
  const obj = { ...state };
  obj[key] = value;
  return obj;
}

function changeSignInState(state, key, value) {
  const obj = { ...state };
  obj[key] = value;
  return obj;
}

// Reducer
const initialState = {
  email: '',
  emailCheck: false,
  password: '',
  passwordCheck: false,
  nickname: '',
  nicknameCheck: false,
  agreementService: false,
  agreementServiceAt: 'Unknown Type: date',
  agreementPrivate: false,
  agreementPrivateAt: 'Unknown Type: date',
  agreementMarketing: false,
  agreementMarketingAt: 'Unknown Type: date',
  btnDisabled: true,
  btnColor: 'grey',
  emailFocus: false,
  passwordFocus: false,
  nicknameFocus: false,
  permitEmail: true,
  permitNickname: true,
  id: '',
  userWallet: '',
  gender: '',
  birthDate: '',
  relationship: '환자',
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  failMessageEmailCheck: true,
  failMessagePasswordCheck: true
};

// 액션을 보낼때마다 Redux는 자동으로 Reducer를 실행한다
// 즉. 리덕스는 자동으로 액션을 리듀서로 보낸다(reducer함수의 두번째 인자로..)
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGN_UP_STATE: {
      const { key } = action;
      const { value } = action;
      return changeSignupState(state, key, value);
    }
    case INPUT_CHECK: {
      const { checkKey } = action;
      const { boolean } = action;
      return inputCheck(state, checkKey, boolean);
    }
    case CHANGE_FOCUS: {
      const { inputKey } = action;
      const { boolean } = action;
      return changeFocus(state, inputKey, boolean);
    }
    case TERMS_CHECK: {
      const { termsKey } = action;
      const { boolean } = action;
      return termsCheck(state, termsKey, boolean);
    }
    case BTN_CHECK: {
      return btnCheck(state);
    }
    case PERMIT: {
      const { permited } = action;
      const { boolean } = action;
      return permit(state, permited, boolean);
    }
    case CHANGE_PROFILE_ROOT_STATE: {
      const { key } = action;
      const { value } = action;
      return changeProfileState(state, key, value);
    }
    case CHANGE_SIGN_IN_STATE: {
      const { key } = action;
      const { value } = action;
      return changeSignInState(state, key, value);
    }
    default:
      return state;
  }
}

// Export Action Creators
export const actionCreators = {
  changeSignupStateAction,
  inputCheckAction,
  changeFocusAction,
  termsCheckAction,
  btnCheckAction,
  permitAction,
  changeProfileStateAction,
  changeSignInStateAction
};

// Export Reducer

export default reducer;
