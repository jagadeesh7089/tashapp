import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries/countries';
import Products from './features/products/products';
import Posts from './features/posts/posts';
import Addpost from './features/posts/addpost';
import Editpost from './features/posts/editpost';
import Courses from './features/courses/courses';
import Addcourses from './features/courses/addcourses';
import Editcourses from './features/courses/editcourses';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
         {
        path: "counter",
        element:<Counter></Counter>
      },
         {
        path: "todolist",
        element:<Todolist></Todolist>
      },
         {
        path: "counter",
        element:<Counter></Counter>
      },
         {
        path: "countries",
        element:<Countries></Countries>
      },
         {
        path: "products",
        element:<Products></Products>
      },
         {
        path: "posts",
        element:<Posts></Posts>
      },
         {
        path: "addpost",
        element:<Addpost></Addpost>
      },
         {
        path: "editpost",
        element:<Editpost></Editpost>
      },
         {
        path: "courses",
        element:<Courses></Courses>
      },
         {
        path: "addcourse",
        element:<Addcourses></Addcourses>
      },
         {
        path: "editcourse",
        element:<Editcourses></Editcourses>
      },
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
