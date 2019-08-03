# react-native ios, android설정

`Creating a new application 과정은 제외` [https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment] 해당 url의 ios, android 설정 필요.
if `adb error`: `brew cask install android-platform-tools`

# project clone후

1. npm install
2. ios 시뮬레이터 실행:
   2-2 `npm run ios` or `react-native run-ios`
   2-1 `error 65`: [search keyword - xcode error code 65. facebook forum] => [https://github.com/facebook/react-native/issues/25500] `cd hopeQeury-client` -> `sudo gem install cocoapods` -> `cd ios` -> `pod install` -> ICON 로드 에러 발생시 `react-native link`
   2-2 build는 됐는데 아직도 error 가 있다면: `killall node`
3. android 시뮬레이터 실행:
   3-1 configure => AVD Manger => device click
   3-2 `npm start` => `npm run android` or `react-native run-android`
   3-2 `error - Execution failed for task ':app:validateSigningDebug'.`: [https://github.com/facebook/react-native/issues/25629] => @bondehagen url click => debug.keystore file move in android/app
4. `npm run tsc`: typescript compile 확인.(type error 확인 가능)
5. 처음 pull 또는 clone 받았을때 실행 순서 \* => `react-native link` => `cd ios` => `pod install`=>    `cd ..` => `react-native run-ios`
   (이 순서대로 안하고 react-native run-ios를 가장 먼저 실행하고 에러가 나면, ios/build 폴더 삭제하고 다시실행하기)
