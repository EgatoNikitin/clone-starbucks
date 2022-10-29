import {useState} from 'react';
import './Rewards.scss';
import {RewardsCard} from '../RewardsCard/RewardsCard';
import {Buttons} from '../Buttons/Buttons';
import {RewardsSection} from '../RewardsSection/RewardsSection';
import {RewardsSectionItem} from '../RewardsSection/RewardsSectionItem';
import {REW} from '../../constants';
import {PasswordInput} from '../PasswordInput/PasswordInput';


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

      <div className='rewards-section3 '>
        <RewardsSection
          title={REW.section3.title}
          subtitle={REW.section3.subtitle}>
          <RewardsSectionItem array={REW.section3.arrayItem}/>
        </RewardsSection>
        <hr/>
      </div>

      <div className='rewards-section4 rewards-section'>
        <div className='rewards-title'>
          <h2>Star Codes</h2>
          <p>Yesssss. You’ve got Stars in your hand.
             Enter your code here and we’ll add Stars to your account.</p>
          <PasswordInput/>
          <Buttons type='light' text='Submit'/>
        </div>
        <div className='rewards-title'>
          <h2>Questions?</h2>
          <p>We want to help in any way we can. You can ask your barista
            anytime or we’ve answered the most commonly asked questions
          <a>right over here.</a></p>
        </div>
      </div>

      <div className='rewards-section5 rewards-section'>
        <h5>At participating stores. Restrictions apply.</h5>
        <div className='rewards-title-wrapper'>
          <div className='rewards-title'>
            <h4>EARNING STARS</h4>
            <p>Stars cannot be earned on purchases of alcohol,
            Starbucks Cards or Starbucks Card reloads.</p>
            <p>Earn 1 Star per $1 spent when you scan your member barcode
            in the app, then pay with cash, credit/debit cards or mobile
            wallets at participating stores. You can also earn 1 Star per
            $1 spent when you link a payment method and pay directly
            through the app.</p>
            <p>Earn 2 Stars per $1 spent when you load funds and pay with
            your digital Starbucks Card in the app. You can also earn
            2 Stars per $1 spent when you pay in-person at a participating
            store with your registered physical Starbucks Card or scan your
            member barcode in the app, and then use any physical Starbucks Card
            (regardless of whether it is registered) to complete
            the purchase.</p>
          </div>

          <div className='rewards-title'>
            <h4>TERMS OF USE</h4>
            <p>For full program details visit
            &nbsp;<a>starbucks.com/rewards/terms</a>.</p>
            <p>* Earn 1 Star per $1 when digitally loading your Starbucks Card
            with your Starbucks® Rewards Visa® Card: See your Card Rewards
            Program Agreement for more details.</p>
            <p>Starbucks® Rewards benefits are available at participating
            Starbucks stores. Not all stores have the ability to honor
            Rewards at this time. Visit the&nbsp;
            <a>Starbucks Store Locator</a>&nbsp;
             and search for locations honoring “Redeem Rewards”.</p>
            <p>Deposit and credit card products provided by JPMorgan
              Chase Bank, N.A. Member FDIC</p>
          </div>

          <div className='rewards-title'>
            <h4>BENEFITS</h4>
            <p>Free refills available during same in-store visit only.
            To qualify for the Birthday Reward, you must have made
            at least one Star-earning transaction.</p>
          </div>

          <div className='rewards-title'>
            <h4>REDEEMING REWARDS</h4>
            <p>Rewards cannot be redeemed for alcoholic beverages or
            multi-serve items. Not all stores honor tiered Rewards.
            Select stores redeem 150 Stars for free food or drink
            items only.</p>
          </div>
        </div>

      </div>
    </div>

  );
};
