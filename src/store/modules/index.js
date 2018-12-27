import { combineReducers } from "redux";
import edit from "./edit";
import playback from "./playback";
// 임포트 리듀서

export default combineReducers({
  edit,
  playback
  // 추가된 리듀서
});
