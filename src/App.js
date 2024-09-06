import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import Cart from './features/cart/Cart';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element:(<LoginPage></LoginPage>)
  },
  {
    path: "/signup",
    element:(<SignUpPage></SignUpPage>)
  },
  {
    path: "/cart",
    element:(<CartPage></CartPage>)
  },
])
//kunal jain
function App() {
  return (
    <div className="App" >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
