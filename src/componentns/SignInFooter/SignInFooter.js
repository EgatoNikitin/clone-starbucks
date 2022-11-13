import {Buttons} from '../Buttons/Buttons';
import './SignInFooter.scss';
import {Link} from 'react-router-dom';

export const SignInFooter = () =>{
  return (
    <footer className='login-footer'>
      <div className='footer--wrapper'>
        <div className='footer--row'>
          <Link to='/find'><Buttons type='green' text='Find a store'/></Link>
          <ul className='footer--list'>
            <li>
                        Web Accessibility
            </li>
            <li>
                        Privacy Policy
            </li>
            <li>
                        Terms of Use
            </li>
            <li>
                        Cookie Preferences
            </li>
          </ul>
        </div>

        <div className='bottom--copyrights'>
                © 2022 Starbucks
        </div>
      </div>
    </footer>
  );
};
