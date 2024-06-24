
//icons from react-icons
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TbUser } from "react-icons/tb";

////////////////***********///////////// 
import useDisclosure from "../../hooks/useDisclosure";
import SideDrawer from "../../Components/SideDrawer";
import { styled } from '@mui/system';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel,  } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import PartnerOnboarding from "./Accordians/PartnerOnboarding";
import Label from "./Accordians/Label";
import FAQs from "./Accordians/FAQs";
import { Link } from "react-router-dom";


export default function Help() {

const grey = {
  100: '#E5EAF2',
};

// whole tabs
const Tabs = styled(BaseTabs)`
  width:100%;
  height:100%;
  background-color: white;  
  display: flex;
  padding:40px;
  box-shadow:5px 5px 5px 5px black;
`;


const Tab = styled(BaseTab)`
  width:100%;
  height:60px;
  &:hover {
    font-weight:500;
  }

  &:focus {
     color: black;
     background-color: #fff;
     font-weight:500;
  }

  &.${buttonClasses.focusVisible} {
    background-color: #fff;
    color: ${grey[100]};
  }

  &.${tabClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: black;
  }
`;

//display part
const TabPanel = styled(BaseTabPanel)`
  width: 75%;
  height:500px
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  background-color:white;
  padding:20px
`;



// tabs
const TabsList = styled(BaseTabsList)(
  () => `
  width:25%;
  background-color: ${grey[100]};
  padding-top:20px;
  padding-left:20px;
  font-family:"ubuntu";
  font-weight:400;
  

  `,
)

const { onOpen, onClose, isOpen, position, singinClick} = useDisclosure();


  return (
    <>
    
      <div className="w-[100vw] max-h-[200vh] bg-colorhelp flex flex-col  items-center">
           {/* NAVBAR */}
      <div
        className={`flex  items-center justify-around  w-[100vw] h-[80px] border-b-2 shadow-lg fixed z-50 bg-white  `}
        >
        <div className="w-[300px] h-[80px]  flex items-center justify-center  gap-4">
          <img src="https://i.pinimg.com/236x/86/fa/02/86fa02f165fd0db848d2d13e5e484758.jpg" alt="Logo" className="w-[30%] h-[100%]" />
          <p className=" text-2xl font-bold">HELP</p>
        </div>
        <div className=" w-[300px] h-[40px]   flex gap-10 ">
          <Link
            to="/help"
            className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
          >
            <span className="text-2xl">
              <MdOutlineBusinessCenter />
            </span>
            About Us
          </Link>
          <button
            onClick={singinClick}
            className="font-medium flex items-center gap-2 text-grey hover:text-mainColor"
          >
            <span className="text-2xl">
              <TbUser />
            </span>
            SignIn
          </button>
        </div>
        <SideDrawer
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          position={position}
        />
      </div>
            <div className="w-[80%] max-h-[100%] max-sm:w-[100%] flex flex-col justify-center items-center mt-24">
                    <div className="w-[90%] h-[200px] text-white flex flex-col justify-center gap-3">
                       <div>
                       <p className="text-4xl font-semibold">Help & Support</p>
                       <p className="text-md">Let us take a step ahead and help you better</p>
                       </div>
                       <div className="w-[100%] justify-start">
                       <Link to="/" className="border-2  bg-mainColor text-white p-2 rounded-md hover:rounded-none duration-200">Back to homePage</Link>

                       </div>
                    </div>
                    <div className="w-[100%] max-h-[100vh] bg-white overflow-auto">
                        <Tabs defaultValue={0} orientation="vertical">
                            <TabsList>
                              <Tab>Partner Onboarding</Tab>
                              <Tab>Legal</Tab>
                              <Tab>FAQs</Tab>
                            </TabsList>
                            <TabPanel value={0}><PartnerOnboarding/></TabPanel>
                            <TabPanel value={1}><Label/></TabPanel>
                            <TabPanel value={2}><FAQs/></TabPanel>
                          </Tabs>

                    </div>

            </div>
              

      </div>
      </>
        
  )
}
