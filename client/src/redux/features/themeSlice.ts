import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type Theme = "light" | "dark";
interface ThemeState {
    mode: Theme;
}
const theme = localStorage.getItem("theme") || "light";
const initialState: ThemeState = {
    mode: theme as Theme
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.mode = action.payload;
            localStorage.setItem("theme", action.payload);
        }
    }
})

export const { 
    setTheme
} = themeSlice.actions;
export default themeSlice.reducer;