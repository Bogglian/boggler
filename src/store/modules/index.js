import { combineReducers } from "redux";
import audio from "./audio";
import audioList from "./audioList";

export default combineReducers({
  audio,
  audioList
});
