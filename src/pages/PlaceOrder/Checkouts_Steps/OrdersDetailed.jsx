import { UseMyContext } from "../../../Context/MyContext"

function OrdersDetailed() {

  const {CartFoodList}=UseMyContext()
  return (
    <div className="w-[100%] max-h-[400x]  flex direction-columns flex-wrap my-2">
       {
        CartFoodList.map((item)=>(
          <li className="font-mono font-bold list-none flex gap-2 items-center" key={item.name}>
           
              <img src={`${item.image}`} alt="" className="w-[50px] h-[50px] rounded-full border-4"/>
              <p> {item.name},</p>
        </li>
        ))
       }
    </div>
  )
}

export default OrdersDetailed
