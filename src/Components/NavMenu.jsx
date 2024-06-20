

import { MdOutlineBusinessCenter } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";


import Badge from '@mui/material/Badge';
import { UseMyContext } from "../Context/MyContext";



function NavMenu({singinClick,CutMenu,FoodCount}) {
      // getting NavMenu
      const { DisplayMenu }= UseMyContext()

      //getting search bar
      const {GetSearchbar}=UseMyContext()
     
 
    const nav_List=[
        { 
          path:"/about-us",
          name:'Corporate',
          icon:<MdOutlineBusinessCenter/>
        },
        {
          path:"/search",
          name:'Search',
          icon:<CiSearch/>
        },
        {
          path:"/offers",
          name:'Offers',
          icon:<BiSolidOffer/>
        },
        {
          path:"/help",
          name:'Help',
          icon:<IoHelpBuoyOutline/>
        },
        {
          path:"/signin",
          name:'SignIn',
          icon:<TbUser/>
        },
        {
          path:"/cart",
          name:'Cart',
          icon:<BsCart2/>
        }
      ]

    
      
  return (

    <>
       
     <div className={`w-[100vw] ${ DisplayMenu ? "h-[70vh] p-5":"h-[0vh]"} flex flex-col items-center gap-10 z-50 fixed bg-white inset-0transition duration-500 ease-in-out   shadow-lg border-b-2 overflow-hidden `}>
        
          <div className={`w-[100%] cursor-pointer text-4xl text-mainColor items-end`}><RxCross2 onClick={CutMenu}/></div>
          {
              nav_List.map((menu,index)=>(
              <div key={index} className="hover:text-mainColor w-[100px]" >
                { 
                  menu.name!=="Cart"

                  ?   
                  
                  menu.name ==="SignIn"
                        ?  <button onClick ={function(){CutMenu();singinClick()}} className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"><span className="text-2xl">{menu.icon}</span>{menu.name}</button>
                       
                        : 
                         <>
                        {
                          menu.name==="Search" 
                          ?  (<button
                                   onClick={function(){CutMenu() ; GetSearchbar()}}
                                   className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
                              >
                              <span className="text-2xl">{menu.icon}</span>
                              {menu.name}
                             </button>)
                             :(
                              <Link
                              to={`${menu.path}`}
                              target="_blank"
                              className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
                            >
                              <span className="text-2xl">{menu.icon}</span>
                              {menu.name}
                            </Link>
                               
                             )
                        }
                        
                        </>
                  
                  :   
                    <div>
                          <Badge badgeContent={FoodCount|| "0"} color="success" >
                                    <Link to={`${menu.path}`} className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"><span className="text-2xl">{menu.icon}</span>{menu.name}</Link>
                          </Badge>
                    </div>
                  
            
                }    
              </div>
            

          ))}
          
        </div>
  
    </>
  )
}

export default NavMenu
