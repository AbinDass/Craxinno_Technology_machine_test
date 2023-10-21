import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const balanceSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setBalance: (state, action) => {
            state.data.push({ balance: action.payload.accountdata });
        },

        setRemoveBalance: (state) => {
            state.data = [];
        },
    },
});

export const balanceAction = balanceSlice.actions;
export default balanceSlice.reducer;
