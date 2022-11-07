import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import Gallery from '../../componentes/Gallery';
import Presentation from '../../componentes/Presentation';
import Lightbox from '../../componentes/Lightbox';
import './shoes.css';
import './shoes-mobile.css';
function Shoes() {
  return (
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
      <div className="footer">
        <Footer />
      </div>
      <Lightbox />
    </div>
  );
}

export default Shoes;
