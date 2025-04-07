import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import RestaurentMenu from "./components/RestaurentMenu.jsx";
import Profile from './components/Profile.jsx';
import { Shimmer } from './components/Shimmer.jsx';
import Cart from './components/Cart.jsx';


const InstaServices = lazy(()=> import("./components/InstaServices.jsx"))
const appRouter = createBrowserRouter([
  {

    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {

        path: "/about",
        element: <About/>,
        children: [
          {
            path: "profile",
            element: <Profile/>,
          }
        ],
      },
      {

        path: "/",
        element: <Body/>,
      },
      {

        path: "/restaurent/:id",
        element: <RestaurentMenu/>,
      },
      {

        path: "/cart",
        element: <Cart/>,
      },
      {

        path: "/insta",
        element: (<Suspense fallback={<Shimmer/>} >
          <InstaServices/>
        </Suspense>),
      }
    ]
  }
 
]);


createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={appRouter} />
 
)
