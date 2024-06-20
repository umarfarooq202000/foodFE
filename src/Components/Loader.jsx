import { Bars } from 'react-loader-spinner'

function Loader() {
  return (
     <div className="w-[100vw] h-[90vh] flex flex-col gap-5 items-center justify-center">
        <Bars
              visible={true}
              height="100"
              width="200"
              color="#e9692c"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
           
              />
            <p className='font-mono font-bold text-grey text-xl'>LOADING...</p>
             
     </div>
  )
}

export default Loader
