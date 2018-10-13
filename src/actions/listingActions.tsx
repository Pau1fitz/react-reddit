export const getBestSuccess = (bestResults: []) => {
  return {
    type: 'GET_BEST_SUCCESS',
    bestResults
  };
};
  
export const searchError = (err: any) => {
  return {
    type: 'GET_BEST_ERROR',
    err
  };
};

export const getBestRequest = (accessToken: any) => {
  return dispatch => {
  
    const request = new Request('https://oauth.reddit.com/best', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });
    fetch(request).then(res => {
      return res.json();
    }).then(res => {
      console.log(res)
      dispatch(getBestSuccess(res.data.children));
    }).catch(err => {
      dispatch(searchError(err));
    });
  };
};