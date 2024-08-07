import HomePageLayout from "../../Components/HomePageLayout";
import "react-multi-carousel/lib/styles.css";
import {  useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard";
import { Link } from "react-router-dom";
import AllFilters from "../../Components/AllFilters";
import { UseMyContext } from "../../Context/MyContext";
import CartListedFood from "../Cart/CartFoodList";
import NoFoodOnFilter from "../../Components/NoFoodOnFilter";
import axios from "axios";
import Toast from "../../Components/Toast";
import styled from "styled-components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "../../Components/Loader";
import API_URLS from "../../APIs/Api";



function Homepage() {

  const skeletonArr = [1,2,3,4,5,6,7,8]; // example array

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

  const [CourselIndex, setCourserIndex] = useState(0);
  const nextBtn = () => {
    CourselIndex > 0 ? setCourserIndex(CourselIndex + 100) : setCourserIndex(0);
  };
  const prevBtn = () => {
    CourselIndex > -800
      ? setCourserIndex(CourselIndex - 100)
      : setCourserIndex(0);
  };

  //Gettting needed value from useMyContext
  const {
    filtertype,
    handleFilterChange,
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
    settoastfood,
    searchFood,
    setsearchFood,
  } = UseMyContext();

  //Getting CartListfOOD Component on Hover on Cart option
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [loader, setloader] = useState(true);

  //fooditems count in cart
  const [FoodData, setFoodData] = useState([]);
  const [Currentpage, setCurrentPage] = useState(1);
  // const [dataloading, setdataLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  
  const itemsOnPage=10
  
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
  //toast added when food is already added to cart
  const Addtoast2 = (foodName) => {
    settoastfood(foodName);
    setredToast(true);
    setTimeout(() => {
      setredToast(false);
    }, 3500);
  };
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


  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URLS.FETCH_FOOD_DATA}?page=1&limit=10`);
      const data = response.data.results;
      setFoodData(data);
      setHasMore(response.data.next ? true : false);
      setloader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  const fetchMoreData = async () => {
    try {
      const nextPage = Currentpage + 1;
      const response = await axios.get(`${API_URLS.FETCH_FOOD_DATA}?page=${nextPage}&limit=${itemsOnPage}`);
      const data = response.data.results;
      setFoodData((prevData) => [...prevData, ...data]);
      setCurrentPage(nextPage);
      setHasMore(response.data.next ? true : false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const SearchFoodFun = (e) => {
    const food_search = e.target.value;
    handleFilterChange("relevant");
    if (FoodData.length > 0) {
      const list_Searchfood = FoodData.filter((food) =>
        food.name.toLowerCase().includes(food_search.toLowerCase())
      );
      setsearchFood(list_Searchfood);
    }
  };

  //change navbar into filters
  {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 350) {
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
      {/* <SkeletonLoader/> */}
      {greentoast && <Toast foodName={toastfood} />}
      {redtoast && <Toast addAgain foodName={toastfood} />}

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
        className="w-[98vw] max-h-[6000vh] flex justify-center "
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
                <p className="text-sm font-sans">ORDER SOMETHING DELECIOUS</p>
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
          <div className="flex flex-col gap-4 w-[100%] max-h-[500px] items-center p-1 border-b-2 border-gray-300 ">
            <div className="h-[35px] w-[100%] flex items-center justify-between ">
              <p className="text-3xl font-medium font-ubuntu  text-grey mt-2">
                {loader ? (
                  <Skeleton height={40} width={350} borderRadius={30} />
                ) : (
                  " What is on your mind ?"
                )}
              </p>
            </div>
            {/* List of food server in top of home page below "What is on your mind?" */}
            <div className=" w-[100%] flex gap-2 justify-end text-3xl text-gray-400 px-3 duration-200">
              {loader ? (
                <Skeleton height={40} width={40} borderRadius={40} />
              ) : (
                <p
                  onClick={nextBtn}
                  className=" cursor-pointer hover:text-gray-500"
                >
                  <FaRegArrowAltCircleLeft />
                </p>
              )}
              {loader ? (
                <Skeleton height={40} width={40} borderRadius={40} />
              ) : (
                <p
                  onClick={prevBtn}
                  className=" cursor-pointer hover:text-gray-500"
                >
                  <FaRegArrowAltCircleRight />
                </p>
              )}
            </div>
            <div className=" homepagecoursel w-[100%]  bg-white  overflow-auto p-2">
              <CustomCoursel courselindex={CourselIndex}>
                {food_list.map((item, index) =>
                  loader ? (
                    <Skeleton
                      key={index}
                      height={130}
                      width={130}
                      borderRadius={130}
                    />
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`w-[200px] h-[180px]  flex flex-col  items-center justify-center cursor-pointer `}
                    >
                      <div className=" w-[130px] h-[130px] rounded-full  overflow-hidden ">
                        <img
                          src={`${item.img}`}
                          alt="img"
                          className=" w-[130px] h-[130px]  hover:scale-105 rounded-full duration-300 max-sm:scale-75 "
                        />
                      </div>

                      <p className="text-2xl text-grey  font-Acme max-sm:scale-75">
                        {item.name}
                      </p>
                    </Link>
                  )
                )}
              </CustomCoursel>
            </div>
            {/* filters */}
            <div className="flex flex-col gap-3 w-[100%] max-h-[50vh] p-2 ">
              <div>
                <p className="text-3xl font-medium text-grey font-ubuntu">
                  {loader ? (
                    <Skeleton height={40} width={350} borderRadius={20} />
                  ) : (
                    "  Our food Menu..."
                  )}
                </p>
              </div>
              <div className=" w-[100%] flex">
                {loader ? (
                  <div className="flex gap-2">
                    <Skeleton height={40} width={80} borderRadius={10} />
                    <Skeleton height={40} width={80} borderRadius={10} />
                    <Skeleton height={40} width={80} borderRadius={10} />
                    <Skeleton height={40} width={80} borderRadius={10} />
                  </div>
                ) : (
                  <AllFilters filtertype={filtertype} />
                )}
              </div>
            </div>
          </div>

          {/*SEARCH FOOD LOGIC */}
          {
         
            loader ? (
              <div className="flex flex-row  justify-center flex-wrap gap-10 w-[100%] max-h[200vh] py-4 max-sm:gap-2 ">

                  { skeletonArr.map((n)=>(
                      <div  key={n} className="flex flex-col gap-2">
                      <Skeleton height={200} width={200} borderRadius={20} />
                      <div className="w-[100%] flex gap-4">
                        <Skeleton height={20} width={90} borderRadius={20} />
                        <Skeleton height={20} width={90} borderRadius={20} />
                      </div>{" "}
                      <Skeleton height={20} width={200} borderRadius={20} />
                      <div className="w-[100%] flex gap-4">
                        <Skeleton height={20} width={90} borderRadius={20} />
                        <Skeleton height={20} width={90} borderRadius={20} />
                      </div>
                    </div>
                    ))
                  }
              </div>
            )
            :(
              searchFood.length > 0 ? (
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
              <InfiniteScroll
                    className="infinityScroll"
                    dataLength={FoodData.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<Loader infiniteloader/>}
                   >
                  <div className="flex flex-row  justify-center flex-wrap gap-10 w-[100%] max-h[200vh] py-4 max-sm:gap-2">
                    {FoodData ? (
                      FoodData.filter((item) =>
                        item.type.toLowerCase().includes(filtertype.toLowerCase())
                      ).map((item) =>
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
                      )
                    ) : (
                      <div className="flex  justify-center w-[100%] h-[400px]">
                        <NoFoodOnFilter />
                      </div>
                    )}
                  </div>
              </InfiniteScroll>
           ))
           }
        
        </div>
      </div>
    </HomePageLayout>
  );
}
const CustomCoursel = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  background-color: "red";
  transform: ${(props) => `translateX(${props.courselindex}px)`};
  transition: transform 0.3s ease;
  @media screen and (max-width: 468px) {
    gap: 4px;
  }
`;

export default Homepage;
