const initialState = {};
interface Action {
  type: string;
  token: {
    refresh_token: string;
    access_token: string
  }
}

export const tokenReducer = (state = initialState, action: Action) => {
  switch (action.type) {

  case "FETCH_TOKEN_SUCCESS":
    return {
      ...state,
      access_token: action.token.access_token,
      refresh_token: action.token.refresh_token,
      fetchTokenError: false
    };

  case "FETCH_TOKEN_ERROR":
    return {
      ...state,
      fetchTokenError: true
    }

  default:
    return state
  }
  
}
