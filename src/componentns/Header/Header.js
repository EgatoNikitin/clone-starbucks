/* eslint-disable max-len */
import {Link} from 'react-router-dom';

import starBucksIcon from '../../imgs/starbucks.png';
import locationPin from '../../imgs/location.svg';
import './Header.scss';
import {Buttons} from '../Buttons/Buttons';

export const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img
          src={starBucksIcon}
          alt='starbucks icon'
          className='header-icon' />
      </Link>
      <div className='header--wrapper'>

        <div className='header--right'>
          <nav className='header--navigation'>
            <ul className='navigation--list'>
              <Link to='/menu'><li className='navigation--list--item'>menu</li></Link>
              <li className='navigation--list--item'>rewards</li>
              <li className='navigation--list--item'>gift cards</li>
            </ul>
          </nav>
        </div>
        <div className='header--left'>
          <div className='header--location'>
            <img src={locationPin}
              alt='location-pin'
              className='location--pin' />
            <span className='location--text'>Find a store</span>
          </div>
          <Link to='/login'>
            <Buttons type='light' text='Sign in' />
          </Link>
          <Link to='/login'>
            <Buttons type='black' text='Join now' />
          </Link>
        </div>
      </div>
    </header>
  );
};
