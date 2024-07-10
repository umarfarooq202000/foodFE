import { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
// import { makeStyles } from '@mui/styles';


import { LuIndianRupee } from "react-icons/lu";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { Link } from "react-router-dom";
import useDisclosure from "../../hooks/useDisclosure";
import Model from "../../Components/Model";
import { UseMyContext } from "../../Context/MyContext";
import Number from "./Checkouts_Steps/Number.jsx"
import Address from "./Checkouts_Steps/Address.jsx"

import OrdersDetailed from "./Checkouts_Steps/OrdersDetailed.jsx"



function PlaceOrder() {
  const { TotalPayment, SGST_, CGST_, deliveryCharge ,LoginNumber} = UseMyContext();

  const PlaceOrderSteps = [
    {
      label: "LOGIN",
      description: <Number LoginNumber={LoginNumber}/>
    },
    {
      label: "DELIVERY ADDRESS",
      description:<Address/>
    },
    {
      label: "ORDER SUMMARY",
      description: <OrdersDetailed/>,
    },
    {
      label: "PAYMENT OPTIONS",
      description: `Only UPIs is Acceptable for Online Transactions`,
    },
  ];

  //patment options
  const paymentOptions = ["payTm", "PhonePay", "Gpay", " (Cash On Delivery)"];
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(
    paymentOptions[0]
  );

  //for model opening &closing
  const {isOpen,onOpen,onClose}=useDisclosure()

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handlePaymentChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

  //   //tracing the live window width
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial width
  //   useEffect(() => {
  //    const handleResize = () => setWindowWidth(window.innerWidth);
  //    window.addEventListener('resize', handleResize);
  //     // Clean up the event listener on component unmount
  //    return () => window.removeEventListener('resize', handleResize);
  //  }, []);

  return (
    <>
      <div className="w-[98vw] max-h-[500vh]  bg-lightGrey  ">
        {/* NAVBAR */}
        <div className="w-[100%] h-[70px] border-b-2 flex justify-around items-center bg-white z-50 shadow-lg fixed">
          <div className="flex gap-2 items-center">
            <img
              src="https://i.pinimg.com/236x/86/fa/02/86fa02f165fd0db848d2d13e5e484758.jpg"
              alt="Logo"
              className="w-[60px] h-[60px]"
            />
            <h1 className=" text-greenColor  text-3xl font-julee font-bold  ">
              Food Corner
            </h1>
          </div>
          <div>
            <h1 className="text-mainColor font-bold font-ubuntu text-lg underline">
              CHECKOUT
            </h1>
          </div>
        </div>

        {/* LOWER SECTON */}
        <div className="w-[100%] max-h-[300vh] flex flex-col justify-center gap-1 absolute top-20  ">
          <Model payment modalIsOpen={isOpen} openModal={onOpen} closeModal={onClose}/>
          <div className="w-[100%] h-[50px] flex  items-center ">
            <Link
              to="/cart"
              className="max-w-[150px] bg-mainColor flex gap-2 items-center text-lg p-2 text-white font-medium border border-mainColor hover:scale-105 duration-300 m-2 rounded-sm shadow-lg"
            >
              <FaLongArrowAltLeft /> Back to Cart
            </Link>
          </div>
          {/* LOWER SECTON */}
          <div className="flex justify-center gap-5  max-lg:flex-col ">
            {/* LEFT SECTION OR GETTING INFO TO MAKE ORDER  */}
            <div className="w-[65%] max-h-[150vh] bg-white  flex  items-baseline  p-4 max-lg:w-[100%] border ">
              <Box sx={{ minWidth: 300 ,width:"100%"}}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {PlaceOrderSteps.map((step, index) => (
                    <Step key={step.label}>
                      <div
                        className={`w-[100%] max-h-[200px] text-xl rounded-sm `}
                      >
                        <StepLabel>
                          <div className="text-xl flex flex-col font-semibold font-ubuntu">
                            {step.label}
                            {/* <span className="text-sm text-grey font-light">
                              {step.description}
                            </span> */}
                          </div>
                        </StepLabel>
                      </div>
                      <div
                        className={`w-[100%] max-h-[600px] text-xs font-ubuntu `}
                      >
                        <StepContent>
                          {index === 3 ? (
                            <RadioGroup
                              value={selectedPaymentOption}
                              onChange={handlePaymentChange}
                            >
                              {paymentOptions.map((option) => (
                                <FormControlLabel
                                  onClick={onOpen}
                                  key={option}
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                />
                              ))}
                            </RadioGroup>
                          ) : (
                            <Typography>{step.description}</Typography>
                          )}
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button variant="contained" onClick={handleNext}>
                                {index === PlaceOrderSteps.length - 1
                                  ? "Finish"
                                  : "Next"}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </div>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === PlaceOrderSteps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </Paper>
                )}
              </Box>
            </div>

            {/* RIGHT SECTION OR DISPLAYING AMOUNT TO BE PAID */}
            {/* BILL DETAILS */}
            <div className="w-[25%] min-w-[250px] max-h-[250px] border  items-baseline p-3 gap-2  bg-white max-sm:w-[100%] ">
              <p className="w-[100%] text-3xl font-ubuntu font-bold text-grey">
                Bill details:
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-grey font-bold">Item total:</p>
                <p className="text-greenColor  flex items-baseline  text-lg font-semibold">
                  <LuIndianRupee className="text-sm" />
                  {TotalPayment}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-grey font-bold">
                  Delivery charges :{" "}
                </p>
                <p className="flex text-lg items-center text-greenColor font-bold">
                  {" "}
                  <LuIndianRupee className="text-sm" />
                  {deliveryCharge}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-grey font-bold">
                  CGST charges :{" "}
                  <span className="text-xs font-light">5 per cent</span>{" "}
                </p>
                <p className="flex text-lg items-center text-greenColor font-bold">
                  {" "}
                  <LuIndianRupee className="text-sm" />
                  {parseFloat(CGST_)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-grey font-bold">
                  SGST charges :{" "}
                  <span className="text-xs font-light">5 per cent</span>{" "}
                </p>
                <p className="flex text-lg items-center text-greenColor font-bold">
                  {" "}
                  <LuIndianRupee className="text-sm" />
                  {parseFloat(SGST_)}
                </p>
              </div>
              <div className="flex justify-between border-t-2 my-2 py-2">
                <p className="font-bold font-Acme text-grey text-2xl">
                  Total Bill :
                </p>
                <p className="text-greenColor text-2xl font-bold flex items-baseline">
                  {" "}
                  <LuIndianRupee className="text-lg" />
                  {TotalPayment + SGST_ + CGST_ + deliveryCharge}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION FOR BILL DETAILED */}
        <div className=" w-[100%] h-[70px] bg-mainColor border-t flex justify-around items-center z-40 fixed bottom-0 lg:hidden ">
          <div className="flex justify-between  my-2 py-2 items-center
          ">
            <p className="font-bold text-2xl text-white font-mono">
              Total Bill :
            </p>
            <p className="text-white text-4xl font-bold font-Acme flex items-baseline ">
              <LuIndianRupee className="text-2xl" />
              {TotalPayment + SGST_ + CGST_ + deliveryCharge}
            </p>
          </div>
          {/* <button className=" opacity-100 bg-mainColor flex gap-2 items-center text-lg p-2 px-4 text-white font-medium border border-mainColor hover:bg-white hover:text-mainColor m-2 rounded-md">Continue</button> */}
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
