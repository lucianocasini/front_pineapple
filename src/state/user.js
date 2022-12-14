import { createAction, createReducer } from "@reduxjs/toolkit";
export const setUser = createAction("SET_USER");
export const logOut = createAction("LOG_OUT");

const initialState = {
  id: null,
  name: null,
  email: null,
  address: null,
  SuperAdmin: false,
  isAdmin: false,
  loggedIn: false,
};

export default createReducer(initialState, {
  [setUser]: (state, action) => {
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      address: action.payload.address,
      id: action.payload.id,
      SuperAdmin: action.payload.SuperAdmin,
      isAdmin: action.payload.isAdmin,
      loggedIn: true,
    };
  },
  [logOut]: (state, action) => {
    return {
      ...state,
      name: null,
      email: null,
      id: null,
      isAdmin: null,
      SuperAdmin: null,
      loggedIn: false,
    };
  },
});
