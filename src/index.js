import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './styles/index.css';

// 404 page
import Error from './features/error/';

// Landing page
import Home from './features/home/';

// Shopping page
import { Shop } from './features/shop/';

// Shopping page
import Cart from './features/cart/';

// Reducer for cart and for filter in store
import { cartReducer, filterReducer } from './features/shop/reducers/';

// Different types of shopping pages under different urls
import { AllItems, Men, MostWanted, Women } from './features/shop/components';

// Displays and structures header, content, footer
import Root from './features/root/';

// Shopping page for every item, (uses id from /shared/utils/products/item.json)
import Item from './features/item/';


  /*
  --------------------------------
  Notes:
  When adding new watches:
    * Existing brand:
      - add watch to src/shared/utils/products/items.json
    * New brand
      - add watch to src/shared/utils/products/items.json
      - add brand to src/features/shop/reducers/filterReducer.js
      - add brand to src/features/shop/utils/filters.js


  */


// Routes for pages in project
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
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
    ]

  },
]);

// Configures store based on reducer for "filter"
const rootReducer = combineReducers({
  filterReducer,
  cartReducer
});
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
