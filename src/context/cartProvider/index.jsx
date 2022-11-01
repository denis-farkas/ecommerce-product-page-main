import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let currentCart = JSON.parse(localStorage.getItem('cart'));

  useEffect(() => {
    if (currentCart) {
      setCart(currentCart);
    }
  }, []); //the empty array ensures useEffect only runs once

  const addItem = (item) => {
    let cartCopy = [...cart];
    cartCopy.push(item);
    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem('cart', stringCart);
  };

  const removeItem = (id_article) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.id_article !== id_article);

    //update state and local
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;

CartProvider.propType = {
  children: PropTypes.node.isRequired,
};
