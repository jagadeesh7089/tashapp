import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux -router/store';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Todolist from './redux -router/todolist';
import Products from './products';
import Counter from './redux -router/counter';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[{
        path:"counter",
        element:<Counter></Counter>,
      },
     {
        path:"todolist",
        element:<Todolist></Todolist>
     },
     {
        path:"products",
        element:<Products></Products>
     }
    ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
</Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
