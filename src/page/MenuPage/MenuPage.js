import {MenuAllProducts}
  from '../../componentns/MenuAllProducts/MenuAllProducts';
import {Routes, Route} from 'react-router';
import {FeaturedCard} from '../../componentns/FeaturedCard/FeaturedCard';
import {PreviousOrders} from '../../componentns/PreviousOrders/PreviousOrders';
import {FavoriteProducts} from
  '../../componentns/FavoriteProducts/FavoriteProducts';


const MenuPage = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MenuAllProducts/>}/>
        <Route path='/featured' element={<FeaturedCard/>} />
        <Route path='/previous' element={<PreviousOrders/>} />
        <Route path='/favorite' element={<FavoriteProducts/>} />
      </Routes>
    </>

  );
};
export default MenuPage;
