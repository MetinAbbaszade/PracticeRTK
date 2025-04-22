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
        }
    }
})

export const { fetchData } = UserDataReducer.actions
const reducer = UserDataReducer.reducer
export default reducer