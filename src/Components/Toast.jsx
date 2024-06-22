
import { Link } from "react-router-dom"
import { RxCross2 } from "react-icons/rx";
import { UseMyContext } from "../Context/MyContext";

function Toast({foodName,addAgain}) {

    const {setredToast, setgreenToast} = UseMyContext()

    const cutred=()=>{
        setredToast(false)
    }
    const cutgreen=()=>{
        setgreenToast(false)
    }
    
    return (
    <>
    {
      addAgain
        ?  
          (<div  className="w-[320px] animate-slideIn h-[80px] z-50 shadow-2xl fixed bottom-3 left-1 bg-red-500 rounded-md text-white flex flex-col items-center justify-around p-2  font-medium max-sm:w-[99%] border-2 border-white">
           <RxCross2 onClick={cutred} className="text-md absolute top-0 right-0 hover:font-bold cursor-pointer "/>
           <div className="w-[90%] h-[90%] flex justify-around items-center">

             <div><span className="text-2xl font-bold">{foodName}</span> Alredy Added</div>
                    <div> 
                        <Link to="/cart" className="text-sm">
                                <button className="w-[80px] h-[40px] border rounded-sm p-1 opacity-85 hover:opacity-100">View Cart</button>
                            </Link>
                    </div>
             </div>   

          </div>)
        
       : (<div className="w-[320px] animate-slideIn h-[80px]  z-50 shadow-2xl fixed top-3 left-1 bg-green-500 rounded-md text-white flex flex-col items-center justify-around p-2 font-medium  max-sm:w-[99%] border-2 border-white ">
           <RxCross2 onClick={cutgreen} className="text-md absolute top-0 right-0 hover:font-bold cursor-pointer "/>
             <div className="w-[90%] h-[90%] flex justify-around items-center ">

                   <div><span className="text-2xl font-bold">{foodName}</span> Added</div>
                    <div> 
                        <Link to="/cart" className="text-sm">
                                <button className="w-[80px] h-[35px] border rounded-sm p-1 opacity-85 hover:opacity-100">View Cart</button>
                            </Link>
                    </div>
             </div>
        </div>
       )    
    }
    </>

  )
}

export default Toast
