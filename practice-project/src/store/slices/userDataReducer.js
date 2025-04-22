import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const UserDataReducer = createSlice({
    name: 'UserData',
    initialState,
    reducers: {
        fetchData: (state, { payload }) => {
            state.users = payload;
        },
        addData: (state, { payload }) => {
            state.users = [payload, ...state.users];
        }
    }
})

export const { fetchData, addData } = UserDataReducer.actions
const reducer = UserDataReducer.reducer
export default reducer