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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthProvider from './components/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:`/job/:_id`,
          element:<JobDetails></JobDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/catagory/${params._id}`)
        },
        {
          path:'/addjob',
          element:<AddJob></AddJob>
        },
        {
          path:'/mypostedjobs',
          element:<MyPostedJobs></MyPostedJobs>,

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
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
