import { SwipeableDrawer } from "@mui/material"
import Location from "./Location"
import { Fragment } from "react"

import Authentication from "../pages/Authentication/Authentication"


function SideDrawer({isOpen,onClose,position}) {
  return (
    
        <div>
    
        { 
        position==="left"?
        
        
          (<Fragment>

          <SwipeableDrawer
            open={isOpen} 
            onClose={onClose}
            anchor={"left"}
         
           
          >
               <Location onClose={onClose}/>
          </SwipeableDrawer>
        </Fragment>
          )
      
      :
           ( 
              <Fragment>

            <SwipeableDrawer
              open={isOpen} 
              onClose={onClose}
              anchor={"right"}
            
              
            >
                 <Authentication onClose={onClose}/>
            </SwipeableDrawer>
          </Fragment>
        )
    
    }
        </div>
    
  )
}

export default SideDrawer
