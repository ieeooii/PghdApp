# PghdApp

PGHD 데이터를 업로드하고, 수정, 삭제 기능이 있는 애플리케이션 입니다.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

**react-native ios, android설정**
`Creating a new application 과정은 제외` [https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment] 해당 url의 ios, android 설정 필요.
만약 `adb error`가 있다면 `brew cask install android-platform-tools` 실행.

```
npm install
react-native link
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

**ios**

```
sudo gem install cocoapods
"cd ios" pod install

```

**rn-apple-healthkit**
꼭 반드시 ios 폴더에서 pod install을 한 후 cd .. 후 link 해주세요.
자세한 내용은 HEALTHKIT.md에 있습니다.

```
react-native link rn-apple-healthkit

```

**android**
만약 android/app에 debug.kestore file이 없다면 [https://github.com/facebook/react-native/issues/25629] 이 링크로 들어간 후 "@bondehagen"이 올린 url click 후 다운로드 합니다. 다운로드가 완료 됐다면 debug.keystore file을 android/app로 옮겨야합니다.

And repeat

**file build**
index.js는 TypeScript를 compile한 build file을 가르키고 있습니다.
만약 build file이 없거나 수정하였다면 해당 cli를 실행시킨 후 simulator를 build하세요.

```
npm run tsc
```

**IOS Simulator**

```
react-native run-ios
```

**Android Emulator**

```
npm start
react-native run-android
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [React Native](https://facebook.github.io/react-native/) - 기본 프레임워크

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
