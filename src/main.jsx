import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';

import Home from './components/Home/Home';
import JobDetails from './components/Job/JobDetails';
import AddJob from './components/Job/AddJob';
import MyPostedJobs from './components/Job/MyPostedJobs';
import UpdateMyPostedJobs from './components/Job/UpdateMyPostedJobs';
import MyBids from './components/Bids/MyBids';
import MyBidsRequests from './components/Bids/MyBidsRequests';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/job/id',
          element:<JobDetails></JobDetails>
        },
        {
          path:'/addjob',
          element:<AddJob></AddJob>
        },
        {
          path:'/mypostedjobs',
          element:<MyPostedJobs></MyPostedJobs>
        },
        {
          path:'updatepostedjobs',
          element:<UpdateMyPostedJobs></UpdateMyPostedJobs>
        },
        {
          path:'mybids',
          element:<MyBids></MyBids>
        },
        {
            path:'/bidrequests',
            element:<MyBidsRequests></MyBidsRequests>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
