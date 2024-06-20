//import icons from react -icons
import { RiAppleFill } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import useDisclosure from "../hooks/useDisclosure"
import Navbar from "./Navbar"
import SideDrawer from "./SideDrawer"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { UseMyContext } from "../Context/MyContext";


function HomePageLayout({children,AddFilter,FoodCount,isHovering,handleMouseOver,handleMouseOut,SearchFoodFun}) {



const  { onOpen,onClose,isOpen,position,singinClick,LocationClick} = useDisclosure()

//searchbar
const {SearchBar,CutSearchbar}=UseMyContext()



return (
 
    <div className="flex flex-col w-[99vw] max-h-[200vh] ">

     {/* getting search bar */}
     {  
        SearchBar && !AddFilter && <div className=" flex justify-center w-[98vw] fixed top-20 z-50">
                                <div className="flex text-lg min-w-[360px] w-[50vw] h-[60px] border-4 border-borderColor bg-white z-50 shadow-xl ">
                                    <input onChange={SearchFoodFun}  type="text" placeholder="Search..." className="text-lg  min-w-[340px] w-[48vw] p-1 outline-none bg-transparent rounded-md "/>
                                    <RxCross2 className="cursor-pointer text-2xl text-mainColor font-bold " onClick={CutSearchbar}/>
                                </div>
                               
                      </div>}
    
        { !AddFilter && <Navbar isHovering={isHovering} handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} FoodCount={FoodCount} onOpen={onOpen} singinClick={singinClick} LocationClick={LocationClick} />}
         
          <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} position={position}/>
       
    
        <div className="flex flex-col w-[98vw] items-center max-h-max max-lg:w-[98vw] gap-7 my-20">{children}</div>
        {/* FOOTER */}
        <div className="w-[98vw] max-h-[100vh] ">
          
              <div className="w-[100%] max-h-[350px] bg-lightGrey flex justify-around flex-wrap p-2 max-md:justify-center">
                    <p className="text-3xl font-bold text-grey w-[300px] uppercase max-md:w-[90%] font-julee ">For better experience download the <span className="text-mainColor">App </span> now</p>
                    <div className="flex gap-5 py-3 ">
                      <button className=" bg-black text-white rounded-md flex  items-center justify-center gap-2 border border-Lightgrey p-2">
                             <IoLogoGooglePlaystore className="text-2xl"/>
                              <span className="text-xl font-medium flex flex-col"><span className="text-xs">GET IT ON</span>Google Play</span></button>
                      <button className=" bg-black text-white rounded-md flex  items-center justify-center gap-2 p-2">
                              <RiAppleFill className="text-2xl"/>
                             <span className="text-xl font-medium  flex flex-col"><span className="text-xs ">DOWNLOAD ON THE </span> App Store</span></button>
                    </div>
              </div>
              <footer className=" w-[100%] max-h-[1000vh] border-t-2 shadow-lg bg-black flex justify-center items-center">
                      <div className="w-[80%] max-h-[100%] text-white flex flex-wrap gap-10 justify-center my-10 max-sm:text-xs  max-sm:flex-auto">
                          
                            <ul  className="flex flex-col gap-4 justify-start w-[150px]">
                              <p className="flex gap-2 items-center ">
                                  <img src="https://i.pinimg.com/236x/86/fa/02/86fa02f165fd0db848d2d13e5e484758.jpg" alt="Logo" className="w-[50px] h-[50px]"/>
                                  <h1 className="text-xl font-Acme">FOOD CORER</h1>
                              </p>
                              <p>
                                2024 Bundl TechnologiesPvt.Ltd
                              </p>
                            </ul>

                            <ul  className="flex flex-col gap-4 justifi-start w-[150px]">
                            
                                    <h1 className="text-2xl font-Acme">Company</h1>
                              
                              <li> About</li>
                              <li>Career</li>
                              <li>Team</li>
                              <li></li>
                            </ul>
                           
                                  <ul  className="flex flex-col gap-4  w-[150px] justify-start">
                                    <p className="flex gap-2 items-center ">
                                          <h1 className="text-2xl font-Acme">Contact Us</h1>
                                    </p>
                                    <li> Help & Support</li>
                                    <li>Partner wth us</li>
                                    <li>Ride with us</li>
                                    <li></li>
                                  </ul>

                                  <ul  className="flex flex-col gap-4 justify-start w-[150px]">
                                    <p className="flex gap-2 ">
                                          <h1 className="text-2xl font-Acme">Legal</h1>
                                    </p>
                                    <li> Terms & Conditions</li>
                                    <li>Cooie policy</li>
                                    <li>Privacy</li>
                                    <li>Investor Relations</li>
                                  </ul>
                                 

                           
                            <ul  className="flex flex-col gap-4 justify-start w-[150px]">
                                    <p className="flex gap-2 ">
                                          <h1 className="text-2xl font-Acme">We Delier To:</h1>
                                    </p>
                                    <li>Delhi</li>
                                    <li>Mumbai</li>
                                    <li>Kolkata</li>
                                    <li>Chennai</li>
                                    <li>Banglore</li>
                                  </ul>

                            
                               
                      </div>
                   
                          
              </footer>
              <div className="w-[98vw] h-[40px] flex items-center justify-center bg-black text-white border-t border-white font-ubuntu text-sm">
                        <a href="" className="flex text-xs items-center  justify-center"> <FaCopyright className="text-lg"/> CopyRights Reserved <span className="text-greenColor">Food Corner</span></a>
                     </div>

        </div>
                
        
    </div>
      
  )
}

export default HomePageLayout
