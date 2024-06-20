import { RxCross2 } from "react-icons/rx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { UseMyContext } from "../../Context/MyContext";
import { ToastContainer, toast } from "react-toastify";

export default function SignIn({ onClose }) {
  //function to do trasitions to singUp form
  const { SingUp } = UseMyContext();

  const contactSchemaValidation = Yup.object().shape({
    phone_no: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
  });

  //toast added when food is added to cart
  const Addtoast1 = () => {

    toast.warning(
      <div className="text-xl flex items-center justify-between">
      {"User Authorization is not suported yet"}
      </div>,
      {
        style: {
          fontFamily: "ubuntu",
          color:"red"
        },
      }
     
    );
  };

  return (
    <div className="w-[40vw] flex flex-col gap-4 max-sm:w-[350px] p-5">
      <div className="text-3xl cursor-pointer" onClick={onClose}>
        <RxCross2 />
      </div>
      <div className=" flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Login</h1>
          <p className="text-mainColor font-medium text-xs">
            <span className="text-black">or</span>{" "}
            <button onClick={SingUp}>create new account</button>
          </p>
        </div>
        <div className="w-[150px] h-[150px] bg-contain">
          <img
            src="https://i.pinimg.com/236x/86/fa/02/86fa02f165fd0db848d2d13e5e484758.jpg"
            alt=""
            className=""
          />
        </div>
      </div>

      <div>
        <Formik
          initialValues={{
            phone_no: "",
          }}
          onSubmit={Addtoast1}
          validationSchema={contactSchemaValidation}
        >
          <Form className="flex flex-col gap-2">
            <Field
              type="text"
              name="phone_no"
              placeholder="Mobile Number"
              className="  w-[100%] h-[40px] outline-none border p-2"
            />
            <div className="text-red-600 text-sm">
              <ErrorMessage name="phone_no" />
            </div>

            <button
              className=" w-[100%] h-[40px] bg-mainColor text-white font-medium text-lg"
              type="submit"
            >
              LOGIN
            </button>
            <p className="text-xs">
              By clicking on Login, I accept the{" "}
              <Link
                to="/termsCondition"
                className="font-medium cursor-pointer text-black"
              >
                {" "}
                Terms & Conditions & Privacy Policy
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>
  );
}
