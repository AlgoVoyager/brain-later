import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface ThemeState {
    theme: string;
}
const initialState: ThemeState = {
    theme: localStorage.getItem("theme") || "light"
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        }
    }
})

export const {  
    setTheme
} = themeSlice.actions;
export default themeSlice.reducer;