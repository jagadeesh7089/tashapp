import { configureStore } from '@reduxjs/toolkit'
import counter
export const store = configureStore({
  reducer: {counterReducer},
})