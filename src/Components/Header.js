import shoppingcart from '../images/shopping-cart.png';

const Header = () => {
  return (
    <div>
      <div className="header-box">
        <nav className="logo-top">LOGO</nav>
        <nav className="nav-bar">
          <button className="nav-buttons">Home</button>
          <button className="nav-buttons">Store</button>
          <button className="nav-buttons">About Us</button>
          <button className="nav-buttons">Contact Us</button>
        </nav>
        <button className="shoppingcart">
          <img
            src={shoppingcart}
            alt="Shopping Cart"
            className="shoppingcartimg"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
