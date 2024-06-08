import { createSlice } from "@reduxjs/toolkit";
import { defaultUserData } from "../../constants/constants";

export const ChangeUser = createSlice({
    name: 'ChangeUser',
    initialState: {
        userData: defaultUserData
    },
    reducers:{
        changeUserData (state, action){
            state.userData = action.payload
        }
    }
})

export const {changeUserData} = ChangeUser.actions