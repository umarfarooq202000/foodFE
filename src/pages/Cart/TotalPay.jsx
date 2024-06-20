import { LuIndianRupee } from "react-icons/lu" 

function TotalPay({totalPayment}) {
  return (
    <div className="w-[100%] h-[50px] border-t-2  items-baseline  p-2 gap-2">
    <p className="w-[100%] text-md">Bill details:</p>
    <div className="flex items-center justify-between">
        <p className="text-sm text-grey">Item total:</p>
        <p className="text-greenColor text-sm flex items-baseline">
          <LuIndianRupee />
         {4564}
        </p>
    </div>
    <div className="flex items-center justify-between">
        <p className="text-sm text-grey">Delivery Fee |5.0 kms:</p>
        <p className="flex text-sm items-center text-greenColor"> <LuIndianRupee />{50}</p>
    </div>
   
  </div>
  )
}

export default TotalPay
