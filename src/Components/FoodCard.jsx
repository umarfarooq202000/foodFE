
import { MdOutlineStar } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { UseMyContext } from "../Context/MyContext";




function FoodCard({name,text,img,price,AddToCart,id,ratings ,foodCardInCart}) {


  const {filtertype}=UseMyContext()

  //tracing the live window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial width
   useEffect(() => {

    AOS.init({
      duration: 300, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize); 
     // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
  {  
  
   foodCardInCart
   ? (
   <div className=" w-[100%] h-[150px] flex gap-2 p-2 border-b transition-all  ">
     <div className="w-[40%] max-h-[180px] bg-contain">
           <img className="w-[100%] h-[100%] " src={`${img}`} alt="img" />    
     </div>
     <div className="w-[55%] flex flex-col justify-center gap-3">
       <div className="flex gap-2">
       <p className="text-lg text-grey font-bold font-Acme ">{name}</p>
       <p className="text-md text-greenColor font-medium flex items-center ">{ratings}<MdOutlineStar/></p>
       </div>
       <div className="flex  flex-col justify-start gap-3"> 
           <p className="text-xs text-grey max-sm:">{text}</p>
           <p className="text-lg text-greenColor px-2 font-bold  rounded-md flex items-center gap-2 "><span className="text-grey">Price:</span>{price}</p>
       </div>
     </div>
   </div>
   )

 
 : ( 
   windowWidth > 450

  // food large screen 
  ? ( 
    filtertype==="Offers"

        ?    <div  className=" w-[250px] max-h-[450px] flex flex-col gap-2 p-2  rounded-xl border border-transparent  hover:shadow-[1px_5px_6px_1px_rgba(0,0,0,0.2)]  transition-all duration-1000 ">
              <span className="text-lg position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                20%
              </span>
            <div className="w-[100%] h-[180px] bg-contain"><img className="w-[100%] h-[100%] rounded-lg" src={`${img}`} alt="img" /></div>
            <div className="flex justify-around ">
                <p className="text-xl text-grey font-medium font-Acme">{name}</p>
                <p className="text-md text-greenColor font-medium flex items-center ">{ratings}<MdOutlineStar/></p>

            </div>
            <p className="text-xs text-grey max-sm:">{text}</p>
            <div className="flex justify-around"> 
                <p className="text-md text-red-600 p-1 font-bold  rounded-md flex  items-center">

                  <span className="text-xs text-black ">Now At</span> <FaIndianRupeeSign/>{price}
                  </p>
          
                <button id={id} onClick={AddToCart} className="bg-mainColor text-white p-1 border border-mainColor font-ubuntu rounded-md hover:scale-105 duration-300"> Add to cart</button>
            </div>
             </div>
       
       :      <div  className=" w-[250px] max-h-[450px] flex flex-col gap-2 p-2  rounded-xl border border-transparent hover:shadow-[1px_5px_6px_1px_rgba(0,0,0,0.2)]  transition-all duration-1000 ">
                  <div className="w-[100%] h-[180px] bg-contain"><img className="w-[100%] h-[100%] rounded-lg" src={`${img}`} alt="img" /></div>
                  <div className="flex justify-around ">
                      <p className="text-xl text-grey font-medium font-Acme">{name}</p>
                      <p className="text-md text-greenColor font-medium flex items-center ">{ratings}<MdOutlineStar/></p>

                  </div>
                  <p className="text-xs text-grey max-sm:">{text}</p>
                  <div className="flex justify-around"> 
                      <p className="text-lg text-greenColor p-1 font-bold  rounded-md flex items-center"><FaIndianRupeeSign/>{price}</p>
                
                      <button id={id} onClick={AddToCart} className="bg-mainColor text-white p-1 border border-mainColor font-ubuntu rounded-md hover:scale-105 duration-300"> Add to cart</button>
                  </div>
              </div>
    
  )


// for mobile devices
    : 
    
    ( 
       filtertype==="Offers"
        ? 
       (<div className=" w-[350px] max-h-[300px] flex gap-2 p-2 border-2 rounded-xl hover:scale-95 hover:shadow-sm transition-all ">
              <span className=" absolute bg-red-500 rounded-lg text-white p-1 font-Acme">
                20%
              </span>
        <div className="w-[50%] h-[150px] bg-contain">
                <img className="w-[100%] h-[100%] rounded-lg" src={`${img}`} alt="img" />
              
          </div>
        <div className="w-[50%] flex flex-col gap-2">
            <p className="text-lg text-grey font-bold">{name}</p>
            <p className="text-md text-greenColor font-medium flex items-center ">{ratings}<MdOutlineStar/></p>
            <p className="text-xs text-grey max-sm:">{text.slice(0,80)}</p>
            <div className="flex justify-around"> 
                <p className="text-lg text-greenColor p-1 font-bold  rounded-md flex items-center">
                   <span className="text-xs text-black ">Now At</span> <FaIndianRupeeSign/>{price}
                </p>
                <button id={id} onClick={AddToCart} className="bg-mainColor text-white p-1 border border-mainColor font-ubuntu rounded-md hover:scale-105 duration-300">Add to cart</button>
            </div>
        </div>
       </div>
       
        )
      :
       (
       <div className=" w-[350px] max-h-[250px] flex gap-2 p-2 border-2 rounded-xl hover:scale-95 hover:shadow-sm transition-all ">
        <div className="w-[50%] h-[150px] bg-contain">
                <img className="w-[100%] h-[100%] rounded-lg" src={`${img}`} alt="img" />
              
          </div>
        <div className="w-[50%] flex flex-col gap-2">
            <p className="text-lg text-grey font-bold">{name}</p>
            <p className="text-md text-greenColor font-medium flex items-center ">{ratings}<MdOutlineStar/></p>
            <p className="text-xs text-grey max-sm:">{text.slice(0,80)}</p>
            <div className="flex justify-around"> 
                <p className="text-lg text-greenColor p-1 font-bold  rounded-md flex items-center"><FaIndianRupeeSign/>{price}</p>
                <button id={id} onClick={AddToCart} className="bg-mainColor text-white p-1 border border-mainColor font-ubuntu rounded-md hover:scale-105 duration-300">Add to cart</button>
            </div>
        </div>
       </div>
       ) 
     ) 
  )
}
     </>
  )
}

export default FoodCard
