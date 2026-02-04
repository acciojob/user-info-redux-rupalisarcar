import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name:'UserInfo',
    initialState:{
        name:'',
        email:''
    },
    reducers:{
        setName(state,action){
            state.name = action.payload
        },
        setEmail(state,action){
            state.email = action.payload
        }
    }
})

export const {setName, setEmail} = userInfoSlice.actions;
export default userInfoSlice.reducer

// comment