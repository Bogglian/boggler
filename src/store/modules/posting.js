import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_CONTENT = "posting/CHANGE_CONTENT";
const WRITE_CONTENT = "posting/WRITE_CONTENT"

export const changeContent = createAction(CHANGE_CONTENT);
export const writeContent = createAction(WRITE_CONTENT);

const initialState = {
  edit: {
    text: ""
  },
  write: {
    content: "",
    file: "",
    title: ""
  }
};

export default handleActions(
  {
    [CHANGE_CONTENT]: (state, action) => {
      produce(state, draft => {});
    },
    [WRITE_CONTENT]: (state, action) => {
      produce(state, draft => {});
    }
  },
  initialState
);
