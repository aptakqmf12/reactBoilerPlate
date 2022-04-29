import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../';

export const COUNTER = 'counter';

interface CounterState {
    count: number;
}
const initialState: CounterState = {
    count: 0,
};

const counterSlice = createSlice({
    name: COUNTER,
    initialState,
    reducers: {
        setCountUp(state, action: PayloadAction<number>) {
            state.count = state.count + action.payload;
        },
    },
});

const selfSelector = (state: RootState) => state[COUNTER];

export const counterSelector = createSelector(selfSelector, (state) => state.count);

export const counterAction = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
