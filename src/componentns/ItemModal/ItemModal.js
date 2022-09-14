import PropTypes from 'prop-types';

import './ItemModal.scss';

export const ItemModal = ({
  iconPath,
  activeFilter,
  itemClick,
  selectedItem,
})=>{
  return (
    <div>
      <div className='top--list active--catagori'>
        <h2 onClick={()=>itemClick()}>
          {`Menu/ ${activeFilter}/ ${selectedItem}`}
        </h2>
      </div>
      <div className='modal--item'>
        <img src={iconPath} alt='choosed item'/>
        <div className='item--text'>
          {selectedItem}
        </div>
      </div>
      <div className='item--customize'>
        <div className='customize--column'>
          <h4> Size options</h4>
          <div className='options--list'>
            <div className='active'/>
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className='customize--column'>
          <h4> Customization</h4>
        </div>
      </div>
    </div>
  );
};

ItemModal.propTypes = {
  iconPath: PropTypes.string,
  activeFilter: PropTypes.string,
  itemClick: PropTypes.func,
  selectedItem: PropTypes.string,
};
