import ModelList from './ModelList';

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
      <ModelList
        addToCartCounter={addToCartCounter}
        setCart={setCart}
      ></ModelList>
    </div>
  );
};

export default Store;
