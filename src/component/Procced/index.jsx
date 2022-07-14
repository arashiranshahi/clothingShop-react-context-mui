import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { keyframes } from "@mui/system";



const Procced = () => {
    const textFieldStyle = {
        input:{height:'5px',fontSize:'14px'}
    }
    const spin = keyframes`
    from {
      opacity : 0;
      transform: translateY(-20px);
    }
    to {
      opacity : 1;
      transform: translateY(0px);
    }
  `;
    return ( 
        <Box display='flex' flexDirection='column' sx={{animation : `${spin} 1000ms`}}>
            <Typography px='10px' pt='15px' pb='5px'>Email</Typography>
            <TextField sx={textFieldStyle}/>
            <Typography px='10px' pt='15px' pb='5px'>Name</Typography>
            <TextField sx={textFieldStyle}/>
            <Typography px='10px' pt='15px' pb='5px'>Address</Typography>
            <TextField sx={textFieldStyle}/>
            <Button width='100%' variant="contained" sx={{padding:'10px',margin:'25px 0'}} onClick={()=>{alert('Thanks for your shpping mr.koshesh')}}>Checkout</Button>
        </Box>
     );
}
 
export default Procced;