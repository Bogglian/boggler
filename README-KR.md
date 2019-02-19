# 🎙 보글러

![](https://travis-ci.org/teamthesol/boggler.svg?branch=master)

[English](README.md)

이것은 2018년 12월 26일부터 시작되었습니다.

[제 6회 D2 캠퍼스 Fest 결승 진출 프로젝트](https://github.com/D2CampusFest/6th) - in Naver D2

in [The Naver D2 fest finalist progress board](https://d2campusfest6th-2019.herokuapp.com/)

## ❓ 보글러란?

보글러의 가장 큰 핵심은 스트리밍 혹은 파일로 입력받은 음성 정보를 분석해 이를 텍스트로 변환시킨다는 점입니다. 가령 미팅에서의 가벼운 대화 혹은 강연자의 음성을 텍스트로 변환해 보다 나은 필사 환경을 제공합니다.

## 💡 동기

때때로 우리는 강의를 듣거나 중요한 일을 녹음합니다. 하지만, 이렇게 녹음된 자료는 텍스트로 옮겨 적어야 하는 불편함이 있죠. 더불어 이런 작업은 꼭 필요한 일이 아니라면 쉽게 잊혀지곤 합니다.

이처럼 보글러는 음성을 텍스트로 변환하기 위한 작업의 피로를 줄이기 위한 도구로 만들어지고 있습니다.

## 2019년 2월 19일까지의 역사([Boggler](https://github.com/teamthesol/boggler), [Node-DeepSpeech](https://github.com/teamthesol/node-DeepSpeech))

[![Git history by Feb 19, 2019](https://img.youtube.com/vi/dg_y28mKTMU/0.jpg)](https://www.youtube.com/watch?v=dg_y28mKTMU&feature=youtu.be)

## 💅 스타일 데모

CodeSandbox에서 본 프로젝트의 핵심 도구인 deepSpeech와 waveform 패키지를 미지원해 스타일 데모만 확인하실 수 있습니다.

[![Edit Boggler](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6n2orxr5yz)

## 🏃‍♂️🏃‍♀️ 손쉬운 시작

> \$ yarn // or npm install
>
> // 노드 모듈 설치
>
> \$ yarn pre // or npm run pre
>
> // 사전에 필요한 파일(models, audio samples) 설치와 tar.gz 형식 해제(unzip)
>
> \$ yarn start // or npm run start
>
> // 프론트 엔드 서버와 백 엔드 서버 실행

## 🚀 사용 사례

[![Boggler v1.0.0 Demo](https://img.youtube.com/vi/Hin_oocK4Kc/0.jpg)](https://www.youtube.com/watch?v=Hin_oocK4Kc&feature=youtu.be)

## 🔧 사용된 오픈소스 도구

보글러는 기본적으로 [create-react-app](https://github.com/facebook/create-react-app)라는 리액트 보일러플레이트를 사용해 프로젝트의 뼈대를 이루고 다음과 같은 다양한 도구를 사용했습니다.

### 주(主) 도구

- [Node-DeepSpeech](https://github.com/teamthesol/ndoe-DeepSpeech) - MPL 2.0
- [React](https://github.com/facebook/react) - MIT
- [Node](https://github.com/nodejs/node) - MIT

### 기타 - MIT

#### 개발자 환경 도구

- [Vscode](https://github.com/Microsoft/vscode)
- [Eslint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

#### 프론트 엔드 도구

- [Styled-components](https://github.com/styled-components/styled-components)
- [Open-color](https://github.com/yeun/open-color)
- [Prop-types](https://github.com/facebook/prop-types)
- [Enzyme](https://airbnb.io/enzyme/)
- [Jest](https://jest-bot.github.io/jest/)

#### 백 엔드 도구

- [Nodemon](https://github.com/remy/nodemon)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [Express](https://github.com/expressjs/express)
- [Axios](https://github.com/axios/axios)
- [Body-parser](https://github.com/expressjs/body-parser)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently#readme)
- [Codemirror](https://codemirror.net/)
- [Markdown-pdf](https://github.com/alanshaw/markdown-pdf)

#### 영상 제공(Git 기록)

- [Gource](https://gource.io/)

## 어떻게 하면 이 프로젝트에 기여할 수 있나요?

먼저, [우리의 컨트리뷰션 가이드라인](CONTRIBUTING.md)을 읽어주세요. 만약 이것을 읽었다면, 이제부터 우리의 프로젝트에 [이슈](https://github.com/teamthesol/boggler/issues)를 작성하거나 [풀리퀘스트](https://github.com/teamthesol/boggler/pulls)를 통해 기여하실 수 있습니다.

## 라이선스

우리는 MIT와 (일부)MPL 2.0 [라이선스](LICENSE)를 준수합니다.
