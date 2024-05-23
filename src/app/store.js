import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todolistReducer from '../features/todolist/todolistSlice'
import {countriesApi} from '../services/countriesapi'
import { productsApi } from '../services/productsapi';
import { postsApi } from '../services/postApi';
export const store = configureStore({
  reducer: {
    counterReducer,
    todolistReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware),
})