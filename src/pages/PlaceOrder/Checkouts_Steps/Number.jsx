

function Number({LoginNumber}) {

 
  console.log( LoginNumber );

  return (
    <div className="w-[100%] max-h-[400px] flex items-center justify-between ">
        <p>Mobile Number:{LoginNumber}</p>
        <button className=" border-2 border-mainColor rounded-sm text-mainColor px-2 py-1 hover:scale-105 duration-300 font-mono">Change</button>
    </div>
  )
}

export default Number
