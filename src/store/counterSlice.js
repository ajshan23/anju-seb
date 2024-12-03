import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

const counterSlice = createSlice({
    initialState: initialState,
    name: "counter",
    reducers: {
        addCount: (state) => {
            state.count = state.count + 1;
        },
        minusCount: (state) => {
            state.count = state.count - 1;
        },
        setCount: (state, action) => {
            state.count = action.payload;//100
        }
    }
})

export const { addCount, minusCount, setCount } = counterSlice.actions;

export default counterSlice.reducer;


