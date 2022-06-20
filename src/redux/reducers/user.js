import { LOGIN_USER } from "../actions";

const initialState = {
  name: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
