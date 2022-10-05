import {Routes, Route} from 'react-router';
import './App.css';
import LoginPage from './page/LoginPage/LoginPage';
import MainPage from './page/MainPage/MainPage';
import MenuPage from './page/MenuPage/MenuPage';
import GiftcardPage from './page/GiftcardPage/GiftcardPage';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/giftcard' element={<GiftcardPage />} />
    </Routes>
  );
};

export default App;
