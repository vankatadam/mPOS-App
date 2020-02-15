import { LOGGED_USER } from "../actions/shops";

const initialState = {
  shops: ["Edeka", "Aldi_Sued", "Rewe"],
  selectedShop: "Edeka",
  loggedUser: "Michael Harr"
};

const shopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_USER:
      return { ...state, loggedUser: action.payload };
    default:
      return state;
  }
  return state;
};

export default shopsReducer;
