import {Link} from 'react-router-dom';

import '../PreviousOrders/PreviousOrders.scss';
import img from '../../imgs/fav-tapes.png';

import {Header} from '../Header/Header';
import {MenuHeader} from '../MenuHeader/MenuHeader';
import {Footer} from '../Footer/Footer';
import {Buttons} from '../Buttons/Buttons';
import {StickyBottom} from '../StickyBottom/StickyBottom';


export const FavoriteProducts = ()=>{
  return (
    <>
      <Header/>
      <MenuHeader/>
      <div className='PreviousOrders--wrapper'>
        <h1>Favorite Products</h1>
        <img src={img}/>
        <h2>Save your favorite mixes</h2>
        <p>Use the heart to save customizations.
           Your favorites will appear here to order again.</p>
        <Link to='/login'>
          <Buttons type='light' text='Sign in' />
        </Link>
        <Link to='/login'>
          <Buttons type='black' text='Join now' />
        </Link>
      </div>
      <Footer/>
      <StickyBottom/>
    </>
  );
};


