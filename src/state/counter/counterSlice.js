import {createSlice} from "@reduxjs/toolkit";
import {saveHistoryAsync} from "../history/historySlice";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
            if (state.value < 0) {
                state.value = 0;
            }
        },
        reset: (state) => {
            state.value = 0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveHistoryAsync.fulfilled, (state, action) => {
            // reset when submit is called
            state.value = 0;
        });
    }
});

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset
} = counterSlice.actions;

export default counterSlice.reducer;
