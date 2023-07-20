import brzimage from '../images/varisbrz.jpeg';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-whitespace"></div>
      <div className="abount-wrap">
        <img src={brzimage} alt="brzvaris" />
        <div className="about-desc">test text</div>
      </div>
      <div className="about-whitespace"></div>
    </div>
  );
};

export default About;
