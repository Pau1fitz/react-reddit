
const initialState = {};
interface Action {
  type: string;
  user: string
}

export const userReducer = (state = initialState, action: Action) => {

  switch (action.type) {

  case "FETCH_USER_SUCCESS":
    return {
      ...state,
      user: action.user,
      fetchUserError: false
    };

  case "FETCH_USER_ERROR":
    return {
      ...state,
      fetchUserError: true
    };

  default:
    return state;
  }
  
};