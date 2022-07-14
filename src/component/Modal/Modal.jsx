import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useContext } from "react";
import { contexts } from "../../contexts";
import { Icon } from "@iconify/react";
import { keyframes } from "@mui/system";

const CartModal = () => {
  const {
    openModal,
    setOpenModal,
    currentCart,
    setCurrentCart,
    shopingList,
    setShopingList,
  } = useContext(contexts);
  const modalStyle = {
    display: "flex",
    width: "90%",
    height: "90%",
    margin: "0 auto",
    backgroundColor: "white",
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
  const closeModal = () => {
    setCurrentCart({});
    setOpenModal(false);
  };
  const shopingListHandle = () => {
    const uniqueIds = [];
    shopingList.map((item) => {
      if (item.id == currentCart.id) {
        item.count++;
      }
    });

    const newArr = [...shopingList, currentCart];

    const unique = newArr.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.id);

      if (!isDuplicate) {
        uniqueIds.push(element.id);

        return true;
      }

      return false;
    });
    setShopingList(unique);
    setCurrentCart({});
    setOpenModal(false);
  };
  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        display="flex"
        height="100vh"
        alignItems="center"
        sx={{ animation: `${spin} 1000ms` }}
      >
        <Box sx={modalStyle}>
          <img src={currentCart.url} style={{ height: "100%" }} alt="" />
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            py="30px"
            px="40px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              mb="40px"
            >
              <Typography fontSize="25px">{currentCart.description}</Typography>
              <Icon
                icon="carbon:close-outline"
                color="#e31717"
                width="50"
                height="50"
                cursor="pointer"
                onClick={closeModal}
              />
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              veritatis in unde quisquam perferendis dolor sint deleniti odio
              recusandae consequuntur beatae iste aspernatur id maxime quo
              soluta hic similique sit. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ab, veritatis in unde quisquam perferendis dolor
              sint deleniti odio recusandae consequuntur beatae iste aspernatur
              id maxime quo soluta hic similique sit.
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              px="7%"
              mt="40px"
            >
              <Typography>Price : ${currentCart.price}</Typography>
              <Button variant="contained" onClick={shopingListHandle}>
                Add To Card
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CartModal;
