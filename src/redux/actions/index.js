export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const LOGIN_USER = "LOGIN_USER";
export const GET_BOOKS = "GET_BOOKS";
export const TOGGLE_SPINNER = "TOGGLE_SPINNER";
export const TOGGLE_ERROR = "TOGGLE_ERROR";

// export const addToCartAction = (newBook) => ({
//   type: ADD_TO_CART,
//   payload: newBook
// });

export const removeFromCartAction = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index
});

export const loginUserAction = (name) => ({
  type: LOGIN_USER,
  payload: name
});

// Restrict the number of books in the cart to 5.

export const addToCartActionWithThunk = (newBook) => {
  return (dispatch, getState) => {
    console.log(getState());
    if (getState().cart.content.length < 5) {
      dispatch({
        type: ADD_TO_CART,
        payload: newBook
      });
    } else {
      alert("You can't add more than 5 books to cart");
    }
  };
};

export const getBooksAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/food-books"
      );
      if (resp.ok) {
        let books = await resp.json();
        dispatch({
          type: GET_BOOKS,
          payload: books
        });
        dispatch({
          type: TOGGLE_SPINNER
        });
      } else {
        dispatch({
          type: TOGGLE_SPINNER
        });
        dispatch({
          type: TOGGLE_ERROR
        });
      }
    } catch (error) {
      dispatch({
        type: TOGGLE_SPINNER
      });
      dispatch({
        type: TOGGLE_ERROR
      });
    }
  };
};
