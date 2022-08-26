import iconError from '../../imgs/close.png';
import iconSuccess from '../../imgs/check.png';
import './Banner.scss';
import PropTypes from 'prop-types';

export const Banner = ({text, type}) => {
  return (
    <>
      {type === 'error' ? (
        <div className="banner--wrapper">
          <img src={iconError} alt="error icon" className="banner--icon" />
          <span className="banner--text">{text}</span>
        </div>
      ) : (
        <div className="banner--wrapper success">
          <img src={iconSuccess} alt="error icon" className="banner--icon" />
          <span className="banner--text">{text}</span>
        </div>
      )}
    </>
  );
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
