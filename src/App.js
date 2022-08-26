import {Routes, Route} from 'react-router';
import './App.css';
import LoginPage from './page/LoginPage/LoginPage';
import MainPage from './page/MainPage/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
  );
};

export default App;
