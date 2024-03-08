// Import necessary modules
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
 // Defaults to localStorage for web and AsyncStorage for react-native
import {thunk} from 'redux-thunk';
import rootReducer from './RootReducer/rootreducer';

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Enhance your reducer with Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with Thunk middleware and the persisted reducer
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Create the persistor (used for persistor-related functions)
const persistor = persistStore(store);

export { store, persistor };
