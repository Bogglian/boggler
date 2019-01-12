# 🎙 Boggler

[The 6th D2 CAMPUS FEST Final Entry Project](https://github.com/D2CampusFest/6th) - in Naver D2

### ❓ What is Boggler

Boggler is Non-platform application use Speech API(Mozila Deep Speech).

보글러의 가장 큰 핵심은 스트리밍 혹은 파일로 입력받은 음성 정보를 분석해 이를 텍스트로 변환시킨다는 점입니다. 가령 미팅에서의 가벼운 대화 혹은 강연자의 음성을 텍스트로 변환해 보다 나은

### 💡 Motivation

때때로 우리는 강의를 듣거나 중요한 일을 녹음합니다. 하지만, 이렇게 녹음된 자료는 텍스트로 옮겨 적어야 하는 불편함이 있죠. 더불어 이런 작업은 꼭 필요한 일이 아니라면 쉽게 잊혀지곤 합니다.

보글러는 이런 음성을 텍스트로 변환하기 위한 작업의 피로를 줄이기 위해 만들어졌습니다.

### 💅 Style Demo

CodeSandbox에서 핵심 API인 deepSpeech와 waveform 패키지를 미지원해 스타일 데모만 확인하실 수 있습니다.

[![Edit Boggler](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6n2orxr5yz)

### Quickstart

### 🔧 Used Open Tools

보글러는 기본적으로 [create-react-app](https://github.com/facebook/create-react-app)라는 리액트 보일러플레이트를 사용해 프로젝트의 뼈대를 이루고 다음과 같은 다양한 도구를 사용했습니다.

#### OpenSources

- [mozila deepspeech](https://github.com/mozilla/DeepSpeech) - MPL 2.0
- [react](https://github.com/facebook/react) - MIT
- [node](https://github.com/nodejs/node) - MIT

#### Etc.

**Front-end**

- [react-router](https://github.com/ReactTraining/react-router) - MIT
- [redux](https://github.com/reduxjs/redux) - MIT
- [immer](https://github.com/mweststrate/immer) - MIT
- [styled-components](https://github.com/styled-components/styled-components) - MIT
- [waveform-react](https://github.com/ruebel/waveform-react) - MIT
- [open-color](https://github.com/yeun/open-color) - MIT

**Back-end**

- [nodemon](https://github.com/remy/nodemon) - MIT
- [concurrently](https://github.com/kimmobrunfeldt/concurrently) - MIT
- [express](https://github.com/expressjs/express) - MIT
- [axios](https://github.com/axios/axios) - MIT
- [mysql](https://github.com/mysqljs/mysql) - MIT
- [sox](http://sox.sourceforge.net/) - MIT

### How can I contribute to this project?

First, read the [our contribution guideline](/CONTRIBUTING.md).

### License

[MIT Lisence](/LICENSE)
