import '../FeaturedCard/FeaturedCard.scss';

import {Buttons} from '../Buttons/Buttons';
import {FEATURED_CARD} from '../../constants';
import {Header} from '../Header/Header';
import {MenuHeader} from '../MenuHeader/MenuHeader';
import {Footer} from '../Footer/Footer';

export const FeaturedCard = ()=>{
  return (
    <>
      <Header/>
      <MenuHeader/>
      <main className='featured-card'>
        {
          FEATURED_CARD.map(({text, title, url}, index)=>{
            return (
              <div key={index} className='featured-card--wrapper'>

                <img src={url} alt='cakes icon' className='featured-card--img'/>
                <div className='featured-card--text'>
                  <h4>{title}</h4>
                  <div>
                    {text}
                  </div>
                  <Buttons type='light' text='Order now' size='large'/>

                </div>
              </div>
            );
          },
          )}
      </main>
      <Footer/>
    </>
  );
};



