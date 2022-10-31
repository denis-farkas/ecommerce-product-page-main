import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let localCart = localStorage.getItem('cart');

  useEffect(() => {
    let currentCart = JSON.parse(localCart);
    if (currentCart) {
      setCart(currentCart);
    }
  }, []); //the empty array ensures useEffect only runs once

  const addItem = (item) => {
    let cartCopy = [...cart];
    let { ID } = item;
    let existingItem = cartCopy.find((cartItem) => cartItem.ID === ID);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartCopy.push(item);
    }

    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem('cart', stringCart);
  };

  const updateItem = (itemID, amount) => {
    let cartCopy = [...cart];

    let existentItem = cartCopy.find((item) => item.ID === itemID);

    if (!existentItem) return;

    existentItem.quantity += amount;

    if (existentItem.quantity <= 0) {
      //remove item  by filtering it from cart array
      cartCopy = cartCopy.filter((item) => item.ID !== itemID);
    }

    //again, update state and localState
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  };

  const removeItem = (itemID) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.ID !== itemID);

    //update state and local
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;

CartProvider.propType = {
  children: PropTypes.node.isRequired,
};
