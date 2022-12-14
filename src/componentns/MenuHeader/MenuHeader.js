import {NavLink} from 'react-router-dom';
import './MenuHeader.scss';

export const MenuHeader = ()=>{
  return (
    <div className='top--list-wrapper'>
      <ul className='top--list'>
        <NavLink to='/menu'
          className={({isActive}) =>
            (isActive ? 'navLinkMenu': 'nav-link' )}
          end={true}
        ><li className='top--list-item'>All products</li></NavLink>
        <NavLink to='/menu/featured' className={({isActive}) =>
          (isActive ? 'navLinkMenu': 'nav-link' )}
        end={true}
        ><li className='top--list-item'>Featured</li></NavLink>
        <NavLink to='/menu/previous' className={({isActive}) =>
          (isActive ? 'navLinkMenu': 'nav-link' )}
        end={true}><li className='top--list-item'>Previous Orders</li></NavLink>
        <NavLink to='/menu/favorite' className={({isActive}) =>
          (isActive ? 'navLinkMenu': 'nav-link' )}
        end={true}><li
            className='top--list-item'>Favorite Products</li></NavLink>
      </ul>
    </div>
  );
};
