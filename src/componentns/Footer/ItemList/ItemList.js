import PropTypes from 'prop-types';
import './ItemList.scss';

export const ItemList = ({type, text})=>{
  return (
    <>
      {type === 'title'?
            (<div className='footer-list--title'>
              {text}
            </div>) :
            (
                <li className='footer-list--item'>
                  {text}
                </li>
            )
      }
    </>
  );
};

ItemList.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};
