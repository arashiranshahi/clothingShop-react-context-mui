import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


 const Header = () => {
    const headerStyle = {
        display : 'flex',
        alignItems : 'center',
        backgroundColor : '#203040',
        width : '100%',
        height : '80px',
        color:'white',
        padding:'0 50px'
    }
     return ( 
         <Box sx={headerStyle}>
             <Typography>React Shopping Cart</Typography>
         </Box>
      );
 }
  
 export default Header;