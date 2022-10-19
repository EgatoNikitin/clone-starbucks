import {useState} from 'react';
import './Rewards.scss';
import {RewardsCard} from '../RewardsCard/RewardsCard';
import {Buttons} from '../Buttons/Buttons';

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
      <div className='rewards--header'>
        <h1>Starbucks® Rewards</h1>
      </div>

      <section className='rewards--join'>
        <h2>FREE COFFEE <br/> IS A TAP AWAY</h2>
        <p>Join now to start earning Rewards.</p>
        <Buttons type='full-green' text='Join now'/>
        <p>Or <a>join in the app</a> for the best experience</p>
      </section>

      <section className='rewards--easy-started'>
        <div className='easy-started-title'>
          <h2>Getting started is easy</h2>
          <p>Earn Stars and get rewarded in a few easy steps.</p>
        </div>
        <div className='easy-started-steps'>
          <div className='easy-started-item'>
            <span>1</span>
            <h3>Create an account</h3>
            <p>To get started, join now. You can also join in the app 
              to get access to the full range of Starbucks® 
              Rewards benefits.</p>
          </div>
          <div className='easy-started-item'>
            <span>2</span>
            <h3>Order and pay how you’d like</h3>
            <p>Use cash, credit/debit card or save some time and pay right 
              through the app. You’ll collect Stars all ways. Learn how</p>
          </div>
          <div className='easy-started-item'>
            <span>3</span>
            <h3>Earn Stars, get Rewards</h3>
            <p>As you earn Stars, you can redeem them for Rewards—like 
              free food, drinks, and more. Start redeeming 
              with as little as 25 Stars!</p>
          </div>
        </div>
      </section>

      <div className="stars--wrapper">
        <h2>Get your favorites for free</h2>
        <ul className="stars--list"
          onClick={(event)=>handleSelect(
              event.target.closest('li').textContent)}
        >
          <li className={`stars--list-item ${getIsActive('25')}`}>25
            <span>★</span></li>
          <li className={`stars--list-item ${getIsActive('50')}`}>50
            <span>★</span></li>
          <li className={`stars--list-item ${getIsActive('150')}`}>150
            <span>★</span></li>
          <li className={`stars--list-item ${getIsActive('200')}`}>200
            <span>★</span></li>
          <li className={`stars--list-item ${getIsActive('400')}`}>400
            <span>★</span></li>
        </ul>
      </div>
      <RewardsCard price={price}/>
    </div>
  );
};
