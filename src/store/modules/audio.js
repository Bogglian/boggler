import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SAVE_AUDIO = "audio/SAVE";
const GET_AUDIO = "audio/GET";
const CHANGE_INPUT = "audio/CHANGE_INPUT";

export const changeInput = createAction(CHANGE_INPUT);
export const saveAudio = createAction(SAVE_AUDIO);
export const getAudio = createAction(GET_AUDIO);

const initialState = {
  id: 0,
  title: "",
  filename: "",
  content: "" //문장 단위 index와 시간, 내용 등
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { name, value } = action.payload;
        draft[name] = value;
    }),
    [SAVE_AUDIO]: (state, action) => {
      produce(state, draft => {});
    },
    [GET_AUDIO]: (state, action) => (
      produce(state, draft => {
        const { id, title, content, filename } = action.payload;
        draft.id = id;
        draft.title = title;
        draft.filename = filename;
        draft.content = content;
        console.log(action.payload);
      })
    )
  },
  initialState
);
