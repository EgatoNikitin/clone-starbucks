import PropTypes from 'prop-types';
import './MenuCard.scss';


export const MenuCard = (
    {
      title,
      arrayOfItems,
      cardStyle,
      itemClickHandler,
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
              <div
                onClick={()=>itemClickHandler(el.icon, el.title)}
                className={`MenuCard--item ${cardStyle}`}
                key={index+el}>
                <img src={el.icon} alt='list icon'/>
                {el.title}
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
  cardStyle: PropTypes.string,
  itemClickHandler: PropTypes.func,
};
