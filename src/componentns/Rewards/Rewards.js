import {useState} from 'react';
import './Rewards.scss';
import {RewardsCard} from '../RewardsCard/RewardsCard';
import {Buttons} from '../Buttons/Buttons';
import {RewardsSection} from '../RewardsSection/RewardsSection';
import {RewardsSectionItem} from '../RewardsSection/RewardsSectionItem';
import {REW} from '../../constants';


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

      <RewardsSection
        title={REW.section1.title}
        subtitle={REW.section1.subtitle}>
        <RewardsSectionItem array={REW.section1.arrayItem}/>
      </RewardsSection>

      <section className='rewards-section'>
        <div className='rewards-title'>
          <h2>Getting started is easy</h2>
          <p>Earn Stars and get rewarded in a few easy steps.</p>
        </div>
        <div className='rewards-steps'>
          <div className='rewards-item'>
            <span>1</span>
            <h3>Create an account</h3>
            <p>To get started, <a>join now</a>. You can also&nbsp;
              <a>join in the app</a>&nbsp;
              to get access to the full range of Starbucks®
              Rewards benefits.</p>
          </div>
          <div className='rewards-item'>
            <span>2</span>
            <h3>Order and pay how you’d like</h3>
            <p>Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.
              &nbsp;<a>Learn how</a></p>
          </div>
          <div className='rewards-item'>
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

      <RewardsSection
        title={REW.section2.title}
        subtitle={REW.section2.subtitle}>
        <RewardsSectionItem array={REW.section2.arrayItem}/>
      </RewardsSection>

      <section className='rewards-section2 rewards-section'>
        <div className='rewards-title'>
          <h2>Endless Extras</h2>
          <p>Joining Starbucks® Rewards means unlocking access
             to exclusive benefits. Say hello to easy ordering,
             tasty Rewards and—yes, free coffee.</p>
        </div>
        <div className='rewards-steps'>
          <div className='rewards-item'>
            <img src={require('../../imgs/rewards/freebies.png')}/>
            <h3>Fun freebies</h3>
            <p>Not only can you earn free coffee, look forward
               to a birthday treat plus coffee and tea refills.</p>
            <a>Learn more</a>
          </div>
          <div className='rewards-item'>
            <img src={require('../../imgs/rewards/order.png')}/>
            <h3>Order & pay ahead</h3>
            <p>Enjoy the convenience of in-store, curbside
               or drive-thru pickup at select stores.</p>
            <a>Learn more</a>
          </div>
          <div className='rewards-item'>
            <img src={require('../../imgs/rewards/free.png')}/>
            <h3>Get to free faster</h3>
            <p>Earn Stars even quicker with Bonus Star challenges,
               Double Star Days and exciting games.</p>
            <a>Learn more</a>
          </div>
        </div>
      </section>
      <RewardsSection
        title={REW.section3.title}
        subtitle={REW.section3.subtitle}>
        <RewardsSectionItem array={REW.section3.arrayItem}/>
      </RewardsSection>
      <section className='rewards-section3 rewards-section'>

        <div className='rewards-title'>
          <h2>Cash or card, you earn Stars</h2>
          <p>No matter how you pay, you can earn Stars with
             your morning coffee. Those Stars add up to
            (really delicious) Rewards.</p>
        </div>

        <div className='cash-card-steps rewards-steps'>
          <div className='rewards-item'>
            <h3>1★Star per dollar</h3>
            <p>Pay as you go</p>
          </div>
          <div className='rewards-item'>
            <img src={require('../../imgs/rewards/order.png')}/>
            <h3>Scan and pay separately</h3>
            <p>Use cash or credit/debit card at the register.</p>
          </div>
          <div className='rewards-item'>
            <img src={require('../../imgs/rewards/free.png')}/>
            <h3>Save payment in the app</h3>
            <p>Check-out faster by saving a credit/debit card
               or PayPal to your account. You’ll be able to order ahead
               or scan and pay at the register in one step.</p>
          </div>

          <div className='rewards-item'>
            <h3>2★Stars per dollar</h3>
            <p>Add funds in the app</p>
          </div>
          <div className='rewards-item'>
            <img src={require('../../imgs/rewards/order.png')}/>
            <h3>Preload</h3>
            <p>To save time and earn Stars twice as fast, add money
               to your digital Starbucks Card using any payment option.
               Scan and pay in one step or order ahead in the app.</p>
          </div>
          <div className='rewards-item'>
            <img src={require('../../imgs/rewards/free.png')}/>
            <h3>Register your gift card</h3>
            <p>Then use it to pay through the app. You can even consolidate
               balances from multiple cards in one place.</p>
          </div>

        </div>
      </section>


    </div>
  );
};
