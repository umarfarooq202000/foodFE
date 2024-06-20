import { Checkbox, FormControlLabel, FormGroup, Menu, MenuItem } from "@mui/material"
import { orange } from "@mui/material/colors"
import { useState } from "react";
import { FaChevronDown, FaRegCircle } from "react-icons/fa"
import { FaRegCircleDot } from "react-icons/fa6"


function SortBy() {

    
  //Sort By filter
  const SortByFilter=['Relevent (Defalut)','Delivery Time','Ratings','Veg/Non-Veg','Offers']

  //sory By menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
                <button
                          className="text-grey text-sm rounded-full border border-borderColor shadow-sm px-4 py-2 flex gap-2 items-center"
                          id="demo-positioned-button"
                          aria-controls={open ? 'demo-positioned-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                              Sort By{<FaChevronDown/>}
                            </button>
                                  <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                      vertical: 'top',
                                      horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'left',
                                    }}
                                  >
                                    {
                                     SortByFilter.map((sub,index)=>(
                                      <MenuItem key={index} onClick={handleClose}>
                                                                    <FormGroup>
                                  <FormControlLabel control={<Checkbox  
                                                                defaultChecked={ sub === 'Relevent (Defalut)'} 
                                                                icon={<FaRegCircle />} 
                                                                checkedIcon={<FaRegCircleDot />} 
                                                                
                                                                sx={{color: orange[900],  
                                                                     '&.Mui-checked': {
                                                                       color: orange[900],
                                                                     },
                                                                    
                                                                    }
                                                                    }/>} label={sub} />
 
                            </FormGroup>
                                      </MenuItem>
                                     ))
                                    }
                                   
                                  </Menu>
      
    </div>
  )
}

export default SortBy
