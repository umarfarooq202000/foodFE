import useDisclosure from "../../hooks/useDisclosure";
import FoodCard from "../../Components/FoodCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { UseMyContext } from "../../Context/MyContext";
import AllFilters from "../../Components/AllFilters";
import Navbar from "../../Components/Navbar";
import Toast from "../../Components/Toast";
import SideDrawer from "../../Components/SideDrawer";
import Loader from "../../Components/Loader";

function Foods({ title }) {

  const [FilteredFoodData, setFilteredFoodData] = useState();

  //getting needen state and function from useMyContext
  const {
    CartFoodList,
    setCartFoodList,
    filtertype,
    AddFilter,
    setAddFilter,
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

  const food = title.toLowerCase();
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data; 
      setloader(false);
      setFilteredFoodData(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  };

  useEffect(()=>{
    fetchData(`https://foodbe-8h5f.onrender.com/${food}`)
  },[])

  
  // useEffect(()=>{
  //  fetchData(`https://localhost:9000/${food}`)
  //  },[])


  const SearchFoodFunInFilter = (e) => {
    const Searchfood = e.target.value;
    if (FilteredFoodData.length > 0) {
      const list_Searchfood = FilteredFoodData.filter((food) =>
        food.name.toLowerCase().includes(Searchfood.toLowerCase())
      );
      setFilteredFoodData(list_Searchfood);
    }
  };

  //change navbar into filters
  {
    window.addEventListener("scroll", function () {
      // console.log(window.scrollY)

      if (this.window.scrollY > 210) {
        setAddFilter(true);
      } else {
        setAddFilter(false);
      }
    });
  }

  const AddFood = () => {
    setFoodCount(FoodCount + 1);
  };

  ////toast added when food is added to cart
  const Addtoast1 = (foodName) => {
    settoastfood(foodName);
    setgreenToast(true);
    setTimeout(() => {
      setgreenToast(false);
    }, 3500);
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
    // console.log("foodId :",foodId);
    const foodItems = FilteredFoodData.find((item) => item.id == foodId);
    if (CartFoodList.some((item) => item.id == foodItems.id)) {
      setAlreadyInCart((prev) => [...prev, foodItems.id]);
      Addtoast2(foodItems.name);
    } else {
      setCartFoodList((prevCart) => [...prevCart, foodItems]);
      Addtoast1(foodItems.name);
      AddFood();
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  };
 
  const [loader, setloader] = useState(true);

  const {onClose,onOpen,isOpen,position,singinClick,LocationClick}=useDisclosure()

  return (
    <>
   { 
      loader
   ? <Loader/>
   
   : (<div className="flex flex-col items-center">
      {AddFilter ? (
        <AllFilters
          SearchFoodFun={SearchFoodFunInFilter}
          filtertype={filtertype}
          isNavFilter
        />
      ) : (
        <Navbar FoodCount={FoodCount} onOpen={onOpen}   singinClick={singinClick}  LocationClick={LocationClick}
/>
      )}
      <div className="w-[90vw] max-h[300vh] flex flex-col gap-4 item-center  ">
      <SideDrawer
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          position={position}
        />

        {greentoast && <Toast foodName={toastfood} />}
        {redtoast && <Toast addAgain foodName={toastfood} />}

        <div className="w-[100%] flex flex-col gap-4 px-4 mt-24 justify-center item-center">
          <h1 className="text-grey font-bold text-6xl">{title}</h1>
          <p>{`Cheesilicious ${title} to make every day extraordinary.`}</p>
          <div className=" p-2 w-[100%] flex gap-2">
            <div className=" w-[100%] flex">
              <AllFilters filtertype={filtertype} />
            </div>
          </div>
          <p className="text-3xl font-bold font-julee text-grey">
            {title}s we serves...
          </p>
        </div>

        {/* FOOD DISPLAY DIV */}
        <div className="flex flex-row  flex-wrap gap-10 w-[100%] max-h[200vh] max-sm:gap-1  ">
          { FilteredFoodData &&
            FilteredFoodData.filter((item) =>
              item.type.toLowerCase().includes(filtertype.toLowerCase())
            ).map((item, index) => (
              <FoodCard
                AddToCart={AddToCart}
                key={index}
                name={item.name}
                text={item.text}
                img={item.image}
                price={item.price}
                ratings={item.ratings}
                id={item.id}
              />
            ))}
        </div>
      </div>
     
    </div>)
    }
    </>
  );
}

export default Foods;
