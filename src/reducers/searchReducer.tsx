
const initialState = {};
interface Action {
  type: string;
  searchResults: [];
}

export const searchReducer = (state = initialState, action: Action) => {

  switch (action.type) {

  case "SEARCH_SUCCESS":
    return {
      ...state,
      searchResults: action.searchResults,
      searchError: false
    };

  case "SEARCH_ERROR":
    return {
      ...state,
      searchError: true
    };

  default:
    return state;
  }  
};
  
export default searchReducer;