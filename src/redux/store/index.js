import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart";
import userReducer from "../reducers/user";
import bookReducer from "../reducers/book";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
