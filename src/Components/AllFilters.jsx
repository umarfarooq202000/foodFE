import Model from "./Model";

import filter_on_food from "../Data/Filter_on_Food";
import useDisclosure from "../hooks/useDisclosure";
import { FaChevronDown } from "react-icons/fa";
import { UseMyContext } from "../Context/MyContext";

function AllFilters({ isNavFilter, SearchFoodFun }) {
  //setting up the filter on foodCards
  const {
    filtertype,
    handleFilterChange,
    setActiveFilter,
    ActiveFilter,
    setsearchFood,
  } = UseMyContext();

  const handleClick = (e) => {
    // console.log(e.target.innerText);
    setsearchFood([]);
    let value = e.target.textContent;
    if (value == " ") {
      handleFilterChange("relevant");
    }
    if (value !== "") {
      handleFilterChange(value);
      setActiveFilter(value);
    }
  };

  //make addition filter  direct on sceen
  const top_filter = ["veg", "Offers", "Meat", "Indian", "Ratings 4+"];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isNavFilter ? (
        <div className=" flex items-center justify-around w-[100vw] max-h-[120px]  bg-white shadow-md fixed z-40 gap-2  p-2 top-0  max-lg:h-[150px] font-ubuntu ">
          <div className=" flex gap-1 flex-wrap overflow-auto max-lg:justify-center">
            <button
              onClick={onOpen}
              className={`text-grey rounded-full  border border-borderColor shadow-sm  px-2 py-2 flex items-center gap-2  ${
                filtertype !== "relevant"
                  ? "bg-mainColor  text-white"
                  : "bg-white"
              }`}
            >
              <span className={`font-bold `}>{`${
                filtertype == "relevant" ? "" : filtertype
              }`}</span>
              Filter
              <span className="font-bold">
                <FaChevronDown />
              </span>
            </button>
            <Model
              filter_on_food={filter_on_food}
              modalIsOpen={isOpen}
              openModal={onOpen}
              closeModal={onClose}
            />

            {/* more filter button on homescreen */}
            <div className="flex max-md:hidden gap-2">
              {top_filter.map((item, index) => (
                <button
                  key={index}
                  onClick={handleClick}
                  className={`flex justify-center items-center font-medium text-grey rounded-full ${
                    filtertype !== "relevant" && ActiveFilter == item
                      ? "bg-mainColor text-white  border border-mainColor"
                      : "bg-white border border-borderColor"
                  }  shadow-sm  p-2  gap-2  `}
                >
                  <span className={`font-bold `}></span>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <input
              onChange={SearchFoodFun}
              type="text"
              placeholder="Search..."
              className="text-lg min-w-[190px] w-[30vw] h-[50px] p-1 outline-none border border-borderColor rounded-md "
            />{" "}
          </div>
        </div>
      ) : (
        <div className="flex gap-2 font-ubuntu">
          <button
            onClick={onOpen}
            className={`text-grey text-sm rounded-full border border-borderColor shadow-sm px-4 py-2 flex gap-2 items-center ${
              filtertype !== "relevant"
                ? "bg-mainColor text-white border  border-mainColor"
                : "bg-white border-borderColor "
            }`}
          >
            <span className={`font-bold `}>{`${
              filtertype == "relevant" ? "" : filtertype
            }`}</span>
            Filter
            <span className="font-bold">
              <FaChevronDown />
            </span>
          </button>
          <Model
            filter_on_food={filter_on_food}
            modalIsOpen={isOpen}
            openModal={onOpen}
            closeModal={onClose}
          />
          <div className="flex max-md:hidden">
            <div className="flex max-md:hidden gap-2">
              {top_filter.map((item, index) => (
                <button
                  key={index}
                  onClick={handleClick}
                  className={`font-medium text-grey rounded-full ${
                    filtertype !== "relevant" && ActiveFilter == item
                      ? "bg-mainColor text-white border border-mainColor"
                      : "bg-white  border border-borderColor"
                  } shadow-sm  px-2 py-2 flex items-center gap-2  `}
                >
                  <span className={`font-bold `}></span>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllFilters;
