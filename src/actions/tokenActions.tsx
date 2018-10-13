export const fetchTokenSuccess = (token) => {
  return {
    type: 'FETCH_TOKEN_SUCCESS',
    token
  };
};
  
export const fetchTokenError = () => {
  return {
    type: 'FETCH_TOKEN_ERROR'
  };
};

