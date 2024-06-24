import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { UseMyContext } from "../Context/MyContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Filter({ filter_on_food }) {
  const { handleFilterChange, filtertype } = UseMyContext();

  const handleClick = (e) => {
    // console.log(e.target.innerText);
    let value = e.target.textContent;
    if (value !== "") {
      handleFilterChange(value);
    }

    // console.log(value);
    //console.log(filtertype)
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const labelStyle = {
  //   fontWeight: 'bold',
  //   color: 'red',
  // };

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 2, borderColor: "divider" }}
      >
        {filter_on_food &&
          filter_on_food.map((filter, index) => (
            <Tab key={index} label={filter.name} />
          ))}
      </Tabs>

      {filter_on_food &&
        filter_on_food.map((filter, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div className="flex flex-col gap-3  w-[200%] overflow-auto h-[265px] p-2">
              {filter.subFilter.map((sub, subIndex) => (
                <button
                  onClick={handleClick}
                  className="text-grey flex justify-start"
                  key={subIndex}
                >
                  {
                    <FormControl>
                      {/* <FormLabel id="demo-radio-buttons-group-label">{sub}</FormLabel> */}
                      <RadioGroup
                        aria-labelledby="demo-customized-radios"
                        name="customized-radios"
                        value={filtertype}
                      >
                        <FormControlLabel
                          value={sub}
                          control={<Radio />}
                          label={sub}
                        />
                      </RadioGroup>
                    </FormControl>
                  }
                </button>
              ))}
            </div>
          </TabPanel>
        ))}
    </Box>
  );
}

export default Filter;
