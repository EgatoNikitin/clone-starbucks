import {Suspense} from 'react';
import {Header} from '../../componentns/Header/Header';

import './MainPage.scss';
import {Footer} from '../../componentns/Footer/Footer';
import {MainContent} from '../../componentns/MainContent/MainContent';

const MainPage = ()=>{
  return (
    <div className='main--wrapper'>
      <Header/>
      <Suspense fallback='...loading'>
        <MainContent/>
      </Suspense>
      <Footer/>
    </div>
  );
};
export default MainPage;
