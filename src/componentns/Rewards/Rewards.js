import './Rewards.scss';
import {REW} from '../../constants/index';

export const Rewards = ({
  title,
  image,
  text,
  array,
})=>{
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
        {
          array.map((el, index)=> {
            return (
              <img src={el.image} alt="#"/>
        <div className="change--block-text"
          onClick={()=>itemClickHandler(el.icon, el.title)}
          key={index+el}>
          <h3>{el.title}</h3>
          <p>{el.text}</p>
        </div>
            );
          })
        }
      </div>
    </div>
  );
};
