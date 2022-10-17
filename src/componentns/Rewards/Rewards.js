import {useState} from 'react';
import './Rewards.scss';
import {RewardsCard} from '../RewardsCard/RewardsCard';

export const Rewards = ()=>{
  const [price, setPrice]=useState('25');

  // Если будуте вставлять картинку вместо текста
  // то .slice(0,-1) необходимо удалить
  const handleSelect = (value)=>{
    setPrice(value.slice(0, -1));
  };

  const getIsActive = (value)=>{
    if (value === price) {
      return 'active--price';
    }
  };

  return (
    <div className='rewards--wrapper'>
      <div className="stars--wrapper">
        <h2>Get your favorites for free</h2>
        <ul className="stars--list"
          onClick={(event)=>handleSelect(
              event.target.closest('li').textContent)}
        >
          <li className={`stars--list-item ${getIsActive('25')}`}>25
            <span>*</span></li>
          <li className={`stars--list-item ${getIsActive('50')}`}>50
            <span>*</span></li>
          <li className={`stars--list-item ${getIsActive('150')}`}>150
            <span>*</span></li>
          <li className={`stars--list-item ${getIsActive('200')}`}>200
            <span>*</span></li>
          <li className={`stars--list-item ${getIsActive('400')}`}>400
            <span>*</span></li>
        </ul>
      </div>
      <RewardsCard price={price}/>
    </div>
  );
};
