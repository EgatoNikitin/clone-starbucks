import icon from '../../imgs/rewards/rew.png';
import './Rewards.scss';

export const Rewards = ()=>{
  return (
    <div className='rewards--wrapper'>
      <div className="stars--wrapper">
        <h2>Get your favorites for free</h2>
        <ul className="stars--list">
          <li className="stars--list-item">25
            <span>*</span></li>
          <li className="stars--list-item">50
            <span>*</span></li>
          <li className="stars--list-item">150
            <span>*</span></li>
          <li className="stars--list-item">200
            <span>*</span></li>
          <li className="stars--list-item">400
            <span>*</span></li>
        </ul>
      </div>
      <div className="change--block">
        <img src={icon}/>
        <div className="change--block-text">
          <h3>Customize your drink</h3>
          <p>Make your drink just right with an extra
              espresso shot, dairy substitute or a dash
               of your favorite syrup.</p>
        </div>
      </div>
    </div>
  );
};
