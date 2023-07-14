import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-banner">
        <div className="banner-text">Welcome to the Store!</div>
        <Link to="/Store">
          <button className="banner-shop">Shop Now</button>
        </Link>
      </div>
      <div className="popular-section"></div>
    </div>
  );
};

export default HomePage;
