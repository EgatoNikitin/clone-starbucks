/* eslint-disable max-len */
import {MenuAllProducts} from '../../componentns/MenuAllProducts/MenuAllProducts';
// import {FeaturedCard} from '../../componentns/FeaturedCard/FeaturedCard';
import {Header} from '../../componentns/Header/Header';
import {Routes, Route} from 'react-router';

const MenuPage = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MenuAllProducts/>} />
        <Route path='/menu/featured' exact element={<Header/>} />
      </Routes>
    </>

  );
};
export default MenuPage;
