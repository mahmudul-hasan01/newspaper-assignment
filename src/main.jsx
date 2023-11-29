import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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
import AllArticle from './Page/Dashboard/AllArticles/AllArticle.jsx';
import ArticlesDetails from './Page/AllArticles/ArticlesDetails.jsx';
import PageNotFound from './Page/PageNotFound/PageNotFound.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: '/',
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
        element: <PrivateRoute><AddArticles></AddArticles></PrivateRoute>
      },
      {
        path: 'allArticles',
        element: <AllArticles></AllArticles>
      },
      {
        path: 'articlesDetails/:id',
        element: <PrivateRoute><ArticlesDetails></ArticlesDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://server-smoky-theta.vercel.app/articleDetails/${params.id}`)
      },
      {
        path: 'subscription',
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
      },
      {
        path: 'myArticles',
        element: <PrivateRoute><MyArticles></MyArticles></PrivateRoute>
      },
      {
        path: 'premiumArticles',
        element: <PrivateRoute><PremiumArticles></PremiumArticles></PrivateRoute>
      },
      {
        path: 'userPhoto',
        element: <PrivateRoute><UserPhoto></UserPhoto></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'allUser',
        element: <AllUser></AllUser>
      },
      {
        path: 'allArticle',
        element: <AllArticle></AllArticle>
      },
      {
        path: 'addPublisher',
        element: <AddPublisher></AddPublisher>
      }
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
