
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./Components/Loader.jsx";
import Homepage from "./pages/HomePage/Homepage.jsx";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder.jsx";




const Cart=lazy(()=>import('./pages/Cart/Cart.jsx'))
const AboutUs =lazy(()=> import("./pages/AboutUs/AboutUs.jsx"))
const Help = lazy(()=> import("./pages/Help/Help.jsx"))
const TermsCondition = lazy(()=> import("./pages/Terms&Condition/TermsCondition.jsx"))
const PlaceOrder= lazy(()=> import("./pages/PlaceOrder/PlaceOrder.jsx"))
const Burger = lazy(()=> import("./pages/MainFoods/Burger.jsx"))
const Biryani = lazy(()=> import("./pages/MainFoods/Biryani.jsx"))
const Pizza = lazy(()=> import("./pages/MainFoods/Pizza.jsx"))
const Noodles = lazy(()=> import("./pages/MainFoods/Noodles.jsx"))
const Momos = lazy(()=> import("./pages/MainFoods/Momos.jsx"))
const Shakes = lazy(()=> import("./pages/MainFoods/Shakes.jsx"))
const Parathas = lazy(()=> import("./pages/MainFoods/Parathas.jsx"))
const Coffee = lazy(()=> import("./pages/MainFoods/Coffee.jsx"))
const Drinks = lazy(()=> import("./pages/MainFoods/Drinks.jsx"))

function App() {
  
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/about-us",
      element: <Suspense fallback={ <Loader/> }> <AboutUs/></Suspense>,
    },
    {
      path: "/help",
      element: <Suspense fallback={<Loader/>}><Help/></Suspense>,
    },
    {
      path:"/termsCondition",
      element:   <Suspense fallback={ <Loader/> }><TermsCondition/></Suspense>,
    },
    {
      path: "/cart",
      element: <Suspense fallback={ <Loader/> }><Cart/></Suspense>,
    },
    {
      path: "/pizza",
      element:<Suspense fallback={ <Loader/> }><Pizza/></Suspense>,
    },
    {
      path:'/burger',
      element:<Suspense fallback={ <Loader/> }><Burger/></Suspense>,
    },
    {
      path:'/biryani',
      element:<Suspense fallback={ <Loader/> }><Biryani/></Suspense>,
    },
    {
      path:'/noodles',
      element:<Suspense fallback={ <Loader/> }><Noodles/></Suspense>,
    },
    {
      path:'/drinks',
      element:<Suspense fallback={ <Loader/> }><Drinks/></Suspense>,
    },
    {
      path:'/momos',
      element:<Suspense fallback={ <Loader/> }><Momos/></Suspense>,
    },
    {
      path:'/shakes',
      element:<Suspense fallback={ <Loader/> }><Shakes/></Suspense>,
    },
    {
      path:'/parathas',
      element:<Suspense fallback={ <Loader/> }><Parathas/></Suspense>,
    },
    {
      path:"/coffee",
      element:<Suspense fallback={ <Loader/> }><Coffee/></Suspense>,
    },
    {path:'/checkout',
      element:<Suspense fallback={ <Loader/> }><PlaceOrder/></Suspense>,
    },
    {
      path:"/order-confirm",
      element:<ConfirmOrder/>
    }


  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
     
   
  )
}

export default App
