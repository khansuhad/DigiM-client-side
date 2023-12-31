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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import CreateSuccessStories from './components/CreateSuccessStories/CreateSuccessStories';
import SuccessStory from './components/CreateSuccessStories/SuccessStory';

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
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-server-side-rust.vercel.app/jobs/catagory/${params._id}`)
        },
        {
          path:'/addjob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/mypostedjobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
          loader: () => fetch('https://assignment-11-server-side-rust.vercel.app/jobs')

        },
        {
          path:`/updatepostedjobs/:_id`,
          element:<PrivateRoute><UpdateMyPostedJobs></UpdateMyPostedJobs></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-server-side-rust.vercel.app/jobs/catagory/${params._id}`)
        },
        {
          path:'/mybids',
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
        },
        {
            path:'/bidrequests',
            element:<PrivateRoute><MyBidsRequests></MyBidsRequests></PrivateRoute>,
        },
        {
            path:'/createsuccessstory',
            element:<PrivateRoute><CreateSuccessStories></CreateSuccessStories></PrivateRoute>
        },
        {
            path:"/successstory",
            element:<SuccessStory></SuccessStory>,
        },
        {
          path:'/login',
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
