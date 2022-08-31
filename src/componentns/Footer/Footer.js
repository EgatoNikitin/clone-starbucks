import {IconBuilder} from './IconBuilder/IconBuilder';
import {ItemList} from './ItemList/ItemList';
import
{
  Facebook,
  Spotify,
  Instagram,
  Pintrest,
  Twitter,
  Youtube,
} from '../../imgs/footer-icon';
import {FOOTER_TITLES, FOOTER_LISTS} from '../../constants';

import './Footer.scss';

export const Footer = ()=>{
  const arrayOfIcon =
      [Spotify, Facebook, Pintrest, Instagram, Youtube, Twitter];
  return (
    <footer className='footer'>
      <div className='footer-list--wrapper'>
        <div className='list-column'>
          <ItemList type='title' text={FOOTER_TITLES.ABOUT_US}/>
          <ul className='list-of-item'>
            {FOOTER_LISTS.ABOUT_US.map(
                (el)=> <ItemList key={el} type='list' text={el}/>,
            )}
          </ul>
        </div>
        <div className='list-column'>
          <ItemList type='title' text={FOOTER_TITLES.CAREERS}/>
          <ul className='list-of-item'>
            {FOOTER_LISTS.CAREERS.map(
                (el)=> <ItemList key={el} type='list' text={el}/>,
            )}
          </ul>
        </div>
        <div className='list-column'>
          <ItemList type='title' text={FOOTER_TITLES.SOCIAL_IMPACT}/>
          <ul className='list-of-item'>
            {FOOTER_LISTS.SOCIAL_IMPACT.map(
                (el)=> <ItemList key={el} type='list' text={el}/>,
            )}
          </ul>
        </div>
        <div className='list-column'>
          <ItemList type='title' text={FOOTER_TITLES.BUSINESS}/>
          <ul className='list-of-item'>
            {FOOTER_LISTS.BUSINESS.map(
                (el)=> <ItemList key={el} type='list' text={el}/>,
            )}
          </ul>
        </div>
        <div className='list-column'>
          <ItemList type='title' text={FOOTER_TITLES.ORDER}/>
          <ul className='list-of-item'>
            {FOOTER_LISTS.ORDER.map(
                (el)=> <ItemList key={el} type='list' text={el}/>,
            )}
          </ul>
        </div>
      </div>
      <div className='footer--social-media'>
        <div className='social-media--list'>
          {arrayOfIcon.map((el, index)=>{
            return <IconBuilder url={el} key={index}/>;
          })}
        </div>
        <div className='social-media--rules'>
          <div>
            Privacy Policy
          </div>
          <span/>
          <div>
            Terms of Use
          </div>
          <span/>
          <div>
            CA Supply Chain Act
          </div>
          <span/>
          <div>
            Cookie Preferences
          </div>
        </div>
        <div className='social-media--copy-rights'>
          © 2022 Starbucks Coffee Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
