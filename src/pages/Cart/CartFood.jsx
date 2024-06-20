

import {  useEffect, useState } from "react";
import { LuIndianRupee } from "react-icons/lu";
import { TiDelete } from "react-icons/ti";
import { UseMyContext } from "../../Context/MyContext";

function CartFood({name,image,price,id,DeleteItem}) {

    
  const {CartFoodList,setTotalPayment}=UseMyContext() 

  //TotalPayment Update funtion
  const updateTotalPrice = () => {
    const newTotalPrice = CartFoodList.reduce((acc, item) => {
      return acc + item.price * (item.id === id ? NumOrder : item.quantity);
    }, 0);
    setTotalPayment(newTotalPrice);
  };

  const [NumOrder, setNumOrder] = useState(1);

  const IncreaseBtn = () => {
    setNumOrder(NumOrder + 1);
  };

  const DecreaseBtn = () => {
    NumOrder < 2 ?setNumOrder(1):setNumOrder(NumOrder-1)
  };
 
  //calling updateTotalPrice whenevr NumOrder or CartFoodList changes
  useEffect(() => {
    updateTotalPrice();
  }, [NumOrder, CartFoodList]);

 
  useEffect(() => {
    const itemIndex = CartFoodList.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      CartFoodList[itemIndex].quantity = NumOrder;
    }
  }, [NumOrder]);

  return (
            <div className="w-[100%] flex items-center justify-around border-b-2 p-2">
                    <div className="w-[35px] h-[35px] overflow-hidden bg-center">
                        <img src={`${image}`} alt="" className="w-[100%] h-[100%] rounded-full"/>
                        
                    </div>
                    <p  className="w-[100px]   text-sm font-medium font-ubuntu">{name}</p>
                    <div className="w-[80px] h-[30px] flex items-center justify-around border rounded-sm border-borderColor  ">
                        <button onClick={DecreaseBtn} className="font-bold text-greenColor  px-2 text-2xl">-</button>
                        <p className="text-greenColor ">{NumOrder}</p>
                        <button onClick={IncreaseBtn} className="font-bold text-greenColor px-2  text-2xl">+</button>
                    </div>
                    
                    <p className="flex w-[50px] items-center"><LuIndianRupee/>{NumOrder * price}</p>
                    <button  onClick={DeleteItem}  className="text-2xl text-mainColor"><TiDelete id={id} className="w-[30px] h-[30px]"/></button>
            </div>
         
           

      
        

       
   
  )
}

export default CartFood
