//import icons from react -icons
import { RiAppleFill } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import useDisclosure from "../hooks/useDisclosure";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { UseMyContext } from "../Context/MyContext";

import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomePageLayout({
  children,
  AddFilter,
  FoodCount,
  isHovering,
  handleMouseOver,
  handleMouseOut,
  SearchFoodFun,
}) {
  const social_Media_contacts = [
    {
      name: "facebook",
      icon: <RiFacebookFill />,
    },
    {
      name: "instagram",
      icon: <BsInstagram />,
    },
    {
      name: "twitter",
      icon: <FaTwitter />,
    },
  ];

  const { onOpen, onClose, isOpen, position, singinClick, LocationClick } =
    useDisclosure();

  //searchbar
  const { SearchBar, CutSearchbar } = UseMyContext();

  return (
    <div className="flex flex-col w-[99vw] max-h-[200vh] ">
      {/* getting search bar */}
      {SearchBar && !AddFilter && (
        <div className=" flex justify-center w-[100vw] fixed top-20 z-50">
          <div className="flex text-lg min-w-[360px] w-[50vw] h-[60px] border-4 border-borderColor bg-white z-50 shadow-xl ">
            <input
              onChange={SearchFoodFun}
              type="text"
              placeholder="Search..."
              className="text-lg  min-w-[340px] w-[48vw] p-1 outline-none bg-transparent rounded-md "
            />
            <RxCross2
              className="cursor-pointer text-2xl text-mainColor font-bold "
              onClick={CutSearchbar}
            />
          </div>
        </div>
      )}

      {!AddFilter && (
        <Navbar
          isHovering={isHovering}
          handleMouseOut={handleMouseOut}
          handleMouseOver={handleMouseOver}
          FoodCount={FoodCount}
          onOpen={onOpen}
          singinClick={singinClick}
          LocationClick={LocationClick}
        />
      )}

      <SideDrawer
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        position={position}
      />

      <div className="flex flex-col w-[100vw] items-center max-h-max max-lg:w-[100vw] gap-7 my-20">
        {children}
      </div>
      {/* FOOTER */}
      <div className="w-[100vw] max-h-[100vh] ">
        <div className="w-[100%] max-h-[350px] bg-lightGrey flex justify-around flex-wrap p-2 max-md:justify-center">
          <p className="text-3xl font-bold text-grey w-[300px]  uppercase max-md:w-[90%] font-ubuntu max-sm:text-2xl">
            For better experience download the{" "}
            <span className="text-mainColor">App </span> now
          </p>
          <div className="h-[100px] flex gap-4 py-3 ">
            <button className=" bg-black text-white rounded-md flex  items-center justify-center gap-2 border border-Lightgrey p-2 hover:scale-95 duration-200 ">
              <IoLogoGooglePlaystore className="text-2xl" />
              <span className="text-xl font-medium flex flex-col">
                <span className="text-xs">GET IT ON</span>Google Play
              </span>
            </button>
            <button className=" bg-black text-white rounded-md flex  items-center justify-center gap-2 p-2  hover:scale-95 duration-200">
              <RiAppleFill className="text-2xl" />
              <span className="text-xl font-medium  flex flex-col">
                <span className="text-xs ">DOWNLOAD ON THE </span> App Store
              </span>
            </button>
          </div>
        </div>
        <footer className=" w-[100%] max-h-[1000vh] border-t-2 shadow-lg bg-black flex justify-center items-center">
          <div className="w-[80%] max-h-[100%] text-white flex flex-wrap gap-10 justify-center my-10 max-sm:text-xs  max-sm:flex-auto">
            <ul className="flex flex-col gap-4 justify-start w-[150px]">
              <p className="flex gap-2 items-center ">
                <img
                  src="https://i.pinimg.com/236x/86/fa/02/86fa02f165fd0db848d2d13e5e484758.jpg"
                  alt="Logo"
                  className="w-[50px] h-[50px]"
                />
                <h1 className="text-xl font-Acme">FOOD CORER</h1>
              </p>
              <p>2024 Bundl TechnologiesPvt.Ltd</p>

              <div className="w-[100%] h-[60px] bg-black  flex  items-center gap-3 text-white">
                {social_Media_contacts.map((item, index) => (
                  <Link
                    key={index}
                    className=" w-[30px] h-[30px] border rounded-full hover:bg-white hover:text-black hover:scale-125 duration-200 flex items-center justify-center gap-2"
                  >
                    {item.icon}
                    {/* <span className="text-xs">{item.name}</span> */}
                  </Link>
                ))}
              </div>
            </ul>

            <ul className="flex flex-col gap-4 justifi-start w-[150px]">
              <h1 className="text-2xl font-Acme">Company</h1>
              <li> About</li>
              <li>Career</li>
              <li>Team</li>
              <li></li>
            </ul>

            <ul className="flex flex-col gap-4  w-[150px] justify-start">
              <p className="flex gap-2 items-center ">
                <h1 className="text-2xl font-Acme">Contact Us</h1>
              </p>
              <li> Help & Support</li>
              <li>Partner wth us</li>
              <li>Ride with us</li>
            </ul>

            <ul className="flex flex-col gap-4 justify-start w-[150px]">
              <p className="flex gap-2 ">
                <h1 className="text-2xl font-Acme">Legal</h1>
              </p>
              <li> Terms & Conditions</li>
              <li>Cooie policy</li>
              <li>Privacy</li>
              <li>Investor Relations</li>
            </ul>

            <ul className="flex flex-col gap-4 justify-start w-[150px]">
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

        <div className="w-[100vw] h-[40px] flex items-center justify-center bg-black text-white border-t border-white font-ubuntu text-sm">
          <a href="" className="flex text-xs items-center  justify-center">
            {" "}
            <FaCopyright className="text-lg" /> CopyRights Reserved{" "}
            <span className="ml-1 text-mainColor"> Food Corner</span>
            <span className="ml-1">
              {" "}
              || Bulid by{" "}
              <span className="text-md text-yellow-500">Umar farooq</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePageLayout;
