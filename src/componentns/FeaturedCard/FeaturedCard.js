import '../FeaturedCard/FeaturedCard.scss';

import {Buttons} from '../Buttons/Buttons';
import {FEATURED_CARD} from '../../constants';

export const FeaturedCard = ()=>{
  return (
    <main className='featured-card'>
      {
        FEATURED_CARD.map(({text, title, url}, index)=>{
          return (
            <div key={index} className='featured-card--wrapper'>
              <div className='featured-card--img'>
                <img src={url} alt='cakes icon'/>
              </div>
              <div className='featured-card--text'>
                <h4>{title}</h4>
                <div>
                  {text}
                </div>
                <Buttons type='light' text='' size='large'/>
              </div>
            </div>
          );
        },
        )}
    </main>
  );
};



