import {Link} from 'react-router-dom';

import starBucksIcon from '../../imgs/starbucks.png';
import locationPin from '../../imgs/location.svg';
import './Header.scss';
import {Buttons} from '../Buttons/Buttons';

export const Header = ()=>{
  return (
    <header className='header'>
      <Link to='/'>
        <img src={starBucksIcon} alt='starbucks icon' className='header-icon'/>
      </Link>
      <nav className='header--navigation'>
        <ul className='navigation--list'>
          <li className='navigation--list--item'>menu</li>
          <li className='navigation--list--item'>rewards</li>
          <li className='navigation--list--item'>gift cards</li>
        </ul>
      </nav>
      <div className='header--location'>
        <img src={locationPin} alt='location-pin' className='location--pin'/>
        <span className='location--text'>Find a store</span>
      </div>
      <Buttons type='light' text='Sign in'/>
      <Buttons type='black' text='Join now'/>
    </header>
  );
};