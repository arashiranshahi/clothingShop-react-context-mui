import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#203040",
    width: "100%",
    height: "80px",
  };
  return (
    <Box sx={footerStyle}>
      <Typography color='white'>All right is reserved</Typography>
    </Box>
  );
};

export default Footer;
