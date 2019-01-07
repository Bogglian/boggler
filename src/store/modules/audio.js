import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const UPLOAD_FILE = "audio/UPLOAD_FILE";
const GET_AUDIO = "audio/GET";
const CHANGE_INPUT = "audio/CHANGE_INPUT";
const SET_CONTEXT = "audio/SET_CONTEXT";
const UPLOAD_BUFFER = "audio/UPLOAD_BUFFER";
const SET_POSITION = "audio/SET_POSITION";

export const setPosition = createAction(SET_POSITION);
export const uploadBuffer = createAction(UPLOAD_BUFFER);
export const setContext = createAction(SET_CONTEXT);
export const changeInput = createAction(CHANGE_INPUT);
export const uploadFile = createAction(UPLOAD_FILE);
export const getAudio = createAction(GET_AUDIO);

const initialState = {
  id: 0,
  title: "",
  file: null,
  content: "", //문장 단위 index와 시간, 내용 등
  url: "",
  context: null,
  buffer: null,
  position: 0
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { name, value } = action.payload;
        draft[name] = value;
      }),
    [UPLOAD_FILE]: (state, action) =>
      produce(state, draft => {
        const { file, url } = action.payload;
        draft.url = url;
        draft.file = file;
      }),
    [GET_AUDIO]: (state, action) =>
      produce(state, draft => {
        const { id, title, content } = action.payload;
        draft.id = id;
        draft.title = title;
        draft.content = content;
        console.log("asdasf" + action.payload);
      }),
    [SET_POSITION]: (state, action) =>
      produce(state, draft => {
        const { position } = action.payload;

        draft.position = position;
      }),
    [SET_CONTEXT]: (state, action) =>
      produce(state, draft => {
        const { context } = action.payload;
        console.log("context: " + context);

        draft.context = context;
      }),
    [UPLOAD_BUFFER]: (state, action) =>
      produce(state, draft => {
        const { buffer } = action.payload;
        console.log("buffer: " + buffer);

        draft.buffer = buffer;
      })
  },
  initialState
);
