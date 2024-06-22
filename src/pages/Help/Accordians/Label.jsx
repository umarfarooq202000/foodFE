import { Button } from "@mui/base"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary } from "@mui/material"
import { FaAngleDown } from "react-icons/fa";


function Label() {
  return (
    <div>
         <div className="flex flex-col gap-5">
        <div className="w-[100%] text-2xl font-bold">
            <p>Label </p>
        </div>
        <div>
            <Accordion>
            <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel1-content"
            id="panel1-header"
              className="text-lg hover:text-mainColor"

            >
            Accordion 1
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                  className="text-lg hover:text-mainColor"
                >
                Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                  className="text-lg hover:text-mainColor"
                >
                Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                  className="text-lg hover:text-mainColor"
                >
                Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
      
    </div>
  )
}

export default Label
