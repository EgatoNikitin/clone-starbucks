import PropTypes from 'prop-types';
import './FilterList.scss';

export const FilterList = (
    {
      title,
      arrayOfItems,
      setActiveFilter,
    },
) =>{
  return (
    <div className="filter--list-wrapper">
      <div className="filter--list-title">
        {title}
      </div>
      <ul>
        {
          arrayOfItems.map((el, index)=> {
            return (
              <li onClick={()=>setActiveFilter(el)}
                className='filter--list-item'
                key={index+el}>
                {el}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

FilterList.propTypes ={
  title: PropTypes.string,
  arrayOfItems: PropTypes.any,
  setActiveFilter: PropTypes.func,
};
