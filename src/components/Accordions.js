import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import { Alert } from "@mui/material";
import { Paper } from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle';

const Array_haircuts = [
    {
        Name: "Adult Cut",
        Time: "30 minutes",
        price: "300$",
        info: "Looking for a quick haircut? This is the one for you."

    },
    {
        Name: "Cut & Shampoo",
        Time: "1 hours",
        price: "100$",
        info: "This cut includes a shampoo service with some of our favorite professional products"

    },

    {
        Name: "Cut, Shampoo & Full Style",
        Time: "20 minutes",
        price: "55550$",
        info: "This cut option offers styling with hot tools to complete your new look"
    },

    {
        Name: "Cut, Shampoo & Basic Style",
        Time: "45 minutes",
        price: "$500",
        info: "After this blow-dry and brush-finished cut, you'll be ready for anything"
    },




]
var name;

let item;
const handleChange = (event) => {
    if(event.target=="true")
    name=Array_haircuts[0].Name
}

export default function Accordions() {
   
    return (
        <div >

            <div >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{Array_haircuts[1].Name}
                        </Typography>


                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div ClassName="items">

                                <div>
                                    <div ClassName="item_name">
                                        {Array_haircuts[1].Time}
                                    </div>
                                    <div>
                                        {Array_haircuts[1].info}
                                    </div>
                                </div>
                                <div>

                                    {Array_haircuts[1].price}

                                    <Checkbox defaultChecked
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion>



                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.

                            <Checkbox defaultChecked />
                        </Typography>
                    </AccordionDetails>
                </Accordion>


               

            </div>


            <div>
                <Paper elevation={3} className="mt  card_width">
                    <div>
                        <h4 ClassName="ml-10">Hair Salon </h4>
                          
                     </div>
                    <Alert severity="info">
                        <AlertTitle>info</AlertTitle>
                        This is an info alert — <strong>check it out!</strong>
                    </Alert>
                </Paper>
                

            </div>
        </div>


    );
}
