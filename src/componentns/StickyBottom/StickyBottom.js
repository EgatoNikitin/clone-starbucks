import Shoper from '../../imgs/shoper.svg';
import Downicon from '../../imgs/downicon.svg';

import './StickyBottom.scss';

export const StickyBottom = ()=>{
  return (
    <div className='sticky--bottom'>
      <div className='sticky--bottom-content'>
        <div className='span--container'>
          <span>For item availability</span>
          <span>Choose a store</span>
        </div>
        <img className='arrow-down' src={Downicon} alt='arrow down'></img>
      </div>
      <img src={Shoper} alt='shoper'></img>
    </div>
  );
};
