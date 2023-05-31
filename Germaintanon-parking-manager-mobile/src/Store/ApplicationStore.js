import {createSlice, configureStore} from '@reduxjs/toolkit';
import {
  NAVIGATION_STATE_FIRST_LAUNCH,
  NAVIGATION_STATE_NOT_CONNECTED,
  NAVIGATION_STATE_CONNTECTED
} from '../Navigation';

const applicationStore = createSlice({
  name: 'ApplicationStore',
  initialState: {
    appScreenState: NAVIGATION_STATE_FIRST_LAUNCH,
    auth: undefined,
    user: undefined,
  },
  reducers: {
    introFinished(state) {
      state.appScreenState = NAVIGATION_STATE_NOT_CONNECTED;
    },
    setToken(state, {token}) {
      state.token = token;
    },
    connectUser(state, action) {
        const {user, token} = action.payload;
      state.user = user;
      state.token = token;
      state.appScreenState = NAVIGATION_STATE_CONNTECTED;
    },
    deconnectUser(state) {
      state.token = undefined;
      state.user = undefined;
      state.appScreenState = NAVIGATION_STATE_NOT_CONNECTED;

    },
  },
});

export const {setToken, connectUser, deconnectUser, introFinished} = applicationStore.actions;
export const ApplicationStore = applicationStore.reducer;
