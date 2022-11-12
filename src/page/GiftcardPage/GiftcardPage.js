import {Header} from '../../componentns/Header/Header';
import './GiftcardPage.scss';
import {Footer} from '../../componentns/Footer/Footer';
import {Carusel} from '../../componentns/Slider/Slider';
import img from '../../imgs/bulk-img.jpg';
import {GIFTCARD_FEATURED} from '../../constants/images';
import {GIFTCARD_BIRTHDAY} from '../../constants/images';
import {GIFTCARD_THANK_YOU} from '../../constants/images';
import {GIFTCARD_CELEBRATION} from '../../constants/images';
import {GIFTCARD_PSL} from '../../constants/images';
import {GIFTCARD_APPRECIATION} from '../../constants/images';
import {GIFTCARD_WORKPLACE} from '../../constants/images';
import {GIFTCARD_ENCOURAGEMENT} from '../../constants/images';

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
        images={GIFTCARD_BIRTHDAY} />
      <Carusel
        title='THANK YOU'
        images={GIFTCARD_THANK_YOU} />
      <Carusel
        title='CELEBRATION'
        images={GIFTCARD_CELEBRATION} />
      <Carusel
        title='PSL'
        images={GIFTCARD_PSL} />
      <Carusel
        title='APPRECIATION'
        images={GIFTCARD_APPRECIATION} />
      <Carusel
        title='WORKPLACE'
        images={GIFTCARD_WORKPLACE} />
      <Carusel
        title='ENCOURAGEMENT'
        images={GIFTCARD_ENCOURAGEMENT} />
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
