# React Native Apple Healthkit

A React Native bridge module for interacting with Apple Healthkit data.
Checkout the [full documentation](https://github.com/terrillo/rn-apple-healthkit/tree/master/docs)
Build fails on 'React/RCTBridgeModule.h' file not found [issue](https://github.com/terrillo/rn-apple-healthkit/issues/17)

## Installation

만약 `ios/{ProjectName}/info.plist`에 아래의 코드가 없다면 추가해야합니다.

```
<key>NSHealthShareUsageDescription</key>
<string>Read and understand health data.</string>
<key>NSHealthUpdateUsageDescription</key>
<string>Share workout data with other apps.</string>
```

## Manual Installation

1. Xcode에서 해당 폴더의 `ios/{ProjectName}.xcworkspace`를 열어줍니다.
2. XCode에 죄측에 있는 폴더들 중 `Libraries` 폴더를 클릭 ➜ `RCTAppleHealthkit.xcodeproj`가 있는지 확인합니다.
3. 만약 없다면 [https://github.com/terrillo/rn-apple-healthkit/tree/master/docs]에서 수동으로 설치하는 방법을 참고해주세요.
4. XCode에서 가장 상위 root 폴더를 클릭 ➜ Targets에 `{ProbjectName}` 클릭 ➜ `Build Phases` 클릭 ➜ 카테고리중 `Link Binary With Libraries` 클릭 ➜ `libRCTAppleHealthkit.a`가 있는지 확인 후 없다면 `+`을 클릭하여 추가해야합니다.
5. `Libraries` 폴더를 클릭 ➜ `RCTAppleHealthkit.xcodeproj` ➜`Build Settings` 클릭 ➜ 'Basic' tab이라면 'All'을 클릭 ➜ `Search Paths` 카테고리 안에 `Header Search Paths` 더블 클릭 ➜ `$(SRCROOT)/../../react-native/React` and `$(SRCROOT)/../../../React` and `${SRCROOT}/../../ios/Pods/Headers/Public` 추가 ➜ 반드시 세개다 `recursive`로 적용해야 합니다.
   **주의!!반드시"PROJECT"와"TARGETS"둘다적용해주어야합니다.**
6. XCode에서 가장 상위 root 폴더를 클릭 ➜ Targets에 `{ProbjectName}` 클릭 ➜ `Capabilities` 클릭 후 아래의 이미지 처럼 적용. 만약 apple 계정이 없다면 등록이 필요 합니다.
   ![](https://i.imgur.com/eOCCCyv.png "Xcode Capabilities Section")
7. Compile and run

## Get Started

`src/components/healthKit.js` 파일 내에 healthKit 코드가 적혀 있습니다.
해당 내용은 `src/components/my_page/mypage-root.ios.tsx`에서 불러옵니다.
만약 추가하고 싶은 healthKit data가 있다면 health어플에서 허용 ➜ `src/components/healthKit.js`에서 해당 데이터에 관한 로직을 작성 후 `src/components/my_page/mypage-root.ios.tsx`를 수정해야합니다.

### 주의!

1. healthKit은 android와 TypeScript를 지원하지 않습니다. .tsx 형식으로 변환하기 위해서는 [d.ts](https://www.slideshare.net/gloridea/dts-74589285)를 참고하여 `d.ts` file을 만들어야합니다.
2. `src/components/my_page/mypage-root.ios.tsx`에서 속성 오류(ts-error)가 나지만 제대로 정보를 불러옵니다.
3. healthKit에서 허용하지 않거나 내용이 없는경우 로직에서 에러가 날 수 있습니다. 현재 일부만 가져온 상태로 경우의 수를 고려해 로직을 짜야할 것 같습니다.
