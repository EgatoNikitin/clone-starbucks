import {Header} from '../../componentns/Header/Header';
import './GiftcardPage.scss';
import {Footer} from '../../componentns/Footer/Footer';
import {Carusel} from '../../componentns/Slider/Slider';
import img from '../../imgs/bulk-img.jpg';
import {GIFTCARD_FEATURED} from '../../constants/images';

const GiftcardPage = () => {
  return (
    <div className='main--wrapper'>
      <Header />
      <Carusel
        title='FEATURED'
        images={GIFTCARD_FEATURED} />
      <div className='GiftCard--banner'>
        <div className='GiftCard--banner-wrapper'>
          <h2>Got a gift card?</h2>
          <p>Earns 2★ per $1</p>
          <button className='baner-button' type='button'>Add or Reload</button>
          <button className='baner-button' type='button'>Check balance</button>
        </div>
        <a>Card Terms & Conditions</a>
      </div>
      <Carusel
        title='BIRTHDAY'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='THANK YOU'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='CELEBRATION'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='PSL'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='APPRECIATION'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='WORKPLACE'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='ENCOURAGEMENT'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='HALLOWEEN'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='FALL'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='AFFECTION'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='BOSS DAY'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='DIWALI'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='VETERANS DAY'
        images={GIFTCARD_FEATURED} />
      <Carusel
        title='ANYTIME'
        images={GIFTCARD_FEATURED} />
      <div className='bulk--baner'>
        <img src={img}/>
        <div className='bulk--baner-wrapper'>
          <h2>Gift Cards in Bulk</h2>
          <p>There’s an easier way to buy Starbucks
             Cards in bulk! Give a Starbucks Card to gift,
              reward, incentivize, or show appreciation towards y
              our customers, clients and team members.
          </p>
          <button className='baner-button' type='button'>Shop now</button>
        </div>
      </div>
      <div className='support--baner'>
        <h2>GIFT CARD SUPPORT</h2>
        <p>Use the links below
           to manage eGifts you have sent
           or received, or view our full Card
            Terms & Conditions.
        </p>
        <div className='support--baner-buttons'>
          <button className='baner-button' type='button'>eGift Support</button>
          <button className='baner-button'
            type='button'>See Terms & Conditions</button>
          <button className='baner-button' type='button'>eGift FAQs</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GiftcardPage;
