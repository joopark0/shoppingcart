import gr86 from '../images/gr86model.jpeg';

const Item = () => {
  return (
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
  );
};

export default Item;
