import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const BUFFER_DONE = "posting/BUFFER_DONE";
const BUFFER_MEDIA = "posting/BUFFER_MEDIA";
const CHANGE_INPUT = "posting/CHANGE_INPUT";
const EDITOR_TOGGLE = "posting/EDITOR_TOGGLE";

export const editorOn = createAction(EDITOR_TOGGLE);
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
    [EDITOR_TOGGLE]: (state, action) =>
      produce(state, draft => {
        draft.editorMode = !state.editorMode;
      })
  },
  initialState
);
