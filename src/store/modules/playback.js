import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const PLAY = "auth/PLAY";
const BACK = "auth/BACK";
const STOP = "auth/STOP";
const PAUSE = "auth/PAUSE";

export const changeInput = createAction(PLAY);
export const initializeForm = createAction(BACK);
export const logIn = createAction(STOP);
export const register = createAction(PAUSE);

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
    [PLAY]: (state, action) => {
      produce(state, draft => {
        // 재생
      });
    },
    [BACK]: (state, action) =>
      produce(state, draft => {
        // 되감기
      }),
    [STOP]: (state, action) =>
      produce(state, draft => {
        // 정지
      }),
    [PAUSE]: (state, action) => {
      produce(state, draft => {
        // 일시정지
      });
    }
  },
  initialState
);
