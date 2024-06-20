import { FaChevronDown } from "react-icons/fa";

import { MdOutlineBusinessCenter } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import NavMenu from "./NavMenu";
import { UseMyContext } from "../Context/MyContext";
import { Badge } from "@mui/material";

const nav_List = [
  {
    path: "/about-us",
    name: "Corporate",
    icon: <MdOutlineBusinessCenter />,
  },
  {
    path: "/search",
    name: "Search",
    icon: <CiSearch />,
  },
  {
    path: "/offers",
    name: "Offers",
    icon: <BiSolidOffer />,
  },
  {
    path: "/help",
    name: "Help",
    icon: <IoHelpBuoyOutline />,
  },
  {
    path: "/signin",
    name: "SignIn",
    icon: <TbUser />,
  },
  {
    path: "/cart",
    name: "Cart",
    icon: <BsCart2 />,
  },
];

function Navbar({
  singinClick,
  LocationClick,
  FoodCount,
  handleMouseOut,
  handleMouseOver,
}) {
  //search bar
  const { GetSearchbar, Animate } = UseMyContext();

  // getting menu
  const { setDisplayMenu } = UseMyContext();

  const GetMenu = () => {
    setDisplayMenu(true);
  };

  const CutMenu = () => {
    setDisplayMenu(false);
  };
 
  const{filtertype,handleFilterChange,setActiveFilter,}=UseMyContext()
  console.log(filtertype);
  //to get offer food items
  const handleClick=(e)=>{
    // console.log(e.target.innerText);
     let value=e.target.textContent
     if(value!==""){
        handleFilterChange(value)
     }
   setActiveFilter(value)
  }
  return (
    <>
      <div
        className={`flex items-center justify-center w-[100vw] h-[80px] bg-white shadow-md fixed z-50 gap-32`}
      >
        <div className="max-w-[200px] h-[60px]  flex  items-center gap-1">
          <img
            src="app\public\images\biryani.jpg.zip"
            alt="Logo"
            className="w-[40%] h-[100%]"
          />
          <h1 className=" text-greenColor  text-3xl font-julee font-bold  ">
            FC
          </h1>
          <input
            type="text"
            placeholder="location"
            className="h-[60%] w-[10vw] text-xl outline-none max-lg:hidden px-2"
          />
          <button className="text-mainColor" onClick={LocationClick}>
            <FaChevronDown />
          </button>
        </div>
        <div className="flex gap-8 max-lg:hidden">
          {nav_List.map((menu, index) => (
            <div key={index} className="hover:text-mainColor">
              {menu.name !== "Cart" ? (
                menu.name === "SignIn" ? (
                  <button
                    onClick={singinClick}
                    className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
                  >
                    <span className="text-2xl">{menu.icon}</span>
                    {menu.name}
                  </button>
                ) : (
                  <>
                    {menu.name === "Search" ? (
                      <button
                        onClick={GetSearchbar}
                        className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
                      >
                        <span className="text-2xl">{menu.icon}</span>
                        {menu.name}
                      </button>
                    ) : (
                      menu.name=== "Offers"
                      ? (
                        <button 
                          onClick={handleClick}
                          className="font-medium flex items-center gap-2 text-grey hover:text-mainColor">
                          <span className="text-2xl">{menu.icon}</span>
                          Offers
                        </button>
                       )
                     :( <Link
                        to={`${menu.path}`}
                        target="_blank"
                        className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
                      >
                        <span className="text-2xl">{menu.icon}</span>
                        {menu.name}
                      </Link>)
                      
                    )}
                  </>
                )
              ) : (
                <div>
                  <Link
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    to={`${menu.path}`}
                    className="font-medium flex items-center gap-2 text-grey hover:text-mainColor  "
                  >
                    <Badge badgeContent = {FoodCount || "0"} color="primary">
                    <span
                      className={`magictime ${
                        Animate ? "twisterInUp twisterInDown-custom" : ""
                      } flex justify-center items-center text-2xl `}
                    >
                      {menu.icon}
                     
                    </span>
                    </Badge>
                    {menu.name}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* {  NavMenu on less screen size} */}
        <div className="text-mainColor text-4xl hidden max-lg:block">
          <HiMenu className="cursor-pointer" onClick={GetMenu} />
        </div>
      </div>

      <NavMenu
        FoodCount={FoodCount}
        CutMenu={CutMenu}
        singinClick={singinClick}
      />
    </>
  );
}

export default Navbar;
