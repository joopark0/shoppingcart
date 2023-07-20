import { Link } from 'react-router-dom';
import brzimage from '../images/varisbrz.jpeg';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-banner">
        <div className="banner-text">Welcome to the Store!</div>
        <Link to="/Store">
          <button className="button-28">Shop Now</button>
        </Link>
      </div>
      <div className="popular-section">
        <div className="about-wrap">
          <img src={brzimage} alt="brzvaris" />
          <div className="about-desc">
            <h1>About Us</h1>
            <span>
              Welcome to the ultimate destination for all BRZ/GR86 track
              enthusiasts! At our web store, we're passionate about
              high-performance driving and dedicated to providing top-quality
              track parts and accessories to enhance your driving experience.
              Founded by a group of automotive enthusiasts, we understand the
              thrill of pushing your BRZ/GR86 to its limits on the track. Our
              mission is to offer a carefully curated selection of performance
              parts from leading brands, ensuring that you have access to the
              best products to optimize your vehicle's performance. Whether
              you're a seasoned track veteran or just starting your track day
              journey, our team of experts is here to assist you. We take pride
              in our personalized customer service, providing knowledgeable
              advice and recommendations to help you make the right choices for
              your specific needs and goals. Browse our extensive catalog to
              discover everything from suspension upgrades, brake kits, exhaust
              systems, and engine components, to aerodynamic enhancements and
              lightweight accessories. Every product we offer has been
              rigorously tested and proven to deliver exceptional results on the
              track. Join our growing community of BRZ/GR86 track enthusiasts
              and experience the thrill of owning a finely-tuned and race-ready
              machine. Let us be your trusted partner in elevating your driving
              performance and taking your track experience to new heights. Thank
              you for choosing us as your go-to destination for all your track
              parts needs!
            </span>
          </div>
        </div>
        <div className="about-whitespace"></div>
      </div>
    </div>
  );
};

export default HomePage;
