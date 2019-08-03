import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Main } from '../components/main';
import { MypageRoot } from '../components/my_page/mypage-root';
import { TodayPghd } from '../components/my_page/today-pghd';
import { MyProfile } from '../components/my_profile/myprofile-root';
import { SignIn } from '../components/sign_in/sign-in-root';
import { ProfileRoot } from '../components/sign_up/profile-root';
import { Signup } from '../components/sign_up/sign-up';

const appNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ProfileRoot: {
    screen: ProfileRoot,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
  Signup: {
    screen: Signup,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
  MypageRoot: {
    screen: MypageRoot,
    navigationOptions: () => ({
      header: null,
    }),
  },
  MyProfile: {
    screen: MyProfile,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
  TodayPghd: {
    screen: TodayPghd,
    navigationOptions: () => ({
      // header: null ( 헤더가 없어야 하는 페이지는 활성화 시키기 )
    }),
  },
});

export default createAppContainer(appNavigator);
