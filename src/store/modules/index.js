import { combineReducers } from "redux";
import posting from "./posting";
import playback from "./playback";
import audio from "./audio";
import audioList from "./audioList";
// 임포트 리듀서

export default combineReducers({
  audio,
  audioList,
  posting,
  playback
  // 추가된 리듀서
});
