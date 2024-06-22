import { Button } from "@mui/base"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary } from "@mui/material"
import { FaAngleDown } from "react-icons/fa";


function PartnerOnboarding() {
  return (
    <>
    <div className="flex flex-col gap-5">
        <div className="w-[100%] text-2xl font-bold">
            <p>Partner Onboarding </p>
        </div>
        <div>
            <Accordion>
            <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-lg hover:text-mainColor"
            >
           I want to add my food item in you website
            </AccordionSummary>
            <AccordionDetails>
               <button className="bg-mainColor text-md p-2 text-white hover:scale-105 duration-200 rounded-sm">Send Mail</button>
            </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                 className="text-lg hover:text-mainColor"
                >
                who should i need to contact if i need contact and support? 
                </AccordionSummary>
                <AccordionDetails>
                <p>you can contact our respective teams Contact NuMBER:9988776659</p>
                <button className="bg-mainColor text-md p-2 text-white hover:scale-105 duration-200 rounded-sm">Send Mail</button>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                 className="text-lg hover:text-mainColor"
                >
               question 4
                </AccordionSummary>
                <AccordionDetails>
                <p>you can contact our respective teams Contact NuMBER:9988776659</p>
                <button className="bg-mainColor text-md p-2 text-white hover:scale-105 duration-200 rounded-sm">Send Mail</button>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                 className="text-lg hover:text-mainColor"
                >
                who should i need to contact if i need contact and support? 
                </AccordionSummary>
                <AccordionDetails>
                <p>you can contact our respective teams Contact NuMBER:9988776659</p>

                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel3-content"
                id="panel3-header"
                className="text-lg hover:text-mainColor"
                >
                Accordion Actions
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
                </AccordionActions>
            </Accordion>

        </div>
    </div>
   </>
  )
}

export default PartnerOnboarding
