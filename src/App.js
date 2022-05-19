import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Appbar from "./components/Appbar" 
//import Typography from '@mui/material/Typography';
import Steper from "./components/Steper";
import  Card  from "./components/Card";
import Accordions from "./components/Accordions";
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (


    <div>
   {/* <Appbar></Appbar> */}
    <Steper></Steper> 
    
   <Accordions></Accordions>
    </div>

      )




}

      export default App;

