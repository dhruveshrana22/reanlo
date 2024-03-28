// authActions.js

export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
  });
  


  // authReducer.js

const initialState = {
    email: '',
  };
  
  const Emailreducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  
  export default Emailreducer;
  