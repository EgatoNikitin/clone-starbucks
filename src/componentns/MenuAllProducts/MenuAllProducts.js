/* eslint-disable max-len */
import {Header} from '../Header/Header';
import {FILTERS, CATEGORIES} from '../../constants';

import Shoper from '../../imgs/shoper.svg';
import Downicon from '../../imgs/downicon.svg';

import './MenuAllProducts.scss';
import {Footer} from '../Footer/Footer';
import {FilterList} from '../FilterList/FilterList';
import {MenuCard} from '../MenuCard/MenuCard';
import {useEffect, useState} from 'react';
import {ItemModal} from '../ItemModal/ItemModal';
import {Link} from 'react-router-dom';

export const MenuAllProducts = () => {
  const [activeFilter, setActiveFilter] = useState(
      sessionStorage.getItem('activeFilter') ||
    'Menu');
  const [selectedItem, setSelectedItem] = useState('' ||
    sessionStorage.getItem('item'));
  const [imgPath, setImgPath] = useState(sessionStorage.getItem('path'));
  const [isOpen, setIsOpen] = useState(
      JSON.parse(sessionStorage.getItem('isOpenItem')) ||
    false,
  );
  const cardStyle = activeFilter==='Menu' ? 'row' : 'column';

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [activeFilter, selectedItem]);

  const itemClickHandler = (path, name) =>{
    setImgPath(path);
    setIsOpen(true);
    setSelectedItem(name);
    sessionStorage.setItem('item', name);
    sessionStorage.setItem('path', path);
    sessionStorage.setItem('isOpenItem', 'true');
  };

  const itemCloseClickHanlder = () => {
    setIsOpen(false);
    sessionStorage.setItem('isOpenItem', 'false');
    sessionStorage.setItem('activeFilter', activeFilter);
  };
  return (
    <div className='main--wrapper'>
      <Header
        setActiveFilter={setActiveFilter} />
      {
        !isOpen ? (
            <><ul className='top--list'>
              <Link to='/menu'><li className='top--list-item'>All products</li></Link>
              <Link to='/menu/featured'><li className='top--list-item'>Featured</li></Link>
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
                </div><div className='menu--container'>
                  <h1>{activeFilter}</h1>
                  {CATEGORIES[activeFilter].map((el, index)=> {
                    return <MenuCard
                      cardStyle={cardStyle}
                      key={index}
                      url={el.url}
                      title={el.title}
                      arrayOfItems={el.listOfItems}
                      itemClickHandler={itemClickHandler}
                    />;
                  })}
                </div>
              </div>
            </main>
            </>
        ) : (
            <ItemModal
              iconPath={imgPath}
              activeFilter={activeFilter}
              itemClick={itemCloseClickHanlder}
              selectedItem={selectedItem}
            />
        )
      }
      <Footer />
      <div className='sticky--bottom'>
        <div className='sticky--bottom-content'>
          <div className='span--container'>
            <span>For item availability</span>
            <span>Choose a store</span>
          </div>
          <img className='arrow-down' src={Downicon} alt='arrow down'></img>
        </div>
        <img src={Shoper} alt='shoper'></img>
      </div>
    </div>
  );
};
