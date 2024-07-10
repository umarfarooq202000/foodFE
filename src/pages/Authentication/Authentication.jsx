
import { UseMyContext } from "../../Context/MyContext";


import SignUp from "../SignUp/SignUp";
import SignIn from "../Signin/SignIn";


function Authentication({onClose}) {
          
      const { page }=UseMyContext()

      return (
        <div>
             { page==="login" ? <SignIn onClose={onClose}/> : <SignUp onClose={onClose}/>}
        </div>
       
        
      )
    }
export default Authentication
