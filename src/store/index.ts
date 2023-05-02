// Store
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Reduers
import commonReducer from 'store/reducers/common';

const reducer = combineReducers({
    common: commonReducer,
});

export const store = configureStore({ 
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;