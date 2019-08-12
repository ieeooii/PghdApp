import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Main } from '../components/main';
import { TodayPghd } from '../components/my_page/today-pghd';
import { TermsText } from '../components/sign_up/terms-text';
import { reduxSignin } from '../redux/redux-work.js';
import { reduxMyProfile } from '../redux/redux-work.js';
import { reduxMypageRoot } from '../redux/redux-work.js';
import { reduxProfileRoot } from '../redux/redux-work.js';
import { reduxSignup } from '../redux/redux-work.js';

const appNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Signup: {
    screen: reduxSignup,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
  ProfileRoot: {
    screen: reduxProfileRoot,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SignIn: {
    screen: reduxSignin,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
  MypageRoot: {
    screen: reduxMypageRoot,
    navigationOptions: () => ({
      header: null,
    }),
  },
  MyProfile: {
    screen: reduxMyProfile,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },

  TodayPghd: {
    screen: TodayPghd,
    navigationOptions: () => ({
      header: null,
    }),
  },
  TermsText: {
    screen: TermsText,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
});

export default createAppContainer(appNavigator);
