// store.js

import {  combineReducers } from 'redux';
import Emailreducer from '../Emai/Emailaction';

const rootReducer = combineReducers({
  Email: Emailreducer,
  // Add more reducers if needed
});


export default rootReducer;
