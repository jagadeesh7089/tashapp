import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Kajal from './routing/kajal';
import Infield from './routing/royal';
import Countries from './countries';
import Country from './country';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
      path: "kaju",
      element: <Kajal></Kajal>
    },
    {
      path: "re",
      element: <Infield></Infield>
    },
    {
      path: "countries",
      element:<Countries></Countries>,
      children:[
        {
          path: "countries/:cname",
          element:<Country></Country>
        },
      ]
    },
    
  ]
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
