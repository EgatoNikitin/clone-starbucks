import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

import starBucksIcon from '../../imgs/starbucks.png';
import locationPin from '../../imgs/location.svg';
import './Header.scss';
import {Buttons} from '../Buttons/Buttons';

export const Header = ({setActiveFilter}) => {
  const location = useLocation();
  const headerClassName = location.pathname.includes('/menu') ?
  'header no-margin' : 'header';
  return (
    <header className={headerClassName}>
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
              <Link to='/menu'>
                <li onClick={()=>
                  setActiveFilter('Menu')
                }
                className='navigation--list--item'>menu</li>
              </Link>
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
Header.propTypes ={
  setActiveFilter: PropTypes.func,
};
