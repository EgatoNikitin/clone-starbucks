import {Routes, Route} from 'react-router';
import './App.css';
import LoginPage from './page/LoginPage/LoginPage';
import MainPage from './page/MainPage/MainPage';
import MenuPage from './page/MenuPage/MenuPage';
import GiftcardPage from './page/GiftcardPage/GiftcardPage';
import RewardsPage from './page/RewardsPage/RewardsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/giftcard' element={<GiftcardPage />} />
      <Route path='/revards' element={<RewardsPage />} />
    </Routes>
  );
};

export default App;
