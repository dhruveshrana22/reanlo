// userActions.js
export const loginUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user,
  });

  
  // userReducer.js
const initialState = {
    loggedInUser: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    console.log("loginReducer",action.payload)
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          loggedInUser: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  