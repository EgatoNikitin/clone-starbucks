import {Routes, Route} from 'react-router';
import './App.css';
import LoginPage from './page/LoginPage/LoginPage';
import MainPage from './page/MainPage/MainPage';
import MenuPage from './page/MenuPage/MenuPage';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path='/menu' element={<MenuPage />} />
    </Routes>
  );
};

export default App;
