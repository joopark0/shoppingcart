import gr86 from '../images/gr86model.jpeg';

const Item = (props) => {
  const { addToCartCounter } = props;
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
          <div className="item-description">
            This model assembly kit recreates the 2021 Toyota GR 86 as a 1/24
            Sports Car Series product.
          </div>
          <button
            className="add-cart"
            onClick={() => {
              addToCartCounter(1);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="item-bottom-container">
        <h2>Description</h2>
        <span>
          While the lightweight front- engine and wide body with low center of
          gravity are carried over from the first generation 86 (2012), the
          Toyota GR 86 is powered by a bigger 2.4-liter horizontally opposed
          four-cylinder DOHC engine capable of 235hp for powerful performance.
          The aluminum engine hood, roof and front fenders are lightweight and
          rigid. This car also employs air outlets, side sill spoilers, and
          other parts to bring improved aerodynamic efficiency and steering
          responsiveness. • 1/24 scale plastic model assembly kit. Length:
          178mm, width: 74mm, height: 55mm. • The model recreates the air
          outlets, side sill spoilers, and the other aerodynamic parts for more
          realism. • Suspension detail features front strut and rear double
          wishbone systems. • Details such as a 2.4-liter horizontally opposed
          four-cylinder DOHC engine are faithfully depicted and the hood can be
          held open by a stay. • Differences from its sister car the BRZ (ZD8)
          are accurately captured: front bumper and lights, rear stabilizer
          direction, and more. • Wheels are paired with solid synthetic rubber
          tires.
        </span>
      </div>
    </div>
  );
};

export default Item;
