import { createActions, handleActions } from 'redux-actions';

const initialState = {
  language: 'en',
};

const USER_UPDATE = 'USER_UPDATE';

export const { userUpdate } = createActions(USER_UPDATE);

export default handleActions(
  {
    [USER_UPDATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);
