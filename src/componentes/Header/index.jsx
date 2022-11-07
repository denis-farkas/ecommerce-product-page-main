import Navigation from '../Navigation';
import ShopDropdown from '../ShopDropdown';
import Cart from '../Cart';
import './header.css';
import './header-mobile.css';

const Header = () => {
  function myFunction() {
    const x = document.getElementById('topnav');
    const back = document.getElementById('back');
    if (x.className === 'topnav') {
      back.classList.remove('notVisible');
      back.className += ' visible';
      x.className += ' responsive';
    } else {
      back.classList.remove('visible');
      back.className += ' notVisible';
      x.className = 'topnav';
    }
  }

  return (
    <>
      <div className="background" id="back"></div>
      <div className="header">
        <div className="header-left">
          <img
            className="menu-mobile"
            src="images/icon-menu.svg"
            alt="menu mobile"
            tabIndex={0}
            onClick={myFunction}
          />
          <img src="images/logo.svg" alt="logo" />
          <div className="topnav" id="topnav">
            <img
              className="close-mobile"
              src="images/icon-close.svg"
              alt="close mobile"
              tabIndex={4}
              onClick={myFunction}
            />
            <Navigation />
          </div>
        </div>
        <div className="header-right">
          <Cart />
        </div>
        <div className="shopping" style={{ display: 'none' }}>
          <ShopDropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
