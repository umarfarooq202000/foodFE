import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";
import Filter from "./Filter";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Model({ modalIsOpen, closeModal, filter_on_food,payment }) {
  const customStyles_Model = {
    content: {
      width: "50%",
      maxheight: "450px",
      minWidth: "350px",
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding: "10px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
    },
  };
  const customStyles_paymentodel = {
    content: {
      width: "50%",
      height: "400px",
      minWidth: "350px",
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "5px",
      padding: "10px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  };

  return (
    <div>
     { 
       payment ?
            <Modal payment
              isOpen={modalIsOpen}
              style={customStyles_paymentodel}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              >
              <div className="w-[100%] h-[100%] flex flex-col  border-b-borderColor ">
              <FaArrowLeft  onClick={closeModal} className="text-2xl cursor-pointer text-mainColor" />
                    <div className="w-[100%] h-[250px] flex flex-col justify-center items-center">
                      <img src="images/QRcode.jpg" alt="QRCode" className="w-[180px] h-[180px] p-2 border" />
                      <p className="font-bold font-mono my-2">scan for Payment</p>
                    </div>
                
                          <Link to="/order-confirm" className="absolute bottom-0 right-0 bg-mainColor text-white rounded-md p-2 font-mono">press to Confirm order</Link>
                          
                    <Link to="/">
                          <img
                          src="https://i.pinimg.com/236x/86/fa/02/86fa02f165fd0db848d2d13e5e484758.jpg"
                          alt="Logo"
                          className="w-[50px] h-[50px] absolute bottom-0 hover:scale-95 duration-200"
                       />
                    </Link>
                   

              </div>
            </Modal>
         :
            <Modal
              isOpen={modalIsOpen}
              style={customStyles_Model}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <div className="w-[100%] h-[50px] flex items-center justify-between border-b-2 border-b-borderColor ">
                <p className="text-3xl text-grey font-bold">Filter</p>
                <RxCross2 onClick={closeModal} className="text-3xl cursor-pointer" />
              </div>
              <div className="flex overflow-hidden">
                <Filter filter_on_food={filter_on_food} />
              </div>
              <div className="w-[100%] h-[50px] border-t-2 border-borderColor flex items-center justify-end p-2  ">
               
                <button
                  onClick={closeModal}
                  className=" bg-mainColor p-2 px-5 text-white font-semibold text-lg rounded-xl"
                >
                  Apply
                </button>
              </div>
            </Modal>
            
            }
    </div>
  );
}

export default Model;
