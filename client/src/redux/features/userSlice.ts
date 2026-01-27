import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserDetails } from "../../utils/types";

const initialState: UserDetails = {
    _id: "1234",
    fullname: "your name",
    email: "your email",
    hash: "hashh",
    contentDetails: {
        totalPosts: 0,
        publicPosts: 0
    },
    __v: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (_state, action: PayloadAction<UserDetails>) => {
            return action.payload
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.fullname = action.payload;
        },
        setLogout: () => {
            return initialState
        },
        setPublicPosts: (state, action: PayloadAction<number>) => {
            state.contentDetails.publicPosts += action.payload;
        },
        setTotalPosts: (state, action: PayloadAction<number>) => {
            state.contentDetails.totalPosts += action.payload;
        }
    }
})

export const { setUserDetails, setUserName, setLogout, setPublicPosts, setTotalPosts } = userSlice.actions;
export default userSlice.reducer;