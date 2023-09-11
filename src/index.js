import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';

import Error from './features/error/';
import Home from './features/home/';
import { Shop } from './features/shop/';
import { AllItems, Men, MostWanted, Women } from './features/shop/components';
import Root from './features/root/';
import Item from './features/item/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop/",
            element: <AllItems />
          },
          {
            path: "/shop/most-wanted",
            element: <MostWanted />
          },
          {
            path: "/shop/women",
            element: <Women />
          },
          {
            path: "/shop/men",
            element: <Men />
          },
        ]
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
    ]

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
