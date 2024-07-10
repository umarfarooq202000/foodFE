import { ErrorMessage, Field, Form, Formik } from "formik";
import { RxCross2 } from "react-icons/rx";
import useDisclosure from "../../hooks/useDisclosure";
import { UseMyContext } from "../../Context/MyContext";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  // Ensure the CSS is included

function SignUp({ onClose }) {
  const { Isreferral, referralCode } = useDisclosure();
  const { login, setLoginNumber } = UseMyContext();
  const contactSchemaValidation = Yup.object().shape({
    phone_no: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    referral_code: Yup.string()
      .matches(
        /^[a-zA-Z0-9]{6}$/,
        "Referral code must be 6 alphanumeric characters"
      )
      .notRequired(),
  });

  const handleSubmit = async (values,{resetForm}) => {
    setTimeout(() => {
      onClose();
    }, 3000);
    setLoginNumber(values.phone_no);
    try {
      //    const response = await axios.post('http://localhost:9000/signup', values, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      const response = await axios.post(
        "https://foodbe-8h5f.onrender.com/signup",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
   
      localStorage.setItem("SignupValues", JSON.stringify(values));
      toast(
        <div className="text-xl flex items-center justify-between">
          {response.data.message || "User registered successfully"}
        </div>
      );
    } catch (error) {
      toast(
        <div className="text-xl flex items-center justify-between">
          {"SignUp Unsuccessfull"}
        </div>
      );
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
    resetForm();
  };
  return (
    <div className=" w-[40vw] flex flex-col gap-4 max-sm:w-[350px] p-5">
      <div className="text-3xl cursor-pointer" onClick={onClose}>
        <RxCross2 />
      </div>
      <div className=" flex items-center justify-between">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl">Sign Up</h1>
          <p className="text-mainColor font-medium text-xs">
            <span className="text-black">or</span>{" "}
            <button onClick={login}>login to your account</button>
          </p>
        </div>
        <div className="w-[100px] h-[100px] bg-contain">
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
            name: "",
            email: "",
            referral_code: "",
          }}
          onSubmit={handleSubmit}
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
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="w-[100%] h-[40px] outline-none border p-2"
            />
            <div className="text-red-600 text-sm">
              <ErrorMessage name="name" />
            </div>

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-[100%] h-[40px] outline-none border p-2"
            />
            <div className="text-red-600 text-sm">
              <ErrorMessage name="email" />
            </div>
            {Isreferral ? (
              <div>
                <Field
                  type="text"
                  name="referral_code"
                  placeholder="referral code"
                  className="w-[100%] h-[40px] outline-none border p-2"
                />
                <div className="text-red-600 text-sm">
                  <ErrorMessage name="referral_code" />
                </div>
              </div>
            ) : (
              <p
                onClick={referralCode}
                className="text-blue-500 cursor-pointer"
              >
                I have referral code?
              </p>
            )}

            <button
              className=" w-[100%] h-[40px] bg-mainColor text-white font-medium text-lg"
              type="submit"
            >
              Create An Account
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
      {/* Displaying toast */}
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

export default SignUp;
