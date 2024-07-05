import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import historySlice from "./history/historySlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        history: historySlice,
    }
});

export default store;
