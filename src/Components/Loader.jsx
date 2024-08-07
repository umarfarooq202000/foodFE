import { MutatingDots} from 'react-loader-spinner'

function Loader({infiniteloader}) {
  return (

     <>
     {

      infiniteloader ?
          <div className=" h-[100px] flex flex-col gap-5 items-center justify-center">
              <MutatingDots
                visible={true}
                height="100"
                color="#e9692c"
                secondaryColor="#e9692c"
                radius="12"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
                <p className='font-mono font-bold text-grey'>LOADING...</p>
                
          </div>
        :
        <div className="w-[100] h-[100vh] flex flex-col gap-5 items-center justify-center">
        <MutatingDots
          visible={true}
          height="100"
          color="#e9692c"
          secondaryColor="#e9692c"
          radius="12"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
          <p className='font-mono font-bold text-grey'>LOADING...</p>
           
   </div>  
     }
     
     
     
     
     </>
   
  )
}

export default Loader
