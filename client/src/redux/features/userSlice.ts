import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserDetails } from "../../utils/types";

const initialState:UserDetails =  {
    _id: "1234",
    fullname: "your name",
    email: "your email",
    hash:"hashh",
    contentDetails:{
        totalPosts:0,
        publicPosts:0
    },
    token:""
  }
  
  export const userSlice = createSlice({
      name: 'user',
      initialState,
      reducers: {
        setUserDetails: (state, action: PayloadAction<UserDetails>) => {
            state = action.payload
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.fullname = action.payload;
        },
      }
  })

  export const {setUserDetails, setUserName} = userSlice.actions;
  export default userSlice.reducer;