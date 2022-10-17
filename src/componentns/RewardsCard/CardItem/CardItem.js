import PropTypes from 'prop-types';

export const CardItem = ({icon, title, text})=>{
  return (
    <div className="change--block">
      <div className='change--block-wrapper'>
        <img src={icon} alt='rewards icon'/>
        <div className="change--block-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
