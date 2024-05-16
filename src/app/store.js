import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todolistReducer from '../features/todolist/todolistSlice'
import {countriesApi} from '../features/services/countriesapi'
import { productsApi } from '../features/services/productsapi';
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