import PropTypes from 'prop-types';

import './ItemModal.scss';
import {useState} from 'react';
import {FiltersModal} from '../FiltersModal/FiltersModal';

export const ItemModal = ({
  iconPath,
  activeFilter,
  itemClick,
  selectedItem,
})=>{
  const arrayOfSizes = [
    {
      title: 'short',
      description: '8 fl oz',
    },
    {
      title: 'tall',
      description: '12 fl oz',
    },
    {
      title: 'grande',
      description: '16 fl oz',
    },
    {
      title: 'venti',
      description: '20 fl oz',
    },
  ];

  const [activeSize, setActiveSize] = useState(0);
  const [isModalOpen, setModalIsOpen] = useState(false);

  const handleActiveSize = (index) =>{
    setActiveSize(index);
  };

  return (
    <div id='item-modal'>
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
        <div className='customize--column size--option'>
          <h4> Size options</h4>
          <div className='options--list'>
            {
              arrayOfSizes.map(({title, description}, index) => {
                const className = activeSize === index ?
                    `${title} active ` :
                    `${title}`;
                return (
                  <div className='cup--wrapper'
                    key={index}>
                    <div
                      className={className}
                      onClick={()=> handleActiveSize(index)}/>
                    <h3 className='cup--title'>{title}</h3>
                    <div>{description}</div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className='customize--column column-height'>
          <h4> Customization</h4>
          <FiltersModal isOpen={isModalOpen}
            setIsOpen={setModalIsOpen}/>
          <div
            className='customize--items'
            onClick={()=>setModalIsOpen(true)}>
            <span>Flavors</span><span>Edit</span>
          </div>
          <div
            className='customize--items'
            onClick={()=>setModalIsOpen(true)}>
            <span>
            Toppings
            </span>
            <span>Edit</span>
          </div>
          <div
            className='customize--items'
            onClick={()=>setModalIsOpen(true)}>
            <span>Tea</span>
            <span>Edit</span>
          </div>
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
