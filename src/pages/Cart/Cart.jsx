
//icons from react-icons
import { IoHelpBuoyOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";

////////////////***********///////////// 
import { Link } from "react-router-dom";
import useDisclosure from "../../hooks/useDisclosure";
import SideDrawer from "../../Components/SideDrawer";
import { UseMyContext } from "../../Context/MyContext";
import CartListedFood from "./CartFoodList";
import EmptyCart from "../../Components/EmptyCart";
import FoodCard from "../../Components/FoodCard";



export default function Cart() {
  
 //taking CartFoodList to add in cart
  const  { CartFoodList,setCartFoodList ,isPlacedOrder} = UseMyContext()
  console.log(isPlacedOrder)
  

 

//delte funtion to delete cart items/foods
const DeleteItem=(e)=>{
        const itemId=e.target.id
        const delitems = CartFoodList && CartFoodList.filter(item => item.id != itemId)
        setCartFoodList(delitems)
  }
  
//delte funtion to delete cart items/foods
const DeleteAll=(e)=>{
  const itemId=e.target.id
  const delitems = CartFoodList && CartFoodList.filter(item => item.id === itemId)
  setCartFoodList(delitems)
}


   //lenght of CartFoodList
   // { CartFoodList.length==0 ? console.log("zero"):console.log("lenght:",CartFoodList.length);}

  //opening od model and side drawer
  const { onOpen, onClose, isOpen, position, singinClick} = useDisclosure();


  return (
    <>
      {/*Navbar*/}
      <div
        className={`flex  items-center justify-around  w-[100vw] h-[80px] border-b-2 shadow-lg fixed z-50 bg-white  `}
      >
        <div className="w-[300px] h-[80px]  flex items-center justify-center  gap-4">
          <img src="https://i.pinimg.com/236x/86/fa/02/86fa02f165fd0db848d2d13e5e484758.jpg" alt="Logo" className="w-[30%] h-[100%]" />
          <p className=" text-3xl font-bold">CART</p>
        </div>
        <div className=" w-[300px] h-[40px]   flex gap-10 ">
          <Link
            to="/help"
            className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
          >
            <span className="text-2xl">
              <IoHelpBuoyOutline />
            </span>
            Help
          </Link>
          <button
            onClick={singinClick}
            className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
          >
            <span className="text-2xl">
              <TbUser />
            </span>
            SignIn
          </button>
        </div>
        <SideDrawer
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          position={position}
        />
      </div>
      {/*lowersection*/}
      <div className="w-[98vw] max-h-[200vh] flex  items-center justify-center">
        <div className="w-[80%] max-h-[200vh] flex justify-center max-sm:w-[100%]  max-md:flex-col mt-5 ">
      {/*LEFT SECTION*/}
         
          {
            CartFoodList && !CartFoodList.length ==0 
            ? <div  className=" min-w-[350px] max-h-[120vh] flex flex-col mt-28  max-md:hidden overflow-auto border">
                <div className="bg-white  w-[100%] top-24  ">
                      <p className="text-4xl  max-lg:text-2xl font-bold text-grey font-julee ">what you have added in Cart</p>
                </div>
                <div className="mt-4">
                { 
                  CartFoodList.map((item)=>(
                    <FoodCard
                        foodCardInCart
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        text={item.text}
                        img={item.image}
                        price={item.price}
                        ratings={item.ratings}
                      />
                 ))
               
               
               }   
               </div>           
               
              </div>
            :  (  <div className="w-[60%] max-h-[200vh] flex  gap-4  my-24 max-md:hidden ">
                  <img src="https://i.pinimg.com/564x/17/16/2c/17162cb8bf20a7ddd158259090707f7e.jpg" alt="" className="w-[90%] h-[90%]"/>
              </div>)
}
             
          
          {/*RIGHT SECTION*/}

          {CartFoodList && !CartFoodList.length ==0 ? (

            //when cart is not empty
              <div className="my-20">
                    <CartListedFood DeleteAll={DeleteAll} DeleteItem={DeleteItem}/>
              </div>
          ) : (
               //when cart is empty
               <div className="my-20">
                  <EmptyCart/>
               </div>
          
          )}
        </div>
      </div>
    </>
  );
}
