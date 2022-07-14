import { createContext, useRef, useState } from "react";

// Store
export const contexts = createContext({
  openModal: false,
  setOpenModal: () => {},
  currentCart: {},
  setCurrentCart: () => {},
  shopingList: [],
  setShopingList: () => {},
  cartList: [],
  setCartList: () => {},
  order: '',
  setOrder: () => {},
  filter: '',
  setFilter: () => {},
  procced: false,
  setProcced: () => {},
});

// Provider
const ContextsProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentCart, setCurrentCart] = useState({});
  const [shopingList, setShopingList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [order, setOrder] = useState('');
  const [filter, setFilter] = useState('');
  const [procced, setProcced] = useState(false);
  return (
    <contexts.Provider
      value={{
        openModal,
        setOpenModal,
        currentCart,
        setCurrentCart,
        shopingList,
        setShopingList,
        order,
        setOrder,
        filter,
        setFilter,
        cartList,
        setCartList,
        procced,
        setProcced,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextsProvider;
