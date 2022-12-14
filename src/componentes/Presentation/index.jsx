import { useState, useContext } from 'react';
import ArticleContext from '../../context/articleProvider';
import CartContext from '../../context/cartProvider';
import './presentation.css';
import './mobile-presentation.css';

const Presentation = () => {
  const { article } = useContext(ArticleContext);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const {
    id_article,
    name,
    description,
    price,
    rebate,
    old_price,
    thumbnails,
  } = article;

  const [counter, setCounter] = useState(1);

  let shopCart = thumbnails && {
    id: cart.length + 1,
    name: name,
    price: price,
    image: thumbnails[0],
    quantity: counter,
  };

  const incrementCount = () => {
    setCounter(counter + 1);
  };
  const decrementCount = () => {
    setCounter((c) => Math.max(c - 1, 0));
  };

  if (id_article) {
    return (
      <div className="infos">
        <p className="legend">SNEAKER COMPANY</p>
        <h1 className="name">{name}</h1>
        <p className="descriptive">{description}</p>
        <div className="price-group">
          <p className="price">
            ${price} <span className="rebate">{rebate}</span>
          </p>
          <p className="old-price">${old_price}</p>
        </div>
        <div className="section-buttons">
          <div className="btn-group">
            <button className="btn btn-left" onClick={decrementCount}>
              <img src="images/icon-minus.svg" alt="minus" />
            </button>
            <button className="btn btn-center">{counter}</button>
            <button className="btn btn-right" onClick={incrementCount}>
              <img src="images/icon-plus.svg" alt="minus" />
            </button>
          </div>
          <button
            className="add"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: { shopCart },
              })
            }
          >
            <img
              className="cart-btn"
              src="images/icon-little-cart.svg"
              alt="cart"
            />
            Add to cart
          </button>
        </div>
      </div>
    );
  }
};

export default Presentation;
