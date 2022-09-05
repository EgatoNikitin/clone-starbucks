/* eslint-disable max-len */
import {Header} from '../../componentns/Header/Header';

// import {Icon} from '../../imgs/location.svg';

import './MenuPage.scss';
import {Footer} from '../../componentns/Footer/Footer';

const MainPage = () => {
  return (
    <div className='main--wrapper'>
      <Header />
      <ul className='top--list'>
        <li className='top--list-item'>All products</li>
        <li className='top--list-item'>Featured</li>
        <li className='top--list-item'>Previous Orders</li>
        <li className='top--list-item'>Favorite Products</li>
      </ul>
      <main>
        <div className='main--contant'>
          <div className='sort--container'>
            <ul className='lists--list'>
              <ul className='drinks--list'>Drinks
                <li className='drinks--list-item'>Hot Coffees</li>
                <li className='drinks--list-item'>Hot Teas</li>
                <li className='drinks--list-item'>Hot Drinks</li>
                <li className='drinks--list-item'>Frappuccino® Blended Beverages</li>
                <li className='drinks--list-item'>Cold Coffees</li>
                <li className='drinks--list-item'>Iced Teas</li>
                <li className='drinks--list-item'>Cold Drinks</li>
              </ul>
              <ul className='food--list'>Food
                <li className='food--list-item'>Hot Breakfast</li>
                <li className='food--list-item'>Bakery</li>
                <li className='food--list-item'>Lunch</li>
                <li className='food--list-item'>Snacks & Sweets</li>
                <li className='food--list-item'>Oatmeal & Yogurt</li>
              </ul>
              <ul className='homeCoffe--list'>At Home Coffee
                <li className='homeCoffe--list-item'>Whole Bean</li>
                <li className='homeCoffe--list-item'>VIA® Instant</li>
              </ul>
              <ul className='Merchandise--list'>Merchandise
                <li className='Merchandise--list-item'>Cold Cups</li>
                <li className='Merchandise--list-item'>Tumblers</li>
                <li className='Merchandise--list-item'>Mugs</li>
                <li className='Merchandise--list-item'>Water Bottles</li>
                <li className='Merchandise--list-item'>Other</li>
              </ul>
              <ul className='Cards--list'>Gift Cards
                <li className='Cards--list-item'>Happy Birthday</li>
                <li className='Cards--list-item'>Thank You</li>
                <li className='Cards--list-item'>Traditional</li>
              </ul>
            </ul>
          </div>
          <div className='card--container'>

          </div>
        </div>
      </main>
      <Footer />
      <div className='sticky--bottom'>
        <div className='sticky--bottom-content'>
          <div className='span--container'>
            <span>For item availability</span>
            <span>Choose a store</span>
          </div>
          <img src='#'></img>
        </div>
        <img src='#'></img>
      </div>
    </div>
  );
};
export default MainPage;
