
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//navbar options import for new page navigation
import AboutUs from "./pages/AboutUs/AboutUs";
import Search from "./pages/Search/Search";
import Offers from "./pages/Offers/Offers";
import SignIn from './pages/Signin/SignIn.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Help from './pages/Help/Help.jsx'
import TermsCondition from './pages/Terms&Condition/TermsCondition'

import Homepage from "./pages/HomePage/Homepage.jsx";

//main food itmes import 
import Burger from './pages/MainFoods/Burger.jsx'
import Biryani from './pages/MainFoods/Biryani.jsx'
import Pizza from "./pages/MainFoods/Pizza";
import Noodles from "./pages/MainFoods/Noodles";
import Momos from "./pages/MainFoods/Momos";
import Shakes from "./pages/MainFoods/Shakes";
import Parathas from "./pages/MainFoods/Parathas";
import Coffee from "./pages/MainFoods/Coffee"
import Drinks from "./pages/MainFoods/Drinks";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder.jsx";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/about-us",
      element: <AboutUs/>,
    },
    {
      path: "/search",
      element: <Search/>,
    },
    {
      path: "/offers",
      element: <Offers/>,
    },
    {
      path: "/help",
      element: <Help/>,
    },
    {
      path: "/signin",
      element: <SignIn/>,
    },
    {
      path:"/termsCondition",
      element:<TermsCondition/>
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
   
    {
      path: "/pizza",
      element: <Pizza/>,
    },
    {
      path:'/burger',
      element:<Burger/>
    },
    {
      path:'/biryani',
      element:<Biryani/>
    },
    {
      path:'/noodles',
      element:<Noodles/>
    },
    {
      path:'/drinks',
      element:<Drinks/>
    },
    {
      path:'/momos',
      element:<Momos/>
    },
    {
      path:'/shakes',
      element:<Shakes/>
    },
    {
      path:'/parathas',
      element:<Parathas/>
    },
    {
      path:"/coffee",
      element:<Coffee/>
    },
    {path:'/checkout',
      element:<PlaceOrder/>
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
