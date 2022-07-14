import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/Header";
import Cart from "../component/Cart";
import CartModal from "../component/Modal/Modal";
import Procced from "../component/Procced";
import ShopingListCard from "../component/shopingListCard";
import { contexts } from "../contexts";
import data from "../data/data.json";

const Layout = () => {
  const {
    shopingList,
    setOpenModal,
    setCurrentCart,
    order,
    setOrder,
    filter,
    setFilter,
    cartList,
    setCartList,
    procced,
    setProcced,
  } = useContext(contexts);

  useEffect(() => {
    setCartList([...data]);
  }, []);

  const mainHeaderStyle = {
    borderBottom: "1px solid black",
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 10px",
  };
  const sideBarHeaderStyle = {
    borderBottom: "1px solid black",
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",
    margin: "0 10px",
  };
  const handleModal = (cart) => {
    setOpenModal(true);
    setCurrentCart({ ...cart, count: 1 });
  };
  const orderHandle = (value) => {
    if (value == "highest") {
      let highestArray = cartList.sort(function (a, b) {
        return b.price - a.price;
      });
      setCartList([...highestArray]);
    } else if (value == "lowest") {
      let lowestArray = cartList.sort(function (a, b) {
        return a.price - b.price;
      });
      setCartList([...lowestArray]);
    }
    setOrder(value);
  };
  const filterHandle = (value) => {
    if (value !== "All") {
      let newData = data.filter((item) => {
        if (item.size.indexOf(value) !== -1) {
          return item;
        }
      });
      setCartList([...newData]);
    }
    if (value == "All") {
      setCartList([...data]);
    }

    setFilter(value);
  };
  let total = 0;

  shopingList.map((item)=>{
    total += Number(item.price) * item.count
  })



  return (
    <Box minHeight="100vh">
      <Header />
      <CartModal />
      <Box
        width="80%"
        mx="auto"
        py="20px"
        display="flex"
        justifyContent="center"
        sx={{ minHeight: "83vh" }}
      >
        <Box width="75%" component="main">
          <Box sx={mainHeaderStyle}>
            <Typography>{cartList.length} Product</Typography>
            <Box display="flex">
              <Typography mx="10px">Order</Typography>
              <select
                name="Order"
                id="Order"
                value={order}
                onChange={(e) => {
                  orderHandle(e.target.value);
                }}
              >
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </Box>
            <Box display="flex">
              <Typography mx="10px">Filter</Typography>
              <select
                name="Filter"
                id="Filter"
                value={filter}
                onChange={(e) => {
                  filterHandle(e.target.value);
                }}
              >
                <option value="All">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {cartList.map((cart) => {
              return (
                <Cart handleModal={handleModal} key={cart.id} cart={cart} />
              );
            })}
          </Box>
        </Box>
        <Box></Box>
        <Box width="25%">
          <Box sx={sideBarHeaderStyle}>
            <Typography>
              {shopingList.length > 0
                ? `You have ${shopingList.length} in the Cart`
                : "Cart is Empty"}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" p="3%">
            {shopingList.map((item) => {
              return <ShopingListCard key={item.id} item={item} />;
            })}
            {shopingList.length > 0 ? (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my="30px"
                px="20px"
              >
                <Typography>
                  Total : ${total.toFixed(1)}
                </Typography>
                <Button variant="contained" onClick={()=>{setProcced(true)}}>Procced</Button>
              </Box>
            ) : null}
            {procced ? <Procced /> : null}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
