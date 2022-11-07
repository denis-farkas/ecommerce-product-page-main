import { useReducer, createContext } from 'react';
import { cartReducer } from '../Reducers';
import PropTypes from 'prop-types';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;

CartProvider.propType = {
  children: PropTypes.node.isRequired,
};
