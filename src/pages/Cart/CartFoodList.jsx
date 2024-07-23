import { Link } from "react-router-dom"
import { UseMyContext } from "../../Context/MyContext"
import { LuIndianRupee } from "react-icons/lu" 
import { MdArrowRightAlt } from "react-icons/md";


import { MdFastfood } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import CartFood from "./CartFood";
import Toast from "../../Components/Toast";


function CartListedFood({DeleteAll,DeleteItem}) {



  const {CartFoodList,TotalPayment,SGST_,CGST_,deliveryCharge,LoginNumber}=UseMyContext()
 
    console.log(LoginNumber)
  
  

  return (
    <div className="w-[370px] max-h-[200vh]  max-md:w-[100%] bg-white z-50 flex flex-col font-Agdasima">
        <div className="w-[100%] h-[100px]  z-30 shadow-md  text-3xl flex flex-col items-center justify-center font-bold text-grey">
                <p className="p-2 font-mono text-mainColor border-b-2"> Food In Cart</p>
                <div className="flex ">
                    <Link to="/" className="bg-mainColor flex  gap-2 items-center text-sm px-2 py-1 text-white font-medium border border-mainColor  hover:scale-105 duration-300 m-2 rounded-full">
                    <MdFastfood className="text-xl"/> Order More 
                    </Link>
                    <button onClick={DeleteAll} disabled={CartFoodList.length==0} className="bg-mainColor flex  gap-2 items-center text-sm px-2 py-1 text-white font-medium border border-mainColor  hover:scale-105 duration-300  m-2  rounded-full">
                      <MdDeleteForever className=" text-xl"/>Clear All</button>
                </div>
        
        </div>
        {/* FOOD ITEMS DETAILED */}
        <div className="w-[100%] h-[250px]  overflow-auto">
                  {CartFoodList && CartFoodList.map((item, index) => (
                    <CartFood DeleteItem={DeleteItem}  key={index} id={item.id} name={item.name} price={item.price} image={item.image} />
                  ))}
        </div>
        <div className="flex items-center justify-center">
            <p className="flex  items-center text-red-800 font-bold">Free Delivery on <span className="text-2xl flex  items-center"> <LuIndianRupee/>500 </span> & above</p>

        </div>       
          {/* BILL DETAILS */}
          <div className="w-[100%] max-h-[50vh] border-t  items-baseline px-2 gap-2  ">
                <p className="w-[100%] text-md font-bold">Bill details:</p>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-grey font-bold">Item total:</p>
                    <p className="text-greenColor  flex items-baseline  text-lg font-semibold">
                      <LuIndianRupee className="text-sm"/>
                    {TotalPayment}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-grey font-bold">Delivery charges : </p>
                  <p className="flex text-lg items-center text-greenColor font-bold">  <LuIndianRupee className="text-sm"/>{deliveryCharge}</p>
              </div>
              <div className="flex items-center justify-between">
                  <p className="text-sm text-grey font-bold">CGST charges : <span className="text-xs font-light">5 per cent</span> </p>
                  <p className="flex text-lg items-center text-greenColor font-bold">  <LuIndianRupee className="text-sm"/>{parseFloat( CGST_)}</p>
              </div>
              <div className="flex items-center justify-between">
                  <p className="text-sm text-grey font-bold">SGST charges : <span className="text-xs font-light">5 per cent</span> </p>
                  <p className="flex text-lg items-center text-greenColor font-bold">  <LuIndianRupee className="text-sm"/>{parseFloat( SGST_)}</p>
              </div>
              <div className="flex justify-between border-t my-2 py-2">
                <p className="font-bold  text-2xl">Total Bill  :</p>
                <p className="text-greenColor text-2xl font-bold flex items-baseline"> <LuIndianRupee className="text-lg"/>{TotalPayment + SGST_ + CGST_ + deliveryCharge}</p>
              </div>
        </div>
        {/* PLACE ORDER BUTTON */}
        <div className="">
{         LoginNumber ? 
                 
                 <Link to={`${ LoginNumber ?'/checkout':'/'}`} className="bg-mainColor flex justify-center gap-2 items-center  p-2  text-white text-xl font-bold border border-mainColor  hover:scale-95 duration-500 m-2 rounded-lg">Place Order<MdArrowRightAlt className="text-3xl"/></Link>
                : <p className="bg-mainColor flex justify-center gap-2 items-center  p-2  text-white text-xl font-bold border border-mainColor" >Please Login/SignUp to place order</p>
                }       

</div>
       
  </div>
  )
}

export default CartListedFood
