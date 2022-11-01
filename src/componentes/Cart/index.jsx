import { useContext } from 'react';
import CartContext from '../../context/cartProvider';
import UserContext from '../../context/userProvider';
import './cart.css';

const Cart = () => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const { avatar } = user;

  function showCart() {}

  return (
    <div className="cart">
      <img
        className="small-cart"
        src="images/icon-cart.svg"
        alt="shopping cart"
        onClick={showCart}
      />

      <img
        className="avatar"
        src={`images/${avatar}`}
        alt="avatar"
        onClick={showCart}
      />
    </div>
  );
};

export default Cart;
