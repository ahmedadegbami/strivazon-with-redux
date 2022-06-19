import { ADD_TO_CART, REMOVE_FROM_CART, LOGIN_USER } from "../actions";

const initialState = {
  cart: {
    content: [],
    error: false
  },
  user: {
    name: ""
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload]
        }
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [
            ...state.cart.content.slice(0, action.payload),
            ...state.cart.content.slice(action.payload + 1)
          ]
        }
      };
    case LOGIN_USER:
      return {
        ...state,
        user: {
          ...state.cart,
          name: action.payload
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
