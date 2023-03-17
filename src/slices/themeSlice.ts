import { createSlice } from '@reduxjs/toolkit'

type themeAllowed = 'light' | 'dark'
interface InitialState {
  theme: themeAllowed
}

const initialState: InitialState = {
  theme: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return { theme: action.payload }
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
