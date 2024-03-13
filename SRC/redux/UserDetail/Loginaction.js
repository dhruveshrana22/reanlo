// userActions.js
export const loginUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user,
  });

  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
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
        case 'LOGOUT_USER':
          return {
            ...state,
            loggedInUser: null, // Clear the logged-in user
          };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  