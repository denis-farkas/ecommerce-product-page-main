import Navigation from '../Navigation';
import Cart from '../Cart';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="images/logo.svg" alt="logo" />
        <Navigation />
      </div>
      <div className="header-right">
        <Cart />
      </div>
    </div>
  );
};

export default Header;
