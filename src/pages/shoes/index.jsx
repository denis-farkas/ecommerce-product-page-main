import { UserProvider } from '../../context/userProvider';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import { ArticleProvider } from '../../context/articleProvider';
import { CartProvider } from '../../context/cartProvider';
import './shoes.css';
import Gallery from '../../componentes/Gallery';
import Presentation from '../../componentes/Presentation';

function Shoes() {
  return (
    <UserProvider>
      <CartProvider>
        <ArticleProvider>
          <div className="container">
            <Header />
            <div className="main">
              <div className="show">
                <Gallery />
              </div>
              <div className="presentation">
                <Presentation />
              </div>
            </div>
            <Footer />
          </div>
        </ArticleProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default Shoes;
