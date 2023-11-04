import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import HomeBanner from './components/Home/HomeBanner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
          path:'/',
          element: <HomeBanner></HomeBanner>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
