import {Header} from '../../componentns/Header/Header';
import {FILTERS, CATEGORIES} from '../../constants';


import Shoper from '../../imgs/shoper.svg';
import Downicon from '../../imgs/downicon.svg';

import './MenuPage.scss';
import {Footer} from '../../componentns/Footer/Footer';
import {FilterList} from '../../componentns/FilterList/FilterList';
import {MenuCard} from '../../componentns/MenuCard/MenuCard';



import {useState} from 'react';

const MainPage = () => {
  const [activeFilter, setActiveFilter] = useState('Menu');
  const cardStyle = activeFilter==='Menu' ? 'row' : 'column';
  return (
    <div className='main--wrapper'>
      <Header
        setActiveFilter={setActiveFilter} />
      <ul className='top--list'>
        <li className='top--list-item'>All products</li>
        <li className='top--list-item'>Featured</li>
        <li className='top--list-item'>Previous Orders</li>
        <li className='top--list-item'>Favorite Products</li>
      </ul>
      <main className='main--menu'>
        <div className='main--container'>
          <div className='filter--container'>
            {FILTERS.map((el, index)=> {
              return <FilterList
                setActiveFilter = {setActiveFilter}
                key={index}
                title={el.title}
                arrayOfItems={el.listOfItems} />;
            })}
          </div>
          <div className='menu--container'>
            <h2>{activeFilter}</h2>
            {CATEGORIES[activeFilter].map((el, index)=> {
              return <MenuCard
                cardStyle={cardStyle}
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
