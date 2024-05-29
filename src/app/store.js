import { configureStore } from '@reduxjs/toolkit'
import todoReducre from '../feature/todoSlice'

export const store = configureStore({
  reducer: todoReducre
})