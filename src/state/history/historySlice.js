import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    list: []
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        submit: (state, action) => {
            state.list.push(action.payload);
        },
        clear: (state) => {
            state.list = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveHistoryAsync.pending, (state, action) => {
                state.loading = true;
                console.log('saveHistory.pending');
            })
            .addCase(saveHistoryAsync.fulfilled, (state, action) => {
                state.list.push(action.payload);
                state.loading = false;
            })
            .addCase(saveHistoryAsync.rejected, (state, action) => {
                console.log('saveHistory.rejected');
                state.loading = false;
            })
    }
})

export const saveHistoryAsync = createAsyncThunk(
    'history/saveHistoryAsync',
    async (value) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate an API request
        return value;
    },
);

export const {
    submit,
    clear
} = historySlice.actions

export default historySlice.reducer;
