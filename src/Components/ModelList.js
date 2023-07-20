import gr86 from '../images/gr86model.jpeg';
import { Link } from 'react-router-dom';

const ModelList = (props) => {
  return (
    <div className="list-container">
      <div className="item-list">
        <Link to="/Store/gr86">
          <img src={gr86} alt="GR86 Model" />
        </Link>
        <Link to="/Store/gr86">
          <img src={gr86} alt="GR86 Model" />
        </Link>
        <Link to="/Store/gr86">
          <img src={gr86} alt="GR86 Model" />
        </Link>
      </div>
    </div>
  );
};

export default ModelList;
