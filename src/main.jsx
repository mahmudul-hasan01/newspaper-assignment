import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Login from './Components/Login/Login.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import Home from './Page/Home/Home.jsx';
import AddArticles from './Page/AddArticles/AddArticles.jsx';
import AllArticles from './Page/AllArticles/AllArticles.jsx';
import Subscription from './Page/Subscription/Subscription.jsx';
import Dashboard from './Page/Dashboard/Dashboard.jsx';
import MyArticles from './Page/MyArticles/MyArticles.jsx';
import PremiumArticles from './Page/PremiumArticles/PremiumArticles.jsx';
import UserPhoto from './Page/UserPhoto/UserPhoto.jsx';
import AllUser from './Page/Dashboard/AllUser/AllUser.jsx';
import AddPublisher from './Page/Dashboard/AddPublisher/AddPublisher.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'home',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'addArticles',
        element: <AddArticles></AddArticles>
      },
      {
        path: 'allArticles',
        element: <AllArticles></AllArticles>
      },
      {
        path: 'subscription',
        element: <Subscription></Subscription>
      }, 
      {
        path: 'myArticles',
        element: <MyArticles></MyArticles>
      },
      {
        path: 'premiumArticles',
        element: <PremiumArticles></PremiumArticles>
      },
      {
        path: 'userPhoto',
        element: <UserPhoto></UserPhoto>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'allUser',
        element: <AllUser></AllUser>
      },
      {
        path:'allArticles',
        element: <AllArticles></AllArticles>
      },
      {
        path:'addPublisher',
        element: <AddPublisher></AddPublisher>
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
