import ReactDOM from 'react-dom';
import './modalCart.css';
import { useContext } from 'react';
import CartContext from '../../context/cartProvider';

const ModalCart = ({ isShowing, hide }) => {
  const { cart, removeItem } = useContext(CartContext);

  if (isShowing) {
    ReactDOM.createPortal(
      <div className="modalCart">
        {cart.map((item, i) => (
          <div key={i} className="product">
            <img src={`images/${item.image}`} alt="product" />
            <div className="present">
              <p className="name-product">{item.name}</p>
              <p className="price-quantity">
                {item.price}x {item.quantity} ${item.price * item.quantity}
              </p>
            </div>
            <button className="remove" onClick={removeItem}>
              <img src="images/icon-delete.svg" alt="delete" />
            </button>
          </div>
        ))}
        <button>Checkout</button>
      </div>,
      document.body
    );
  } else {
    return null;
  }
};

export default ModalCart;
