import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from "./slices/userDataReducer";

export const store = configureStore({
    reducer: {
        UserData: UserDataReducer
    }
})