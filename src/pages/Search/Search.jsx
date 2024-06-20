import HomePageLayout from "../../Components/HomePageLayout"
import { GoSearch } from "react-icons/go";


function Search() {
  return <HomePageLayout>
            <div className="w-[100vw] max-h-[100vh] flex justify-center p-2">
                <div className="w-[50%] h-[50px] border border-borderColor p-2  my-10 font-medium flex items-center justify-around max-sm:w-[100%]">
                       <input className="w-[90%] h-[50px]  outline-none bg-transparent " type="text" placeholder="Search for foods/dishes" />
                       <GoSearch className="text-2xl text-grey"/>

                </div>
           
            </div>

         </HomePageLayout>
    
   
 
}

export default Search
