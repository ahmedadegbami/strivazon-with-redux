export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const LOGIN_USER = "LOGIN_USER";

export const addToCartAction = (newBook) => ({
  type: ADD_TO_CART,
  payload: newBook
});

export const removeFromCartAction = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index
});

export const loginUserAction = (name) => ({
  type: LOGIN_USER,
  payload: name
});
