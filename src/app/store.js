import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todolistReducer from '../features/todolist/todolistslice'
import {countriesApi} from '../services/countriesapi'
import { productsApi } from '../services/productsapi';
export const store = configureStore({
  reducer: {
    counterReducer,
    todolistReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})