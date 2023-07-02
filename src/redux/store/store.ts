import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/userSlices'


export const store = configureStore({
  reducer: userSlice.reducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch