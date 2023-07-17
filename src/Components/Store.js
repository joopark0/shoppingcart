import Item from './Item';

const Store = (props) => {
  const { addToCartCounter, setCart } = props;
  return (
    <div className="store-container">
      <div className="menu-section-container">
        <div className="menu-whitespace"></div>
        <div className="menu-category-container">
          {/* <div className="menu-category">Clothing</div>
          <div className="menu-category">Accessory</div> */}
          <div className="menu-category active">Models</div>
        </div>
        <div className="menu-whitespace-bottom"></div>
      </div>
      <Item addToCartCounter={addToCartCounter} setCart={setCart} />
    </div>
  );
};

export default Store;
