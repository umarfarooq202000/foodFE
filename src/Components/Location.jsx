import { RxCross2 } from "react-icons/rx";
import { MdMyLocation } from "react-icons/md";
import { LuTimerReset } from "react-icons/lu";


function Location({onClose}) {

  return (
    <div className="w-[40vw] h-[100vh] bg-white shadow-xl text-center p-4 flex flex-col gap-4 max-sm:w-[300px]">
        <div className="flex justify-start">
             <RxCross2 onClick={onClose} className="text-2xl  text-mainColor cursor-pointer"/>

        </div>
        <div>
            <input type="text" name="" id=""  placeholder="Search for street name,area" className="w-[100%] h-[50px] px-3 shadow-lg outline-none border border-gray-300 text-lg"/>
        </div>
        <div>
            <button className=" flex gap-3 items-center w-[100%] h-[100px] px-3 hover:text-mainColor outline-none border border-gray-300">
             <div className="text-2xl text-grey">
              <MdMyLocation/>
             </div>
              <div className="">
                <p className="font-bold flex justify-start">Get current location</p>
                <p className=" flex justify-start text-sm text-grey font-light">Using GPS</p>
              </div>
            </button>

        </div>
        <div>
           <button className="w-[100%] h-[100px] px-3 hover:text-mainColor outline-none border border-gray-300">
            <div className="flex justify-start text-grey  font-light">Resent searches</div>
            <div className="flex gap-3 items-center">
                  <div className="text-2xl text-grey">
                    <LuTimerReset/>
                  </div>
                  <div className="">
                    <p className="font-bold flex justify-start">{"Amroha"}</p>
                    <p className=" flex justify-start text-sm text-grey font-light">{"Uttar Pradesh,India"}</p>
                  </div>

            </div>
           
            </button>
        </div>
      
    </div>
  )
}

export default Location
