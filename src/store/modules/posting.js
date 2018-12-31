import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "posting/CHANGE_INPUT";

export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
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
      })
  },
  initialState
);
