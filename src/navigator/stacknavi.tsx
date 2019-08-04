import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Main } from '../components/main';
import { MypageRoot } from '../components/mypage/mypage-root';
import { MyProfile } from '../components/myprofile/myprofile-root';
import { SignIn } from '../components/signin/signin-root';
import { ProfileRoot } from '../components/signup/profile-root';
import { Signup } from '../components/signup/signup';

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
      header: null,
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
});

export default createAppContainer(appNavigator);
