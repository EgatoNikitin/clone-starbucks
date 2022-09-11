import PropTypes from 'prop-types';
import './MenuCard.scss';


export const MenuCard = (
    {
      title,
      arrayOfItems,
      url,
    },
) =>{
  return (
    <section className="MenuCard--wrapper">
      <h2 className="MenuCard--title">
        {title}
      </h2>
      <div className='menu--card-wrapper'>
        {
          arrayOfItems.map((el, index)=> {
            return (
              <div className='MenuCard--item' key={index+el}>
                <img src={url}/>
                {el}
              </div>
            );
          })
        }</div>
    </section>
  );
};

MenuCard.propTypes ={
  title: PropTypes.string,
  arrayOfItems: PropTypes.any,
  url: PropTypes.any,
};
