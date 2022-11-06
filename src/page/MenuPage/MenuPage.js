import {MenuAllProducts}
  from '../../componentns/MenuAllProducts/MenuAllProducts';
import {Routes, Route} from 'react-router';
import {FeaturedCard} from '../../componentns/FeaturedCard/FeaturedCard';
import {PreviousOrders} from '../../componentns/PreviousOrders/PreviousOrders';


const MenuPage = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MenuAllProducts/>}/>
        <Route path='/featured' element={<FeaturedCard/>} />
        <Route path='/previous' element={<PreviousOrders/>} />
      </Routes>
    </>

  );
};
export default MenuPage;
