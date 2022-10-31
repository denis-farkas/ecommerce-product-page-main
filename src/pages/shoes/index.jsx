import { UserProvider } from '../../context/userProvider';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import { CookiesProvider } from 'react-cookie';
import { ArticleProvider } from '../../context/articleProvider';
import { CartProvider } from '../../context/cartProvider';
import './shoes.css';

function Shoes() {
  return (
    <CookiesProvider>
      <UserProvider>
        <CartProvider>
          <ArticleProvider>
            <div className="container">
              <Header />
              <div className="main">
                <div className="show">
                  <h1>Images</h1>
                </div>
                <div className="presentation">
                  <h1>Présentation</h1>
                </div>
              </div>
              <Footer />
            </div>
          </ArticleProvider>
        </CartProvider>
      </UserProvider>
    </CookiesProvider>
  );
}

export default Shoes;
