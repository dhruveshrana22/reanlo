


// actions.js
export const setUserDetails = (details) => ({
    type: 'SET_USER_DETAILS',
    payload: details,
  });
  
 // reducer.js
// redux/UserDetail/userdetail.js
const initialState = {
    userArray: [], // Use an array to store multiple user details
  };
  
  const UserReducer = (state = initialState, action) => {
    console.log("Data Comes From the UserD", action.payload);
    switch (action.type) {
      case 'SET_USER_DETAILS':
        return {
          ...state,
          userArray: [...state.userArray, action.payload], // Append new user details to the array
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;
  
