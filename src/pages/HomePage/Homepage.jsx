import HomePageLayout from "../../Components/HomePageLayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard";

import { Link } from "react-router-dom";
// import { CounterProvider } from "../../Context/Context";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

import Loader from "../../Components/Loader";
import AllFilters from "../../Components/AllFilters";
import { UseMyContext } from "../../Context/MyContext";
import CartListedFood from "../Cart/CartFoodList";
import NoFoodOnFilter from "../../Components/NoFoodOnFilter";
import axios from "axios";
import Toast from "../../Components/Toast";

function Homepage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 364, min: 0 },
      items: 1,
    },
  };

  const food_list = [
    {
      name: "Biryani",
      img: "images/biryani.jpg",
      path: "/biryani",
    },
    {
      name: "Pizza",
      img: "images/pizza.jpg",
      path: "/pizza",
    },
    {
      name: "burger",
      img: "images/burger.jpg",
      path: "/burger",
    },
    {
      name: "Parathas",
      img: "images/parathas.jpg",
      path: "/parathas",
    },
    {
      name: "Momos",
      img: "images/momos.jpg",
      path: "/momos",
    },
    {
      name: "Shakes",
      img: "images/shakes.jpg",
      path: "/shakes",
    },
    {
      name: "Noodles",
      img: "images/noodles.jpg",
      path: "/noodles",
    },
    {
      name: "Coffee",
      img: "images/coffee.jpg",
      path: "/coffee",
    },
  ];

  //Gettting needed value from useMyContext
  const {
    filtertype,
    AddFilter,
    setAddFilter,
    CartFoodList,
    setCartFoodList,
    isHovering,
    setIsHovering,
    FoodCount,
    setFoodCount,
    setAnimate,
    setAlreadyInCart,
    greentoast,
    setgreenToast,
    redtoast,
    setredToast,
    toastfood,
    settoastfood
     } = UseMyContext();

  //Getting CartListfOOD Component on Hover on Cart option
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // loader
  const [loader, setloader] = useState(true);

  //fooditems count in cart
  const [FoodData, setFoodData] = useState([]);
  const AddFood = () => {
    setFoodCount(FoodCount + 1);
  };

  //toast added when food is added to cart
  const Addtoast1 = (foodName) => {
    settoastfood(foodName);
    setgreenToast(true);
    setTimeout(() => {
      setgreenToast(false);
    }, 3500);

    //   <div className="text-xl flex items-center justify-between">
    //     {FoodName} added
    //     <Link to="/cart" className="text-sm">
    //     <button className="border rounded-sm p-1 opacity-85 hover:opacity-100"> View Cart</button>
    //     </Link>
    //   </div>,
    //   {
    //     style: {
    //       fontSize: "20px",
    //       fontFamily: "Acme",
    //     },
    //   }
    // );
  };

  ////toast added when food is already added to cart
  const Addtoast2 = (foodName) => {
    settoastfood(foodName);
    setredToast(true);
    setTimeout(() => {
      setredToast(false);
    }, 3500);
  };

  // CartFoodList to be added
  const AddToCart = (event) => {
    const foodId = event.target.id;
    const foodItems = FoodData.find((item) => item.id == foodId);
    if (CartFoodList.some((item) => item.id == foodItems.id)) {
      setAlreadyInCart((prev) => [...prev, foodItems.id]);
      Addtoast2(foodItems.name);
    } else {
      setCartFoodList((prevCart) => [...prevCart, foodItems]);
      // localStorage.setItem("cartfood",JSON.stringify(CartFoodList))
      Addtoast1(foodItems.name);
      AddFood();
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  };

  //data fetchinf function
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data; // Access the data from the response
      setloader(false);
      //  console.log(data); // Log the fetched data to the console (or use it in your application)
      setFoodData(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors appropriately
    }
  };

  useEffect(() => {
    fetchData("https://foodbe-8h5f.onrender.com/fooddata");
  }, []);

  // useEffect(() => {
  //   fetchData(" http://localhost:9000/fooddata");
  // }, []);

  //search food function
  const [searchFood, setsearchfood] = useState([]);

  const SearchFoodFun = (e) => {
    const Searchfood = e.target.value;
    //console.log(FoodData);
    if (FoodData.length > 0) {
      const list_Searchfood = FoodData.filter((food) =>
        food.name.toLowerCase().includes(Searchfood.toLowerCase())
      );
      console.log(list_Searchfood);
      setsearchfood(list_Searchfood);
    }
  };

  //change navbar into filters
  {
    window.addEventListener("scroll", function () {
      // console.log(window.scrollY)

      if (this.window.scrollY > 450) {
        setAddFilter(true);
      } else {
        setAddFilter(false);
      }
    });
  }

  return (
    <HomePageLayout
      AddFilter={AddFilter}
      FoodCount={FoodCount}
      isHovering={isHovering}
      handleMouseOut={handleMouseOut}
      handleMouseOver={handleMouseOver}
      SearchFoodFun={SearchFoodFun}
    >
      {greentoast && <Toast foodName={toastfood} />}
      {redtoast && <Toast addAgain foodName={toastfood} />}
      {loader ? (
        <Loader />
      ) : (
        <>
          {AddFilter ? (
            <AllFilters
              SearchFoodFun={SearchFoodFun}
              filtertype={filtertype}
              isNavFilter
            />
          ) : (
            ""
          )}
          <div
            className="w-[100vw] max-h-[6000vh] flex justify-center "
            onMouseOut={handleMouseOut}
          >
            <div
              className=" fixed right-10 top-14 z-50 shadow-xl border-t-4 border-mainColor"
              onMouseOver={handleMouseOver}
            >
              {isHovering &&
                (!CartFoodList.length == 0 ? (
                  <CartListedFood />
                ) : (
                  <div className="w-[300px] max-h-[350px] bg-white gap-2 flex flex-col items-center justify-center  font-mono">
                    <p className="font-bold text-4xl">EMPTY CART</p>
                    <p className="text-sm font-sans">
                      ORDER SOMETHING DELECIOUS
                    </p>
                    <img
                      src="images/CART_IMG-removebg-preview.png"
                      alt=""
                      className="w-[150px] h-[100px]"
                    />
                  </div>
                ))}
            </div>

            <div className="w-[75%] h-[100%]  max-lg:w-[100%] ">
              {/* upper part*/}
              <div className="flex flex-col gap-5 w-[100%] max-h-[500px] items-center p-1 border-b-2 border-gray-300 ">
                <div className="h-[35px] w-[100%] flex items-center justify-between ">
                  <p className="text-3xl font-bold font-julee text-grey mt-2">
                    What is on your mind ?
                  </p>
                </div>
                {/* List of food server in top of home page below "What is on your mind?" */}
                <div className=" flex flex-col w-[100%] ">
                  <Carousel
                    className="z-5 "
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    centerMode={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {food_list.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`w-[200px] h-[180px]  flex flex-col gap-2 items-center justify-center cursor-pointer  `}
                      >
                        <div className=" w-[130px] h-[130px] rounded-full  overflow-hidden max-sm:scale-75">
                          <img
                            src={`${item.img}`}
                            alt="img"
                            className=" w-[130px] h-[130px]  hover:scale-105 rounded-full duration-300 "
                          />
                        </div>

                        <p className="text-2xl text-grey  font-Acme">
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </Carousel>
                </div>
                {/* filters */}
                <div className="flex flex-col gap-5 w-[100%] max-h-[50vh] p-2 ">
                  <div>
                    <p className="text-4xl font-bold text-grey font-julee">
                      Our food Menu...
                    </p>
                  </div>
                  <div className=" w-[100%] flex">
                    <AllFilters filtertype={filtertype} />
                  </div>
                </div>
              </div>

              {/*SEARCH FOOD LOGIC */}

              {searchFood.length > 0 ? (
               
               <div className="flex flex-row  justify-center flex-wrap gap-10 w-[100%] max-h[200vh] py-4 max-sm:gap-2 ">
                  {searchFood.map((item) => (
                    <FoodCard
                      AddToCart={AddToCart}
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      text={item.text}
                      img={item.image}
                      price={item.price}
                      ratings={item.ratings}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-row  justify-center flex-wrap gap-10 w-[100%] max-h[200vh] py-4 max-sm:gap-2">
                  {FoodData ? (
                    FoodData.filter((item) =>
                      item.type.toLowerCase().includes(filtertype.toLowerCase())
                    ).map((item) => (
                      <FoodCard
                        AddToCart={AddToCart}
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        text={item.text}
                        img={item.image}
                        price={item.price}
                        ratings={item.ratings}
                      />
                    ))
                  ) : (
                    <div className="flex  justify-center w-[100%] h-[400px]">
                      <NoFoodOnFilter />
                    </div>
                  )}
                </div>
              )}
              {/* FOOD DISPLAY DIV
              <div className="flex flex-row justify-center flex-wrap gap-10 w-[100%] max-h[200vh] py-2 max-sm:gap-2 ">
                {
                  FoodData && FoodData.length > 0?
                  FoodData.filter((item) =>
                    item.type.includes(filtertype.toLowerCase())
                  ).map((item) => (
                    <FoodCard
                      AddToCart={AddToCart}
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      text={item.text}
                      img={item.image}
                      price={item.price}
                      ratings={item.ratings}
                    />
                  ))
                  :
                  <div className="flex items-start justify-center w-[100%] h-[400px]  bg-red-900"><NoFoodOnFilter/></div>
                }
              </div> */}
            </div>
          </div>
        </>
      )}

     
    </HomePageLayout>
  );
}

export default Homepage;
