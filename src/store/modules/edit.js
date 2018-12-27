import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "auth/CHANGE_INPUT";

export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
  register: {
    email: "",
    username: "",
    password: "",
    passwordConfirm: ""
  },
  login: {
    email: "",
    password: ""
  }
};

export default handleActions(
  {
    // 인풋 변경 리듀서
    [CHANGE_INPUT]: (state, action) => {
      produce(state, draft => {});
    }
  },
  initialState
);
