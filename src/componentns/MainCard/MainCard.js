import {Buttons} from '../Buttons/Buttons';

import './MainCard.scss';
import PropTypes from 'prop-types';

export const MainCard = (
    {
      text,
      title,
      url,
      direction = 'left',
      buttonText,
    })=>{
  return (
    <div className={`main-card--wrapper ${direction}`}>
      <div className='main-card--description'>
        <div className='centred-block'>
          <h4>{title}</h4>
          <div className='description--text'>
            {text}
          </div>
          <Buttons type='light' text={buttonText} size='large'/>
        </div>
      </div>
      <div className='main-card--img'>
        <img src={url} alt='cakes icon'/>
      </div>
    </div>
  );
};

MainCard.propTypes ={
  direction: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  buttonText: PropTypes.string,
};
