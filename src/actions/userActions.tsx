const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  };
};
    
const fetchUserError = (err) => {
  return {
    type: 'FETCH_USER_ERROR',
    err
  };
};
    
export const fetchUser = (accessToken) => {
  return dispatch => {
    const request = new Request('https://oauth.reddit.com/api/v1/me', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    fetch(request).then(res => {
      // send user back to homepage if no token
      if(res.status === 401) {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      dispatch(fetchUserSuccess(res));
    }).catch(err => {
      dispatch(fetchUserError(err));
    });
  };
};
  