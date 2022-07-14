import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { contexts } from "../../contexts";
import { keyframes } from "@mui/system";

const Cart = ({ cart, handleModal }) => {
  const { url, price, description } = cart;
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
  const cartStyle = {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    my: "30px",
    mx: "15px",
    pb: "10px",
    cursor: "pointer",
    animation: `${spin} 1000ms`,
    "&:hover": {
      h3: {
        color: "#F0C041",
      },
    },
  };
  const cartTitleStyle = {
    fontWeight: "500",
    padding: "20px 0",
    textAlign: "center",
    transition: "ease-in-out 0.3s",
  };

  return (
    <Box
      onClick={() => {
        handleModal(cart);
      }}
      sx={cartStyle}
    >
      <img src={url} />
      <Box px="20px">
        <h3 style={cartTitleStyle}>{description}</h3>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>${price}</Typography>
          <Button variant="contained">Add To Card</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
