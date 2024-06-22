import { createContext, useContext, useState } from "react";



export const MyContext = createContext()

export const UseMyContext=()=>{
    return useContext(MyContext)
}


export const  MyContextProvider=({children})=>{

  //form
  const [page,setpage]=useState("login")

  const SingUp=()=>{
    setpage("singup")
  }
  const login=()=>{
    setpage("login")
  }
     

  //to make animmation on cart number
      const [Animate, setAnimate] = useState(false);

   // filter on food
      const [filtertype, setfiltertype] = useState("Relevant");
      
      const handleFilterChange = (newFilter) => {
           setfiltertype(newFilter);
         };
       
     // fill color to active filter    
     const [ActiveFilter,setActiveFilter]=useState('')

      //stopping food item to sent in cart which is already there
     const [AlreadyInCart,setAlreadyInCart]=useState([])


     //state used to Covert navbar to filter on scrolling
         const [AddFilter, setAddFilter] = useState(false);
     //counting food in cart
         const [FoodCount, setFoodCount] = useState(0);
     //Food list CART
          const [CartFoodList,setCartFoodList]=useState([])
    //Total payment of foods items
          const [TotalPayment,setTotalPayment]=useState()
          const SGST_= TotalPayment *.05
          const CGST_= TotalPayment *.05
          const deliveryCharge = TotalPayment > 500 ? 0 : 50

          
    //Cart effect on hover on cart option
          const [isHovering, setIsHovering] = useState(false);
    //NavMenu /top Menu    
          const [DisplayMenu, setDisplayMenu] = useState(false);
    //search bar
          const [SearchBar,setSearchBar] = useState(false)
    //placing order     
          const [isPlacedOrder,setisPlacedOrder] = useState(false)
    //loginNumber
          const [LoginNumber,setLoginNumber]=useState("")
    //Address Details
          const [Address,setAddress]=useState("")
   //toast       
            const [greentoast,setgreenToast] = useState(false)
            const [redtoast,setredToast] = useState(false)
            const [toastfood,settoastfood]=useState("")

  
          const GetSearchbar=()=>{
            setSearchBar(prev=>!prev)
          }
          const CutSearchbar=()=>{
            setSearchBar(false)
          }



    const AllObj={
        filtertype,
        setfiltertype,
        handleFilterChange,
        
        CartFoodList,
        setCartFoodList,
        
        TotalPayment,
        SGST_,
        CGST_,
        deliveryCharge,
        setTotalPayment,
        
        isHovering,
        setIsHovering,
        
        DisplayMenu,
        setDisplayMenu,
        
        SearchBar,
        setSearchBar,
        GetSearchbar,
        CutSearchbar,
        
        page,
        setpage,
        
        login,
        SingUp,
        
        AddFilter,
        setAddFilter,
        
        FoodCount,
        setFoodCount,
        
        ActiveFilter,
        
        setActiveFilter,
        Animate,
        setAnimate,
        
        AlreadyInCart,
        setAlreadyInCart,

        isPlacedOrder,
        setisPlacedOrder,

        LoginNumber,
        setLoginNumber,

        Address,
        setAddress,

        greentoast,
        setgreenToast,
        redtoast,
        setredToast,
        toastfood,
        settoastfood
    }

    return <MyContext.Provider value={AllObj}>{children}</MyContext.Provider>

}

