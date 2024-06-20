import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { FaLongArrowAltLeft } from "react-icons/fa";


function ConfirmOrder() {
  return (
    <div className="w-[99vw] h-[100vh] flex justify-center items-center">
        <div className="w-[350px] h-[300px] flex flex-col gap-4 items-center justify-center border-2 border-greenColor shadow-2xl rounded-lg bg-green-100 max-sm:border-none">
            <BsPatchCheckFill  className="text-6xl text-greenColor"/>
            <p className="text-xl font-bold font-Acme">ORDER CONFIRM SUCCESSFULLY</p>
            <div className="w-[100%] flex justify-around">
                    <Link to="/" className="text-white p-2 border-2 border-greenColor rounded-md  font-medium bg-greenColor hover:rounded-none duration-300 flex items-center gap-2">
                    <FaLongArrowAltLeft/> Back to Home</Link>
                       
            </div>
            <div className="w-[80%] text-xs font-bold font-mono text-grey flex text-center">
                    <p>Thanks for trusting us.Hope you will  enjoy the food</p>
                   
            </div>
          
               
        </div>
    </div>
  )
}

export default ConfirmOrder
