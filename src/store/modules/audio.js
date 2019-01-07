import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const UPLOAD_FILE = "audio/UPLOAD_FILE";
const GET_AUDIO = "audio/GET";
const CHANGE_INPUT = "audio/CHANGE_INPUT";
const SAVE_AUDIO = "audio/SAVE";

const BUFFER_DONE = "audio/BUFFER_DONE";
const BUFFER_MEDIA = "audio/BUFFER_MEDIA";
const EDITOR_ON = "audio/EDITOR_ON";
const EDITOR_OFF = "audio/EDITOR_OFF";

export const changeInput = createAction(CHANGE_INPUT);
export const uploadFile = createAction(UPLOAD_FILE);
export const getAudio = createAction(GET_AUDIO);
export const saveAudio = createAction(SAVE_AUDIO);

export const editorOn = createAction(EDITOR_ON);
export const editorOff = createAction(EDITOR_OFF);
export const bufferDone = createAction(BUFFER_DONE);
export const bufferMedia = createAction(BUFFER_MEDIA);

const initialState = {
  id: 0,
  title: "",
  file: null,
  content: "",
  editorMode: false,
  buffering: false //문장 단위 index와 시간, 내용 등
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => (
      produce(state, draft => {
        const { name, value } = action.payload;
        draft[name] = value;
      })
    ),
    [UPLOAD_FILE]: (state, action) => (
      produce(state, draft => {
        const { file } = action.payload;
        draft.file = file;
      })
    ),
    [GET_AUDIO]: (state, action) => (
      produce(state, draft => {
        const { id, title, content } = action.payload;
        draft.id = id;
        draft.title = title;
        draft.content = content;
      })
    ),
    [SAVE_AUDIO]: (state, action) => (
      produce(state, draft => {
        const { id, title, content } = action.payload;
        draft.id = id;
        draft.title = title;
        draft.content = content;
        draft.buffering = false;
        draft.editorMode = true;
      })
    ),
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
