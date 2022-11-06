import {MenuAllProducts}
  from '../../componentns/MenuAllProducts/MenuAllProducts';
import {Routes, Route} from 'react-router';
import {FeaturedCard} from '../../componentns/FeaturedCard/FeaturedCard';

const MenuPage = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MenuAllProducts/>}/>
        <Route path='/featured' element={<FeaturedCard/>} />
      </Routes>
    </>

  );
};
export default MenuPage;
