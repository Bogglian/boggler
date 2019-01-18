import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const GET_AUDIOLIST = 'audioList/GET';
const DELETE_POSTS = 'audioList/DELETE';

export const getAudioList = createAction(GET_AUDIOLIST);
export const deletePosts = createAction(DELETE_POSTS);

const initialState = {
  audios: [],
};

export default handleActions(
  {
    [GET_AUDIOLIST]: (state, action) =>
      produce(state, draft => {
        console.log(`producer-getPostList : ${JSON.stringify(action.payload)}`);
        draft.audios = action.payload;
      }),
    [DELETE_POSTS]: (state, action) =>
      produce(state, draft => {
        draft.audios = action.payload;
      }),
  },
  initialState,
);
