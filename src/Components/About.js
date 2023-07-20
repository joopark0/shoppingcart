import brzimage from '../images/varisbrz.jpeg';
import brzbanner from '../images/brzbanner.jpeg';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-whitespace">
        <img src={brzbanner} alt="brztrackparts" />
      </div>
      <div className="about-wrap">
        <img src={brzimage} alt="brzvaris" />
        <div className="about-desc">test text</div>
      </div>
      <div className="about-whitespace"></div>
    </div>
  );
};

export default About;
