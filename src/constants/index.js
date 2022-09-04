import pumpkin from '../imgs/main-content/pumpkin.jpg';
import iceLatte from '../imgs/main-content/ice-latte.jpg';
import apple from '../imgs/main-content/apple.jpg';
import cakes from '../imgs/main-content/cakes.png';
import coffee from '../imgs/main-content/coffe.png';

export const FOOTER_TITLES = {
  ABOUT_US: 'About us',
  CAREERS: 'Careers',
  SOCIAL_IMPACT: 'Social Impact',
  BUSINESS: 'For Business Partners',
  ORDER: 'Order and Pickup',
};

export const FOOTER_LISTS = {
  ABOUT_US: [
    'Our Company',
    'Our Coffee',
    'Stories and News',
    'Starbucks Archive',
    'Investor Relations',
    'Customer Service',
  ],
  CAREERS: [
    'Culture and Values',
    'Inclusion, Diversity, and Equity',
    'College Achievement Plan',
    'Alumni Community',
    'U.S. Careers',
    'International Careers',
  ],
  SOCIAL_IMPACT: [
    'People',
    'Planet',
    'Environmental and Social Impact Reporting',
  ],
  BUSINESS: [
    'Landlord Support Center',
    'Suppliers',
    'Corporate Gift Card Sales',
    'Office and Foodservice Coffee',
  ],
  ORDER: [
    'Order on the App',
    'Order on the Web',
    'Delivery',
    'Order and Pickup Options',
    'Explore and Find Coffee for Home',
  ],
};

export const MAIN_CONTENT = [
  {
    text: 'Ordering your fall favorites is a snap with the app. ' +
        'Join Starbucks® Rewards and tap into fall.',
    title: 'Fall at your fingertips',
    direction: 'right',
    buttonText: 'Join now',
    url: pumpkin,
  },
  {
    text: 'Fall favorites return with the blissful Pumpkin Spice ' +
        'Latte and smooth Pumpkin Cream Cold Brew.',
    title: 'Welcome home, pumpkin',
    direction: 'left',
    buttonText: 'Learn more',
    url: iceLatte,
  },
  {
    text: 'Try the Apple Crisp Oatmilk Macchiato, ' +
        'now nondairy and with Starbucks® Blonde Espresso.',
    title: 'Layers of baked apple yum',
    direction: 'right',
    buttonText: 'Learn more',
    url: apple,
  },
  {
    text: 'Choose a comforting classic: Pumpkin Cream Cheese Muffin, ' +
        'Pumpkin & Pepita Loaf or Pumpkin Scone.',
    title: 'Picks of the patch',
    direction: 'left',
    buttonText: 'Learn more',
    url: cakes,
  },
  {
    text: 'With a new roast spectrum front and center on our coffee bags, ' +
        'it’s easier than ever to find a taste you love.',
    title: 'The art of the roast',
    direction: 'right',
    buttonText: 'Order now',
    url: coffee,
  },
];
