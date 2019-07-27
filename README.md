# PghdApp

PGHD 데이터를 업로드하고, 수정, 삭제 기능이 있는 애플리케이션 입니다.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
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

# react-native ios, android설정

`Creating a new application 과정은 제외` [https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment] 해당 url의 ios, android 설정 필요.
if `adb error`: `brew cask install android-platform-tools`

# project clone후

1. npm install
2. ios 시뮬레이터 실행:
   2-2 `npm run ios` or `react-native run-ios`
   2-1 `error 65`: [search keyword - xcode error code 65. facebook forum] => [https://github.com/facebook/react-native/issues/25500] `cd hopeQeury-client` -> `sudo gem install cocoapods` -> `cd ios` -> `pod install`
   2-2 build는 됐는데 아직도 error 가 있다면: `killall node`
3. android 시뮬레이터 실행:
   3-1 configure => AVD Manger => device click
   3-2 `npm start` => `npm run android` or `react-native run-android`
   3-2 `error - Execution failed for task ':app:validateSigningDebug'.`: [https://github.com/facebook/react-native/issues/25629] => @bondehagen url click => debug.keystore file move in android/app
4. `npm run tsc`: typescript compile 확인.(type error 확인 가능)
