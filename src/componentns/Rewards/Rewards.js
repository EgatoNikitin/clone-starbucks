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
      </div>



    </div>
  );
};
