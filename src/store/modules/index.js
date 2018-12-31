import { combineReducers } from "redux";
import posting from "./posting";
import audio from "./audio";
import audioList from "./audioList";

export default combineReducers({
  audio,
  audioList,
  posting
});
