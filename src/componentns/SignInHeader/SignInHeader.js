import {Link} from 'react-router-dom';

import starBucksIcon from '../../imgs/starbucks.png';
import './SignInHeader.scss';

export const SignInHeader = ()=>{
  return (
    <header className='login-header'>
      <Link to='/'>
        <img src={starBucksIcon} alt='starbucks icon'/>
      </Link>
    </header>
  );
};
