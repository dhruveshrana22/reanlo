// store.js

import {  combineReducers } from 'redux';
import Emailreducer from '../Emai/Emailaction';
import UserReducer from '../UserDetail/userdetail';
import loginReducer from '../UserDetail/Loginaction';

const rootReducer = combineReducers({
  Email: Emailreducer,
  UserReducer : UserReducer,
  loginReducer:loginReducer,
  
});


export default rootReducer;
