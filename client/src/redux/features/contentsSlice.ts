import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardProps } from "../../utils/types";

const initialState: CardProps[] = [];

export const contentsSlice = createSlice({
    name: 'contents',
    initialState,
    reducers: {
        setContents: (state, action: PayloadAction<CardProps[]>) => {
            return action.payload
        },
        addContent: (state, action: PayloadAction<CardProps>) => {
            state.push(action.payload);
        },
        updateShareContent: (state, action: PayloadAction<string>) => {
            return state.map((item) => item._id === action.payload ? { ...item, shared: !item.shared } : item)
        },
        deleteContent: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item._id !== action.payload)
        },

    }
})

export const { setContents, addContent, deleteContent, updateShareContent } = contentsSlice.actions;
export default contentsSlice.reducer;