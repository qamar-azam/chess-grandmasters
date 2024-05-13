import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import ErrorPage from './error-page';
import Profile, { loader as profileLoader } from './routes/profile';
import Home, { loader as homeLoader } from './routes/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader
      },
      {
        path: 'profile/:id',
        element: <Profile />,
        loader: profileLoader
        // loader: async ({ params }) => {
        //   return await profileLoader(params);
        // }
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
