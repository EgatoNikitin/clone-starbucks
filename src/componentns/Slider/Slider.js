import PropTypes, {string} from 'prop-types';
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.scss';

export const Carusel = ({images, title}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 4,
  };

  return (
    <div className='slider--wrapper'>
      <div className='FEATUREDtitle'>
        <h4>{title}</h4>
        <a href='#'>See all</a>
      </div>
      <Slider {...settings}>
        {images.map((el, index)=>(
          <div className='slider--item' key={index+el}>
            <img src={el}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};
Carusel.propTypes ={
  title: PropTypes.string,
  images: PropTypes.arrayOf(string),
};
