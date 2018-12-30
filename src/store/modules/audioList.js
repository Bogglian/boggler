import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const GET_AUDIOLIST = "audioList/GET";

export const getAudioList = createAction(GET_AUDIOLIST);

const initialState = {
  audioList: []
};

export default handleActions(
  {
    [GET_AUDIOLIST]: (state, action) => {
      produce(state, draft => {});
    }
  },
  initialState
);
