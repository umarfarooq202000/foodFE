import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import styled from "styled-components";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";


function AboutUs() {
  const TeamsMember = [
    {
      name: "Jacks",
      image:
        "https://i.pinimg.com/236x/ec/b6/0e/ecb60edf9eca0f131220eea74a9474f6.jpg",
      text: "Our web developer team excels in creating dynamic, responsive websites  ensuring seamless user experiences. We specialize in front-end and back-end development, utilizing the latest technologies for optimal performance and security.",
    },
    {
      name: "Marry ",
      image:
        "https://i.pinimg.com/236x/ec/b6/0e/ecb60edf9eca0f131220eea74a9474f6.jpg",
      text: "Our web developer team excels in creating dynamic, responsive websites, ensuring seamless user experiences. We specialize in front-end and back-end development, utilizing the latest technologies for optimal performance and security.",
    },
    {
      name: "Umar",
      image:
        "https://i.pinimg.com/236x/ec/b6/0e/ecb60edf9eca0f131220eea74a9474f6.jpg",
      text: "Our web developer team excels in creating dynamic, responsive websites, ensuring seamless user experiences. We specialize in front-end and back-end development, utilizing the latest technologies for optimal performance and security.",
    },
    {
      name: "Tim David",
      image:
        "https://i.pinimg.com/236x/ec/b6/0e/ecb60edf9eca0f131220eea74a9474f6.jpg",
      text: "Our web developer team excels in creating dynamic, responsive websites, ensuring seamless user experiences. We specialize in front-end and back-end development, utilizing the latest technologies for optimal performance and security.",
    },
    {
      name: "Amit",
      image:
        "https://i.pinimg.com/236x/ec/b6/0e/ecb60edf9eca0f131220eea74a9474f6.jpg",
      text: "Our web developer team excels in creating dynamic, responsive websites, ensuring seamless user experiences. We specialize in front-end and back-end development, utilizing the latest technologies for optimal performance and security.",
    },
  ];
  const [CourselIndex, setCourserIndex] = useState(0);
  const nextBtn = () => {
    CourselIndex < 0 ? setCourserIndex(CourselIndex + 200) : setCourserIndex(0);
  };
  const prevBtn = () => {
    CourselIndex > -800
      ? setCourserIndex(CourselIndex - 200)
      : setCourserIndex(-800);
  };

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
  return (
    <div className="w-[98vw] max-h-[500vh] bg-white flex flex-col items-center max-md:justify-center gap-10 font-mono max-lg:w-[100vw]">
       <header className="w-[100%] h-[80px] flex justify-around items-center  border-b-2 fixed top-0 bg-white">
       <img
            src="images/Yellow and White Minimalist Kitchen Logo123.png"
            alt="Logo"
            className="w-[150px] h-[60px]"
          />
             <h1 className="text-3xl font-bold ">
              About</h1>
      </header>
        <section className="w-[100%] max-h-[40vh] flex  justify-center items-center  mt-24 ">
          <div className="w-[40%] flex flex-col justify-center items-start  max-md:w-[90%]">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p>
              Our mission is to elevate the quality of life of the urban consumer
              by offering unparalleled convenience. Convenience is what makes us
              tick. It’s what makes us get out of bed and say, “Let’s do this.”
            </p>
          </div>
          <div className="w-[300px] h-[300px] max-md:hidden ">
            <img
              src="https://i.pinimg.com/564x/03/c8/c0/03c8c085c85f1dc5c7227b3ba2d142ca.jpg"
              alt="img"
              className="w-[100%] h-[100%] "
            />
          </div>
        </section>
        <section className="w-[100%] max-h-[40vh] flex justify-around items-center ">
          <div className="w-[30%] h-[300px] max-md:hidden ">
            <img
              src="https://i.pinimg.com/236x/36/e4/3f/36e43f67fc484d9b6fe13ef899e08b72.jpg"
              alt="img"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="w-[40%] h-[100%] flex flex-col gap-2 justify-center items-start max-md:w-[90%]">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p>
              Founded in [Year], [Your Food Website] started as a small blog
              sharing family recipes and has grown into a comprehensive platform
              where food enthusiasts from around the world can discover, share,
              and enjoy new and exciting dishes.
            </p>
          </div>
        </section>
        <section className="w-[100%] max-h-[90vh] flex flex-col items-center ">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <div className="w-[80vw] p-3 bg-slate-200 h-[100%] flex items-center  overflow-hidden">
             <div className="absolute w-[80vw] flex z-30 justify-between text-2xl ">
                  <button className=" bg-slate-300 p-2 rounded-full" onClick={nextBtn}><MdArrowBackIos/></button>
                  <button  className=" bg-slate-300 p-2 rounded-full" onClick={prevBtn}><MdArrowForwardIos/></button>
             </div>
              <TeamMembers courselindex={CourselIndex}>
                {TeamsMember.map((member) => (
                  <div
                    key={member.name}
                    className="w-[300px] h-[300px] bg-white border rounded-md p-2 flex flex-col gap-4 items-center hover:scale-95 duration-200"
                  >
                    <img
                      src={`${member.image}`}
                      alt=""
                      className="w-[120px] h-[120px] rounded-full border"
                    />
                    <p className="text-2xl font-medium">{member.name}</p>
                    <p className="text-sm font-mono text-grey">{member.text.slice(0, 108)}</p>
                  </div>
                  ))
                
                }
              </TeamMembers>
              
          </div>
         
        </section>
        <section className="w-[100%] max-h-[150vh] flex flex-col items-center ">
          <div className="w-[60%] max-h-[200px] flex flex-col font-mono justify-start p-2  max-lg:w-[100%]  ">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p>
              we love questions and feedback - and we are alwayshappy to help you.Here are somme ways to contact us.
            </p>
            
          </div>
          <div className="w-[50%] max-h-[170vh] flex  gap-2 justify-between  max-lg:w-[100%] max-md:flex-col  p-2 rounded-xl">
            {/* contact form */}

            <div className="w-[350px]  max-sm:w-[100%] bg-bg">
              <Formik>
                <Form className="w-[100%]  flex flex-col gap-3">
                  <div className="w-[100%] h-[100px] flex flex-col justify-center gap-2">
                    <h2 className="text-2xl font-medium font-ubuntu">
                      Send Us a message
                    </h2>
                    <p className="text-xs">send us message and we will respond within 24hrs</p>
                  </div>
                  <div className="flex  max-md:flex-col ">
                    <div className=" flex flex-col justify-center ">
                      <label className="text-md font-bold ">Full Name</label>
                      <Field
                        type="text"
                        name="name"
                        className="outline-none p-1 rounded-sm border w-[100%] "
                      />
                      <ErrorMessage name="name" />
                    </div>
                    <div className="flex flex-col justify-center ">
                      <label className="text-md font-bold ">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="outline-none p-1 rounded-sm border w-[100%] "
                      />
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className="flex  max-md:flex-col">
                    <div className="w-[100%] h-[100%] flex flex-col justify-center ">
                      <label className="text-md font-bold ">
                        Telephone Number
                      </label>
                      <Field
                        type="text"
                        name="telephone"
                        className="outline-none p-1 rounded-sm border w-[100%] "
                      />
                      <ErrorMessage name="telephone" />
                    </div>
                    <div className="w-[100%] h-[100%] flex flex-col justify-center ">
                      <label className="text-md font-bold ">Organisation</label>
                      <Field
                        type="email"
                        name="organisation"
                        className="outline-none p-1 rounded-sm border w-[100%] "
                      />
                      <ErrorMessage name="organisation" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center  ">
                    <label htmlFor="description" className="text-md font-bold ">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      style={{ width: "100%", height: "100px" }}
                      className="outline-none p-1 rounded-sm border w-[100%] "
                    />
                  </div>

                  <div className="w-[100%] flex justify-end">
                    <button className="border p-2 bg-mainColor text-white rounded-sm hover:scale-95 duration-100">
                      Send Message
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="w-[320px] max-h-[100%]  bg-bg border p-2 flex flex-col max-sm:w-[100%] rounded-2xl">
              <div className="w-[100%] h-[100px] flex items-center justify-center border-b">
                <h1 className="text-2xl font-medium font-ubuntu">
                  Contact Information
                </h1>
              </div>
              <div className="w-[100%] max-h-[400px] p-2 flex flex-col gap-3 items-start justify-center border-b">
                <p className="flex gap-2 items-center">
                  <span >
                    <FaLocationDot />
                  </span>
                  <span>12001,New Delhi,India</span>
                </p>
                <p className="flex gap-2 items-center">
                  <span >
                    <MdMail />
                  </span>
                  <span>company123@gmail.com</span>
                </p>
                <p className="flex gap-2 items-center">
                  <span>
                    <IoIosCall />
                  </span>
                  <span>+1-123-893-408</span>
                </p>
              </div>
              <div className="w-[100%] h-[60px]  flex  items-center gap-3 text-black">
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
            </div>
          </div>
        </section> 
    </div>
  );
}


const TeamMembers=styled.div`
   
  display: flex;
  gap: 40px;
  transform: ${(props) => `translateX(${props.courselindex}px)`};
  transition: transform 0.3s ease;
  @media screen and (max-width: 468px) {
    gap: 4px;
  }
`;

export default AboutUs;
