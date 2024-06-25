
function TermsCondition() {


  const TermsConditions=[

    {
      name:"Introduction",
      text:"Welcome to [Your E-commerce Food Website]. These terms and conditions outline the rules and  regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use  [Your E-commerce Food Website] if you do not agree to take all of the terms and conditions stated on this page."
    },
    {
      name:"Account",
      text:"Welcome to [Your E-commerce Food Website]. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your E-commerce Food Website] if you do not agree to take all of the terms and conditions stated on this page."
    },
    {
      name:"Order and Payment",
      text:"All orders placed through our website are subject to our acceptance. We reserve the right to refuse or cancel any order for any reason. Prices for our products are subject to change without notice. We accept payment through [list payment methods].By placing an order, you authorize us to charge your chosen payment method for the total amount of your order."
    },
    {
      name:"Shipping and Delivery",
      text:"We will make every effort to deliver your order within the estimated delivery time; however, we are not responsible for any delays caused by circumstances beyond our control. Shipping costs and delivery times will vary depending on the delivery location  and shipping method selected."
    },
    {
      name:"Governing Law",
      text:"These terms and conditions are governed by and construedin accordance with the laws of [your state/country], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.By using our website, you acknowledge that you have read,  understood, and agree to be bound by these terms and conditions. If you have any questions about  these terms, please contact us at [contact information]."
    }
  ]
  return (
    <div className="w-[100vw] max-h-[300vh] flex flex-col items-center justify-center gap-4">
      <div className="w-[100%]  h-[80px] border-b-2 flex justify-center items-center max-sm:scale-75 bg-bg ">
        <h1 className="text-black font-semibold text-3xl">Terms And Conditions</h1>
      </div>
      <div className="flex flex-col w-[100%] max-h-[300vh] justify-center items-center gap-10">

          { 
          TermsConditions.map(item=>(
            <div key={item.name} className="w-[80%]  max-h-[500px] border-b-2 flex flex-col justify-center gap-4 max-sm:w-[90%]">
            <h1 className="text-white font-semibold text-3xl max-sm:scale-75 p-2 px-3 rounded-md bg-mainColor">{item.name}</h1>

              <p className="text-black font-mono text-md">{item.text} </p>
            </div>

          )) 
      }
       
      </div>

  </div>
  )
}

export default TermsCondition
