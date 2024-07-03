import { useState } from 'react'
import Enav from './components/ENav'
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'
import About from './pages/About';
import Landing from './pages/Landing';
import {Provider} from "react-redux";
import { CartProvider, useCart } from "react-use-cart";
import store from './redux/store'
import Cart from './pages/Cart';
import Product from './pages/Product';
import Category from './pages/Categories';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    },
    {
      path: "/about",
      element: <About/>,
    }, 
    {
      path: "/product",
      element: <Product/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/categories",
      element: <Category/>,
    },
  
  ]);
  return (
    <>

<Provider store={store}>

    <RouterProvider router={router} />
</Provider>

    </>
  )
}

export default App
