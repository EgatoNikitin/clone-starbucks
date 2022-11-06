import {Header} from '../Header/Header';
import {FILTERS, CATEGORIES} from '../../constants';

import './MenuAllProducts.scss';
import {Footer} from '../Footer/Footer';
import {FilterList} from '../FilterList/FilterList';
import {MenuCard} from '../MenuCard/MenuCard';
import {useEffect, useState} from 'react';
import {ItemModal} from '../ItemModal/ItemModal';
import {MenuHeader} from '../MenuHeader/MenuHeader';
import {StickyBottom} from '../StickyBottom/StickyBottom';

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
            <>
              <MenuHeader/>
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
      <StickyBottom/>
    </div>
  );
};
