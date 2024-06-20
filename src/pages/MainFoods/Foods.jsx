import useDisclosure from "../../hooks/useDisclosure";
import FoodCard from "../../Components/FoodCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseMyContext } from "../../Context/MyContext";
import AllFilters from "../../Components/AllFilters";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

const foodData = [
  {
    id: 101,
    name: "chicken masala Biryani",
    price: 220,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/biryani.jpg",
    type: " relevant   meat biryani indian ",
    ratings: "4.5",
    offer: "20%",
  },
  {
    id: 102,
    name: "chicken Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/8a/28/7d/8a287d3cb3dd22c07fead0c9f51c8eeb.jpg",
    type: " relevant   meat biryani indian",
    ratings: "4.0",
  },
  {
    id: 103,
    name: "Mutton masala Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/8d/d3/b5/8dd3b54204794c8a9920028f27c8e822.jpg",
    type: " relevant  meat biryani indian",
    ratings: "4.5",
    offer: "20%",
  },
  {
    id: 104,
    name: "mutton Biryani",
    price: 250,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/42/3d/f9/423df917178263e91dc45e3142d385a3.jpg",
    type: " relevant  main course meat biryani indian offers",
    ratings: "4.0",
  },
  {
    id: 105,
    name: "Biryani",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/f9/46/4f/f9464f711660d57c77965ef80d98da03.jpg",
    type: " relevant  main course meat biryani indian offers",
    ratings: "4.0",
  },
  {
    id: 106,
    name: "corn pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/d3/6e/fe/d36efe28fe4e8da319c9d9b8381e0425.jpg",
    type: " relevant  pizza veg italian offers",
    ratings: "4.5",
  },
  {
    id: 144,
    name: "cheese corn pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/07/36/58/0736589667eabf9214006e9ce641dbfa.jpg",
    type: " relevant  pizza veg italian offers",
    ratings: "4.5",
  },
  {
    id: 107,
    name: " Cheese pizza",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/ae/21/31/ae21317434fb91e0228b2ebdeadcb908.jpg",
    type: " relevant  pizza veg italian",
    ratings: "4.5",
    offer: "30%",
  },
  {
    id: 108,
    name: "FarmHouse pizza",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/52/ef/a3/52efa3a00863082813205fd5662e36e9.jpg",
    type: " relevant  pizza veg italian",
    ratings: "4.5",
  },
  {
    id: 109,
    name: "Margrete pizza",
    price: 150,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/e0/3a/1c/e03a1ce909ef8a96707c14c289d8bc9d.jpg",
    type: " relevant  pizza veg italian",
    ratings: "4.0",
  },
  {
    id: 110,
    name: "Chicken Tikka masala",
    price: 150,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/5c/db/bd/5cdbbd3a5320ede8fc74a205d8044f68.jpg",
    type: " relevant  meat pakistani",
    ratings: "3.0",
  },
  {
    id: 111,
    name: "GRILLED CHICKEN",
    price: 200,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg",
    type: " relevant  meat pakistani",
    ratings: "3.0",
  },
  {
    id: 112,
    name: " CHICKEN Afghani",
    price: 130,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/4d/80/60/4d8060aee89f76567f5333e7d09926cf.jpg",
    type: " relevant  meat afghani offers",
    ratings: "4.0",
  },
  {
    id: 113,
    name: "Mohito",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/cd/f1/0b/cdf10bd45a14c646c05e75cc59390b21.jpg",
    type: " relevant  drinks american",
    ratings: "3.0",
  },
  {
    id: 114,
    name: "virgin Mohito",
    price: 90,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/9c/a4/77/9ca4775742d7da6875a485dc8cf7f79c.jpg",
    type: " relevant  drinks american",
    ratings: "4.0",
  },
  {
    id: 115,
    name: "Nimbu Paani",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/3e/a0/dc/3ea0dc5c15d1e5e57b8a326b5b1dfd56.jpg",
    type: " relevant  drinks indian",
    ratings: "3.0",
  },
  {
    id: 116,
    name: " MAHARAJA BURGER",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/f7/2e/7b/f72e7bd407a6bf4b0688347c38264114.jpg",
    type: " relevant  burger veg korean offers",
    ratings: "3.0",
  },
  {
    id: 117,
    name: "BURGER",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/564x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg",
    type: " relevant  burger veg korean",
    ratings: "4.5",
  },
  {
    id: 118,
    name: "CHEESE BURGER",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/a8/e4/67/a8e46738ce2fe13e83c3e3f548214405.jpg",
    type: " relevant  burger veg korean offers",
    ratings: "4.5",
  },
  {
    id: 119,
    name: "CHICKEN CHEESE BURGER",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/be/68/6d/be686dab3797e0b43cba7b663851fd2b.jpg",
    type: " relevant  burger meat korean",
    ratings: "4.0",
  },
  {
    id: 120,
    name: "CHICKEN BURGER",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/41/f6/1c/41f61ca5c84f6d157d9d3b98536c7207.jpg",
    type: " relevant  burger meat american",
    ratings: "3.0",
  },
  {
    id: 121,
    name: "Kitkat Shakes",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/7d/bd/51/7dbd5160ae9dc76fd87f9ebb988210bf.jpg",
    type: " relevant  shakes chinese",
    ratings: "3.0",
  },
  {
    id: 122,
    name: "Oreo shakes",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/58/ee/52/58ee529250709937fe63b056ad23d27f.jpg",
    type: " relevant  shakes american offers",
    ratings: "4.0",
  },
  {
    id: 123,
    name: "HazleNut",
    price: 95,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/1a/24/c7/1a24c7a60a7ccfd31bed212b59765cf5.jpg",
    type: " relevant  shakes indian",
    ratings: "4.5",
  },
  {
    id: 124,
    name: "Strawberry shakes",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/5f/37/b2/5f37b22954a0f3caa7b4b867c59c6fbf.jpg",
    type: " relevant  shakes italian",
    ratings: "3.0",
  },
  {
    id: 125,
    name: "Hot Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " relevant  coffee indian",
    ratings: "3.0",
  },
  {
    id: 126,
    name: "cappuccino coffee",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg",
    type: " relevant  coffee american",
    ratings: "4.0",
  },
  {
    id: 127,
    name: "Coffee lette",
    price: 70,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " relevant  coffee pakistani",
    ratings: "3.0",
  },
  {
    id: 128,
    name: "Expresso Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " relevant coffee indian offers",
    ratings: "4.0",
  },
  {
    id: 129,
    name: "Chocolate Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/f8/4a/70/f84a70f0469e904820773d304c4374f8.jpg",
    type: " relevant  coffee chinese",
    ratings: "3.0",
  },
  {
    id: 130,
    name: "Cold Coffee",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/d5/51/da/d551daf3f3062efab638eda193a43201.jpg",
    type: " relevant  coffee chinese",
    ratings: "4.5",
  },
  {
    id: 131,
    name: "Chinese Noodles",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/c5/8f/d1/c58fd12b65ef692f88fc641a42eabc6c.jpg",
    type: " relevant  coffee chinese",
    ratings: "4.0",
  },
  {
    id: 132,
    name: " Noodles Manchurian",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/6d/d3/a8/6dd3a8dbd30d8a1946908b0dac109fc3.jpg",
    type: " relevant  noodles veg chinese",
    ratings: "3.0",
  },
  {
    id: 133,
    name: "Hakka  Noodles",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/ac/02/ba/ac02baefd8296ed62d9b92db5be0ac3f.jpg",
    type: " relevant  noodles veg korean",
    ratings: "3.0",
  },
  {
    id: 134,
    name: "Chicken Soup Noodle",
    price: 120,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/474x/3c/18/05/3c180580028d6575a434c754c9a8812a.jpg",
    type: " relevant  noodles meat korean",
    ratings: "3.5",
  },

  {
    id: 135,
    name: "Masala Noodle",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/7e/c1/e2/7ec1e242c20101e7411590416b1cd73f.jpg",
    type: " relevant  noodles veg indian",
    ratings: "3.7",
  },
  {
    id: 136,
    name: "Fried Momos",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/20/01/2e/20012e13d9777702a111ff3f9adf24d3.jpg",
    type: " relevant   momos veg chinese",
    ratings: "3.8",
  },
  {
    id: 137,
    name: "steam Momos",
    price: 40,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/8a/a7/e1/8aa7e1031ee43685b9a7d8de1568c583.jpg",
    type: " relevant   momos veg chinese",
    ratings: "4.2",
  },
  {
    id: 138,
    name: "Paneer Momos",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/73/d2/fe/73d2fed4697d267c6584bcecbf41a326.jpg",
    type: " relevant momos veg chinese",
    ratings: "3.6",
  },
  {
    id: 139,
    name: "Chicken Momos",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/b9/b1/e1/b9b1e1c5a7ca350858719d0caed61187.jpg",
    type: " relevant   momos meat indian",
    ratings: "4.8",
  },
  {
    id: 140,
    name: "Aaloo Paratha",
    price: 50,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/474x/f0/31/3a/f0313a801ff2bcb92ac550ed107144e5.jpg",
    type: " relevant   parathas veg indian",
    ratings: "4.0",
  },
  {
    id: 141,
    name: "Paneer Paratha",
    price: 80,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/0b/dc/46/0bdc46dc718c27683c1dbe6bfa7d50d1.jpg",
    type: " relevant parathas veg indian",
    ratings: "4.3",
  },

  {
    id: 142,
    name: "Aaloo piyaz Paratha",
    price: 60,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/59/cb/67/59cb674867d3b3900085f558008faeb3.jpg",
    type: " relevant   parathas veg indian",
    ratings: "3.8",
  },

  {
    id: 143,
    name: "Mixed Paratha",
    price: 100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://i.pinimg.com/236x/77/3b/f2/773bf2a828d5308fde6ec71f2df3d4e8.jpg",
    type: " relevant   parathas veg indian",
    ratings: "4.0",
  },
];

function Foods({ title }) {
  //foodfilter state for particular food item {pizza,burger,biryani,noodle,mmomos,shakes,etc}
  const FilteredFoodData = foodData.filter((food) =>
    food.type.includes(title.toLowerCase())
  );

  console.log(FilteredFoodData);

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
  } = UseMyContext();
  //FOR OPEN THE FILTER MODEL
  const { onOpen } = useDisclosure();

  const [searchFilterFood, setsearchFilterFood] = useState([]);

  const SearchFoodFunInFilter = (e) => {
    const Searchfood = e.target.value;
  
    if (FilteredFoodData.length > 0) {
        const list_Searchfood = FilteredFoodData.filter((food) =>
        food.name.toLowerCase().includes(Searchfood.toLowerCase())
      );
      setsearchFilterFood(list_Searchfood);
    }
  };

  //change navbar into filters
  {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 210) {
        setAddFilter(true);
      } else {
        setAddFilter(false);
      }
    });
  }

  //fooditems count in cart
  const AddFood = () => {
    setFoodCount(FoodCount + 1);
  };

  ////toast added when food is added to cart
  const Addtoast1 = (FoodName) => {
    toast.success(
      <div className="text-xl flex items-center justify-between">
        {FoodName} added
        <Link to="/cart" className="text-sm">
          <button className="border rounded-sm p-1 opacity-85 hover:opacity-100">
            {" "}
            View Cart
          </button>
        </Link>
      </div>,
      {
        style: {
          fontSize: "20px",
          fontFamily: "Acme",
        },
      }
    );
  };
  //toast added when food is already added to cart
  const Addtoast2 = (FoodName) => {
    toast.error(
      <div className="text-lg flex  items-center justify-between font-Acme">
        <div className="flex flex-col ">
          {FoodName}
          <span className="text-white font-bold"> Already added</span>
        </div>
        <Link to="/cart" className="text-sm">
          <button className="border rounded-sm p-1 opacity-85 hover:opacity-100">
            {" "}
            View Cart
          </button>
        </Link>
      </div>,
      {
        style: {
          fontSize: "20px",
        },
      }
    );
  };

  // CartFoodList to be added
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
  return (
    <div className="flex flex-col  items-center">
      {AddFilter ? (
        <AllFilters
          SearchFoodFun={SearchFoodFunInFilter}
          filtertype={filtertype}
          isNavFilter
        />
      ) : (
        <Navbar FoodCount={FoodCount} onOpen={onOpen} />
      )}
      <div className="w-[90vw] max-h[300vh] flex flex-col gap-4 item-center  ">
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

        {/* SEARCH FOOD DISPLAY DIV */}
        {
        
        searchFilterFood ? (
          <div className="flex flex-row  justify-center flex-wrap gap-10 w-[100%] max-h[200vh] py-2 ">
            {searchFilterFood.map((item) => (
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
          <div className="flex flex-row  flex-wrap gap-10 w-[100%] max-h[200vh] max-sm:gap-1  ">
            {
              FilteredFoodData.filter((item) =>
                item.type.includes(filtertype.toLowerCase())
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
        )
        
        }
        {/* foood display */}
         <div className="flex flex-row  flex-wrap gap-10 w-[100%] max-h[200vh] max-sm:gap-1  ">
            {
              FilteredFoodData.filter((item) =>
                item.type.includes(filtertype.toLowerCase())
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
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Foods;
