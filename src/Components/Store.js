import Item from './Item';

const Store = () => {
  return (
    <div className="store-container">
      <div className="menu-section-container">
        <div className="menu-whitespace"></div>
        <div className="menu-category-container">
          <div className="menu-category">Clothing</div>
          <div className="menu-category">Accessory</div>
          <div className="menu-category">Models</div>
        </div>
        <div className="menu-whitespace-bottom"></div>
      </div>
      <Item />
    </div>
  );
};

export default Store;
