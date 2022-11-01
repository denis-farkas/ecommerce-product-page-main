import { useContext } from 'react';
import UserContext from '../../context/userProvider';
import './cart.css';
import useModal from '../../hooks/useModal.jsx';
import ModalCart from '../ModalCart';

const Cart = () => {
  const { user } = useContext(UserContext);
  const { avatar } = user;
  const { isShowing, toggle, reload } = useModal();

  return (
    <>
      <div className="cart">
        <img
          className="small-cart"
          src="images/icon-cart.svg"
          alt="shopping cart"
          onClick={toggle}
        />

        <img
          className="avatar"
          src={`images/${avatar}`}
          alt="avatar"
          onClick={toggle}
        />
      </div>
      <div className="rootModal">
        <ModalCart isShowing={isShowing} hide={toggle && reload} />
      </div>
    </>
  );
};

export default Cart;
