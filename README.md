# 🎙 보글러 / Boggler

It started in Dec 26, 2018

[The 6th D2 CAMPUS FEST Final Entry Project](https://github.com/D2CampusFest/6th) - in Naver D2

## :sweat: Sorry for users

>  this is not yet built the publish version.

## ❓ 보글러란? / What is Boggler?

보글러의 가장 큰 핵심은 스트리밍 혹은 파일로 입력받은 음성 정보를 분석해 이를 텍스트로 변환시킨다는 점입니다. 가령 미팅에서의 가벼운 대화 혹은 강연자의 음성을 텍스트로 변환해 보다 나은 필사 환경을 제공합니다.

Boggler's main point is that it analyzes the audio information that is streamed or entered into a file and converts it into text. For example, a conversation in a meeting or a speaker's voice is converted into text to provide a better typing environment.

## 💡 동기 / Motivation

때때로 우리는 강의를 듣거나 중요한 일을 녹음합니다. 하지만, 이렇게 녹음된 자료는 텍스트로 옮겨 적어야 하는 불편함이 있죠. 더불어 이런 작업은 꼭 필요한 일이 아니라면 쉽게 잊혀지곤 합니다.

이처럼 보글러는 음성을 텍스트로 변환하기 위한 작업의 피로를 줄이기 위한 도구로 만들어지고 있습니다.

Sometimes we listen to lectures or record important things. However, there is the inconvenience that such recorded material should be written in text. In addition, this task is easily forgotten unless it is absolutely necessary.

Boggler is being created as a tool to reduce the fatigue of work to convert speech to text.

## 💅 스타일 데모 / Style Demo

CodeSandbox에서 핵심 도구인 deepSpeech와 waveform 패키지를 미지원해 스타일 데모만 확인하실 수 있습니다.

CodeSandbox does not support the core tools the deepSpeech and the waveform package, so you can only see style demos.

[![Edit Boggler](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6n2orxr5yz)

## 🏃‍♂️🏃‍♀️ 손쉬운 시작 / Quickstart

## 🔧 사용된 공개 도구 / Used Open Tools

보글러는 기본적으로 [create-react-app](https://github.com/facebook/create-react-app)라는 리액트 보일러플레이트를 사용해 프로젝트의 뼈대를 이루고 다음과 같은 다양한 도구를 사용했습니다.

Boggler basically used the React boilerplate [create-react-app] to organize the project's framework and used a variety of tools, including:

### OpenSources

- [react-DeepSpeech](https://github.com/Bogglian/react-DeepSpeech) - MPL 2.0
- [react](https://github.com/facebook/react) - MIT
- [node](https://github.com/nodejs/node) - MIT

### Etc. - MIT

**Environment**

- [vscode](https://github.com/Microsoft/vscode)
- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)

**Front-end**

- [react-router](https://github.com/ReactTraining/react-router)
- [redux](https://github.com/reduxjs/redux)
- [immer](https://github.com/mweststrate/immer)
- [styled-components](https://github.com/styled-components/styled-components)
- [waveform-react](https://github.com/ruebel/waveform-react)
- [open-color](https://github.com/yeun/open-color)

**Back-end**

- [nodemon](https://github.com/remy/nodemon)
- [concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [express](https://github.com/expressjs/express)
- [axios](https://github.com/axios/axios)
- [mysql](https://github.com/mysqljs/mysql)
- [sox](http://sox.sourceforge.net/)

## How can I contribute to this project?

먼저, [우리의 컨트리뷰션 가이드라인](CONTRIBUTING.md)을 읽어주세요. 만약 이것을 읽었다면, 이제부터 우리의 프로젝트에 [이슈](https://github.com/rayleighChild/boggler/issues)를 작성하거나 [풀리퀘스트](https://github.com/rayleighChild/boggler/pulls)를 통해 기여하실 수 있습니다.

First, read the [our contribution guideline](CONTRIBUTING.md). if you have read it, you can contribute to our project by creating [issues](https://github.com/rayleighChild/boggler/issues) or contribute to it in [pull requests](https://github.com/rayleighChild/boggler/pulls).

## License

we follow MIT and (Some of)MPL 2.0 [License](LICENSE).

우리는 MIT와 (일부)MPL 2.0 [라이선스](LICENSE)를 준수합니다.
