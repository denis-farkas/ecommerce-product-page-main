import { UserProvider } from '../../context/userProvider';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import { CookiesProvider } from 'react-cookie';
import { ArticleProvider } from '../../context/articleProvider';

function Shoes() {
  return (
    <CookiesProvider>
      <UserProvider>
        <ArticleProvider>
          <Header />
          <div>
            <h1>Voila</h1>
          </div>
          <Footer />
        </ArticleProvider>
      </UserProvider>
    </CookiesProvider>
  );
}

export default Shoes;
