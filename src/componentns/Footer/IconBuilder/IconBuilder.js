import PropTypes from 'prop-types';
import './IconBuilder.scss';

export const IconBuilder = ({url})=>{
  return (
    <div className='footer--icon-wrapper'>
      <img alt='footer-icon' src={url}/>
    </div>
  );
};

IconBuilder.propTypes = {
  url: PropTypes.string.isRequired,
};
