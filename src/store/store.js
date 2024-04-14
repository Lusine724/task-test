import { configureStore } from '@reduxjs/toolkit'
import systemSlice from './slices/systemSlice/systemSlice'

export const store = configureStore({
  reducer: {
    system: systemSlice.reducer
  },
})