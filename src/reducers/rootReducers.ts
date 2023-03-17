import { combineReducers } from 'redux'
import themeSlice from '../slices/themeSlice'

const rootReducer = combineReducers({
  theme: themeSlice
})

export default rootReducer
