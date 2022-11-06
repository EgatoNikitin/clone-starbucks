import {Link} from 'react-router-dom';

import '../PreviousOrders/PreviousOrders.scss';
import gif from '../../imgs/moon-phases.gif';

import {Header} from '../Header/Header';
import {MenuHeader} from '../MenuHeader/MenuHeader';
import {Footer} from '../Footer/Footer';
import {Buttons} from '../Buttons/Buttons';
import {StickyBottom} from '../StickyBottom/StickyBottom';


export const PreviousOrders = ()=>{
  return (
    <>
      <Header/>
      <MenuHeader/>
      <div className='PreviousOrders--wrapper'>
        <h1>Previous Orders</h1>
        <img src={gif}/>
        <h2>When history repeats itself</h2>
        <p>Previous orders will appear here to quickly order again.</p>
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


