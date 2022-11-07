import { useContext } from 'react';
import UserContext from '../../context/userProvider';
import CartContext from '../../context/cartProvider';
import './cart.css';
import './mobile-cart.css';

const Cart = () => {
  const { user } = useContext(UserContext);
  const { avatar } = user;
  const {
    state: { cart },
  } = useContext(CartContext);

  function toggle() {
    const element = document.querySelector('.shopping');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  return (
    <>
      <div className="cart">
        <img
          className="small-cart"
          src="images/icon-cart.svg"
          alt="shopping cart"
          onClick={toggle}
        />
        <div className="badge">{cart.length}</div>
        <img
          className="avatar"
          src={`images/${avatar}`}
          alt="avatar"
          onClick={toggle}
        />
      </div>
    </>
  );
};

export default Cart;
