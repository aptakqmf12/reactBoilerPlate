import { useCallback } from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { counterReducer, COUNTER } from './modules/counter';

const rootReducer = combineReducers({
    [COUNTER]: counterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
