import {Suspense} from 'react';
import {Header} from '../../componentns/Header/Header';

import './MainPage.scss';
import {Footer} from '../../componentns/Footer/Footer';
import {MainContent} from '../../componentns/MainContent/MainContent';
import {FeaturedCard} from '../../componentns/FeaturedCard/FeaturedCard';


// Проставьте себе тут компоненту с чашкой и в других страницах.
// Компонету нужно передать пропсом в fallback
const MainPage = ()=>{
  return (
    <div className='main--wrapper'>
      <Header/>
      <Suspense fallback='...loading'>
        <FeaturedCard/>
        <MainContent/>
      </Suspense>
      <Footer/>
    </div>
  );
};
export default MainPage;
