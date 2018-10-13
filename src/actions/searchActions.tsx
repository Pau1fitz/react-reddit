export const searchSuccess = (searchResults) => {
  return {
    type: 'SEARCH_SUCCESS',
    searchResults
  };
};
  
export const searchError = (err) => {
  return {
    type: 'SEARCH_ERROR',
    err
  };
};

export const performSearch = search => {
  return dispatch => {
    const request = new Request(`https://www.reddit.com/subreddits/search.json?q=${search}&include_over_18=on&count=10`);
    fetch(request).then(res => {
      return res.json();
    }).then(res => {
      console.log(res);
      dispatch(searchSuccess(res.data.children));
    }).catch(err => {
      dispatch(searchError(err));
    });
  };
};
