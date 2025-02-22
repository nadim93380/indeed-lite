import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import MainLayout from './Layout/MainLayout';
import JobDetails from './Pages/JobDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';
import AuthSharer from './Authentication/AuthSharer';
import PrivateRoute from './Layout/PrivateRoute';
import Profile from './Pages/Profile';
import AllJobs from './Pages/AllJobs';
import PostJob from './Pages/PostJob';
import MyJobs from './Pages/MyJobs';
import UpdateJob from './Pages/UpdateJob';
import MyApplication from './Pages/MyApplication';
import Blogs from './Pages/Blogs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobDetails/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_PASS_BaseURL}/jobDetails/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: '/postjob',
        element: <PrivateRoute><PostJob></PostJob></PrivateRoute>,
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/myJobs',
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
      },
      {
        path: '/myApplication',
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
      },
      {
        path: '/updateJob/:id',
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_PASS_BaseURL}/jobDetails/${params.id}`)
      },

    ]
  },
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthSharer>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </AuthSharer>
  </React.StrictMode>,
)
