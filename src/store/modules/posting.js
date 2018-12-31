import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const BUFFER_DONE = "posting/BUFFER_DONE";
const BUFFER_MEDIA = "posting/BUFFER_MEDIA";
const CHANGE_INPUT = "posting/CHANGE_INPUT";
const EDITOR_ON = "posting/EDITOR_ON";
const EDITOR_OFF = "posting/EDITOR_OFF";

export const editorOn = createAction(EDITOR_ON);
export const editorOff = createAction(EDITOR_OFF);
export const bufferDone = createAction(BUFFER_DONE);
export const bufferMedia = createAction(BUFFER_MEDIA);
export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
  editorMode: false,
  buffering: false,
  content: "",
  file: "",
  title: ""
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { name, value } = action.payload;
        draft[name] = value;
      }),
    [BUFFER_DONE]: (state, action) =>
      produce(state, draft => {
        draft.buffering = false;
      }),
    [BUFFER_MEDIA]: (state, action) =>
      produce(state, draft => {
        draft.buffering = true;
      }),
    [EDITOR_ON]: (state, action) =>
      produce(state, draft => {
        draft.editorMode = true;
      }),
    [EDITOR_OFF]: (state, action) =>
      produce(state, draft => {
        draft.editorMode = false;
      })
  },
  initialState
);
