import {Header} from '../../componentns/Header/Header';
import {FILTERS} from '../../constants';

import Shoper from '../../imgs/shoper.svg';
import Downicon from '../../imgs/downicon.svg';

import './MenuPage.scss';
import {Footer} from '../../componentns/Footer/Footer';
import {FilterList} from '../../componentns/FilterList/FilterList';
import {MenuCard} from '../../componentns/MenuCard/MenuCard';

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
        <div className='main--container'>
          <div className='filter--container'>
            {FILTERS.map((el, index)=> {
              return <FilterList
                key={index}
                title={el.title}
                arrayOfItems={el.listOfItems} />;
            })}
          </div>
          <div className='menu--container'>
            <h2>Menu</h2>
            {FILTERS.map((el, index)=> {
              return <MenuCard
                key={index}
                url={el.url}
                title={el.title}
                arrayOfItems={el.listOfItems} />;
            })}
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
          <img className='arrow-down' src={Downicon}></img>
        </div>
        <img src={Shoper}></img>
      </div>
    </div>
  );
};
export default MainPage;
