import { useEffect, useContext } from 'react';
import ArticleContext from '../../context/articleProvider';
import CartContext from '../../context/cartProvider';
import IncreaseButton from '../IncreaseButton';
import './presentation.css';

const Presentation = () => {
  let id = 1;
  const { article, getArticle } = useContext(ArticleContext);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getArticle(id);
  }, []);

  const { id_article, name, description, price, rebate, old_price } = article;

  if (id_article) {
    return (
      <div className="infos">
        <p className="legend">SNEAKER COMPANY</p>
        <h1 className="name">{name}</h1>
        <p className="descriptive">{description}</p>
        <p className="price">
          {price} <span className="rebate">{rebate}</span>
        </p>
        <p className="old-price">{old_price}</p>
        <div className="section-buttons">
          <IncreaseButton />
          <button className="add" onClick={addItem}>
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
