const initialState = {};
interface Action {
  type: string;
  bestResults: []
}

export const listingReducer = (state = initialState, action: Action) => {

  switch (action.type) {

  case "GET_BEST_SUCCESS":
    return {
      ...state,
      bestResults: action.bestResults,
      searchError: false
    };

  case "GET_BEST_ERROR":
    return {
      ...state,
      searchError: true
    };

  default:
    return state
  }
}
