import { Link } from "react-router-dom"

function EmptyCart() {
  return (
    <>

<div className="w-[370px] max-h-[200vh] text-center max-sm:w-[100%] flex flex-col gap-4  bg-white p-2 ">
              <p className="text-6xl text-grey font-bold font-julee">Empty Cart</p>
              <div className="w-[100%] h-[300px] bg-cover flex items-center justify-center ">
                <img
                  src="images/CART_IMG-removebg-preview.png"
                  alt="IMG"
                  className="w-[70%] h-[70%] border-2 border-Grey "
                />
              </div>
              
                    <Link to="/" className="bg-mainColor text-2xl text-white font-medium py-2 px-6 border border-mainColor hover:scale-95 m-2 rounded-md duration-200">
                        Order Food Now
                     </Link>

              
              
              <div className="text-grey text-sm w-[100%] h-[60px] flex items-center justify-center my-5">
                <p className="text-mainColor font-mono text-sm w-[100%] h-[100px]">
                  Good food is always cooking! Go ahead, order some yummy items
                  from the menu.
                </p>
              </div>
            </div>
      
    </>
  )
}

export default EmptyCart
