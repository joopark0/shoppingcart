import gr86 from '../images/gr86model.jpeg';

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
      <div className="item-section-container">
        <div className="item-top-container">
          <div className="item-image-container">
            <img src={gr86} alt="GR86" />
          </div>
          <div className="item-info-container">
            <div className="item-name">
              <h1>GR86 Model</h1>
            </div>
          </div>
        </div>
        <div className="item-bottom-container"></div>
      </div>
    </div>
  );
};

export default Store;
