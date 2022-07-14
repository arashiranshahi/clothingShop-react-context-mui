import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { contexts } from "../../contexts";
import { keyframes } from "@mui/system";

const ShopingListCard = ({ item }) => {
  const { shopingList, setShopingList , setProcced } = useContext(contexts);

  const removeCartHandle = (id) => {
    shopingList.map((item, index) => {
      if (item.id === id) {
        shopingList.splice(index, 1);
      }
    });
    setShopingList([...shopingList]);
    if(shopingList.length == 0){
      setProcced(false)
    }
  };

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
    <>
        <Box
      width="100%"
      height="100px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt="20px"
      sx={{ animation: `${spin} 1000ms` }}
    >
      <img src={item.url} style={{ width: "20%", height: "100%" }} alt="gg" />
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
        py="10px"
        width='70%'
      >
        <Typography>{item.description}</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          gap="10%"
          alignItems="center"
          width="100%"
        >
          <Typography align="center">
            ${item.price} x {item.count}
          </Typography>
          <Button
            sx={{ backgroundColor: "gray" }}
            color="info"
            variant="contained"
            onClick={() => {
              removeCartHandle(item.id);
            }}
          >
            remove
          </Button>
        </Box>
      </Box>
    </Box>

    </>
  );
};

export default ShopingListCard;
