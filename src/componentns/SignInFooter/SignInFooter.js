import {Buttons} from '../Buttons/Buttons';
import './SignInFooter.scss';

export const SignInFooter = () =>{
  return (
    <footer className='login-footer'>
      <div className='footer--wrapper'>
        <div className='footer--row'>
          <Buttons type='green' text='Find a store'/>
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

        <div>
                © 2022 Starbucks
        </div>
      </div>
    </footer>
  );
};
