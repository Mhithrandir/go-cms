import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import Layout from './pages/layout';
import NoPage from './pages/no-page';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import { rootLoader, errorLoader } from './service/api';
import Routes from './pages/routes';
import Users from './pages/users';
import UserTypes from './pages/usertypes';
import Forum from './pages/forum';
import Menus from './pages/menus';
import LogoutPage from './pages/logout';
import Database from './pages/database';

// async function rootLoader({ request }) {
//   let result = await fetch("http://127.0.0.1:8000/api/route/check", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // 'X-RapidAPI-Key': 'your-api-key',
//       // 'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
//     },
//     body: JSON.stringify({
//       Package: "page",
//       Func: request.url.replace("http://localhost:3000/", ""),
//       Type: "Page"
//     })
//   });
//   console.log(result);
//   if(result.status === 200)
//     return true;
//   return redirect(`/error/${result.statusText}`);
// }

// async function errorLoader({ params }) {
//   return { message: params.message };
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NoPage/>,
    children: [
      {
        index: true,
        exact: true,
        element: <Home />,
        loader: rootLoader
      },
      {
        path: "/home",
        exact: true,
        element: <Home />,
        loader: rootLoader
      },
      {
        path: "/login",
        exact: true,
        element: <Login />,
        loader: rootLoader
      },
      {
        path: "/register",
        exact: true,
        element: <Register />,
        loader: rootLoader
      },
      {
        path: "/routes",
        exact: true,
        element: <Routes />,
        loader: rootLoader
      },
      {
        path: "/users",
        exact: true,
        element: <Users />,
        loader: rootLoader
      },
      {
        path: "/usertypes",
        exact: true,
        element: <UserTypes />,
        loader: rootLoader
      },
      {
        path: "/menus",
        exact: true,
        element: <Menus />,
        loader: rootLoader
      },
      {
        path: "/logout",
        exact: true,
        element: <LogoutPage />,
        loader: rootLoader
      },
      {
        path: "/db-api",
        exact: true,
        element: <Database />,
        loader: rootLoader
      },
      {
        path: "/error/:message",
        exact: true,
        loader: errorLoader,
        element: <NoPage />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
