
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function useDisclosure() {
  
//model open
const [isOpen,setisOpen]=useState(false)

const onOpen=()=>{
 setisOpen(true)
}
const onClose=()=>{
 setisOpen(false)
}


//signIn AND location sidedrawer

  const [position,setposition]=useState(" ")

  const singinClick=()=>{
    setposition("right")
    onOpen()
  }
  const LocationClick=()=>{
    setposition("left")
    onOpen()
  }
  
 

  //referral code

  const [Isreferral,setIsrefferal]=useState(false)
  const referralCode=()=>{
    setIsrefferal(true)
  }
 

  //fooditems count
  const [FoodCount,setFoodCount]=useState(0)

  const AddFood=()=>{
    setFoodCount(FoodCount + 1)
  }

  //toast added

  const Addtoast = () =>{ 
        AddFood()
        console.log(FoodCount)
        toast.success("Food Item Added ",{
              style:{
                fontSize:"20px",
                fontFamily:"ubuntu"
              }
          });
          
  }
   
  //filterfood
  const [filtertype,setfiltertype] = useState("relevant")

  const handleFilterChange = (newFilter) => {
    setfiltertype(newFilter);
  };
 // console.log(filtertype);

   
  


  

  
  return {onOpen,onClose,isOpen,position,singinClick,LocationClick,Isreferral,referralCode,Addtoast,FoodCount,filtertype,handleFilterChange}
}

