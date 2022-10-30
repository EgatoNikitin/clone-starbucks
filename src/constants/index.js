/* eslint-disable max-len */
import pumpkin from '../imgs/main-content/pumpkin.jpg';
import iceLatte from '../imgs/main-content/ice-latte.jpg';
import apple from '../imgs/main-content/apple.jpg';
import cakes from '../imgs/main-content/cakes.png';
import coffee from '../imgs/main-content/coffe.png';
import icon from '../imgs/menu/icon.jpg';
import freebies from '../imgs/rewards/freebies.png';
import order from '../imgs/rewards/order.png';
import free from '../imgs/rewards/free.png';
import scan from '../imgs/rewards/scan.png';
import save from '../imgs/rewards/save.png';
import register from '../imgs/rewards/register.png';
import preload from '../imgs/rewards/preload.png';
import {FEATURED_CARDS_ICONS} from './images';

import {
  BREWED_COFFEE,
  AMERICANO,
  CAPPUCCINO,
  ESPRESSO,
  FLAT_WHITE,
  LATTES,
  MACCHITOS,
  MOCHAS,
  CLOVER,
  TRAVELERS,
  CHAITEAS,
  BLACKTEAS,
  GREENTEAS,
  HERBALTEAS,
  HOTCHOCOLATES,
  JUICE,
  STREAMERS,
  COFFEE_FRAPPUCCINO,
  CREME_FRAPPUCCINO,
  COLD_BREWS,
  NITRO_COLD_BREWS,
  ICED_AMERICANO,
  ICED_COFFEES,
  ICED_SHAKEN_ESPRESSO,
  ICED_FLAT_WHITES,
  ICED_LATTES,
  ICED_MACCHIATOS,
  ICED_MOCHAS,
  ICED_TEAS,
} from './images';


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
export const FILTERS = [
  {
    title: 'Drinks',
    url: icon,
    listOfItems: [
      'Hot Coffees',
      'Hot Teas',
      'Hot Drinks',
      'Frappuccino® Blended Beverages',
      'Cold Coffees',
      'Iced Teas',
      'Cold Drinks',
    ],
  },
  {
    title: 'Food',
    url: icon,
    listOfItems: [
      'Hot Breakfast',
      'Bakery',
      'Lunch',
      'Snacks & Sweets',
      'Oatmeal & Yogurt',
    ],
  },
  {
    title: 'At Home Coffee',
    url: icon,
    listOfItems: [
      'Whole Bean',
      'VIA® Instant',
    ],
  },
  {
    title: 'Merchandise',
    url: icon,
    listOfItems: [
      'Cold Cups',
      'Tumblers',
      'Mugs',
      'Water Bottles',
      'Other',
    ],
  },
  {
    title: 'Gift Cards',
    url: icon,
    listOfItems: [
      'Happy Birthday',
      'Thank You',
      'Traditional',
    ],
  },
];
export const CATEGORIES = {

  ['Menu']: [
    {
      title: 'Drinks',
      url: icon,
      listOfItems: [
        {
          title: 'Hot Coffees',
          icon: AMERICANO.americano,
        },
        {
          title: 'Hot Teas',
          icon: CHAITEAS.chaiTeas1,
        },
        {
          title: 'Hot Drinks',
          icon: HOTCHOCOLATES.hotChocolates1,
        },
        {
          title: 'Frappuccino® Blended Beverages',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino1,
        },
        {
          title: 'Cold Coffees',
          icon: COLD_BREWS.coldBrews1,
        },
        {
          title: 'Iced Teas',
          icon: ICED_TEAS.icedTeas1,
        },
        {
          title: 'Cold Drinks',
          icon: icon,
        },
      ],
    },
    {
      title: 'Food',
      url: icon,
      listOfItems: [
        {
          title: 'Hot Breakfast',
          icon: icon,
        },
        {
          title: 'Bakery',
          icon: icon,
        },
        {
          title: 'Lunch',
          icon: icon,
        },
        {
          title: 'Snacks & Sweets',
          icon: icon,
        },
        {
          title: 'Oatmeal & Yogurt',
          icon: icon,
        },
      ],
    },
    {
      title: 'At Home Coffee',
      url: icon,
      listOfItems: [
        {
          title: 'Whole Bean',
          icon: icon,
        },
        {
          title: 'VIA® Instant',
          icon: icon,
        },
      ],
    },
    {
      title: 'Merchandise',
      url: icon,
      listOfItems: [
        {
          title: 'Cold Cups',
          icon: icon,
        },
        {
          title: 'Tumblers',
          icon: icon,
        },
        {
          title: 'Mugs',
          icon: icon,
        },
        {
          title: 'Water Bottles',
          icon: icon,
        },
        {
          title: 'Other',
          icon: icon,
        },
      ],
    },
    {
      title: 'Gift Cards',
      url: icon,
      listOfItems: [
        {
          title: 'Happy Birthday',
          icon: icon,
        },
        {
          title: 'Thank You',
          icon: icon,
        },
        {
          title: 'Traditional',
          icon: icon,
        },
      ],
    },
  ],
  ['Hot Coffees']: [
    {
      title: 'Americanos',
      url: icon,
      listOfItems: [
        {
          title: 'Caffè Americano',
          icon: AMERICANO.americano,
        },
      ],
    },
    {
      title: 'Brewed Coffees',
      url: icon,
      listOfItems: [
        {
          title: 'Veranda Blend®',
          icon: BREWED_COFFEE.veranda,
        },
        {
          title: 'Caffè Misto',
          icon: BREWED_COFFEE.caffeMisto,
        },
        {
          title: 'Featured Starbucks® Dark Roast Coffee',
          icon: BREWED_COFFEE.darkRoast,
        },
        {
          title: 'Featured Medium Roast - Pike Place® Roast',
          icon: BREWED_COFFEE.roastPike,
        },
        {
          title: 'Decaf Pike Place® Roast',
          icon: BREWED_COFFEE.roast,
        },
      ],
    },
    {
      title: 'Cappuccinos',
      url: icon,
      listOfItems: [
        {
          title: 'Cappuccino',
          icon: CAPPUCCINO.cappuccino,
        },
      ],
    },
    {
      title: 'Espresso Shots',
      url: icon,
      listOfItems: [
        {
          title: 'Espresso',
          icon: ESPRESSO.espresso2,
        },
        {
          title: 'Espresso Con Panna',
          icon: ESPRESSO.espresso1,
        },
      ],
    },
    {
      title: 'Flat Whites',
      url: icon,
      listOfItems: [
        {
          title: 'Flat White',
          icon: FLAT_WHITE.flatWhites1,
        },
        {
          title: 'Honey Almondmilk Flat White',
          icon: FLAT_WHITE.flatWhites2,
        },
      ],
    },
    {
      title: 'Lattes',
      url: icon,
      listOfItems: [
        {
          title: 'Pumpkin Spice Latte',
          icon: LATTES.lattes1,
        },
        {
          title: 'Caffè Latte',
          icon: LATTES.lattes2,
        },
        {
          title: 'Cinnamon Dolce Latte',
          icon: LATTES.lattes3,
        },
        {
          title: 'Starbucks Reserve® Latte',
          icon: LATTES.lattes4,
        },
        {
          title: 'Starbucks Reserve® Hazelnut Bianco Latte',
          icon: LATTES.lattes5,
        },
        {
          title: 'Starbucks® Blonde Vanilla Latte',
          icon: LATTES.lattes6,
        },
      ],
    },
    {
      title: 'Macchiatos',
      url: icon,
      listOfItems: [
        {
          title: 'Caramel Macchiato',
          icon: MACCHITOS.macchitos1,
        },
        {
          title: 'Espresso Macchiato',
          icon: MACCHITOS.macchitos2,
        },
      ],
    },
    {
      title: 'Mochas',
      url: icon,
      listOfItems: [
        {
          title: 'Caffè Mocha',
          icon: MOCHAS.mochas1,
        },
        {
          title: 'Starbucks Reserve® Dark Chocolate Mocha',
          icon: MOCHAS.mochas2,
        },
        {
          title: 'White Chocolate Mocha',
          icon: MOCHAS.mochas3,
        },
      ],
    },
    {
      title: 'Clover® Brewed Coffees',
      url: icon,
      listOfItems: [
        {
          title: 'Hawai‘i Ka‘u Clover® Starbucks Reserve®',
          icon: CLOVER.clover1,
        },
        {
          title: 'Sun-Dried Zambia Ngoli Estate Clover® Starbucks Reserve®',
          icon: CLOVER.clover2,
        },
        {
          title: 'Vietnam Da Lat Clover® Starbucks Reserve®',
          icon: CLOVER.clover3,
        },
        {
          title: 'Clover® Starbucks Reserve® Costa Rica Naranjo',
          icon: CLOVER.clover4,
        },
        {
          title: 'Rwanda Hingakawa Clover® Starbucks Reserve®',
          icon: CLOVER.clover5,
        },
        {
          title: 'Clover Brewed® Pike Place® Roast',
          icon: CLOVER.clover6,
        },
        {
          title: 'Organic Yukon Blend® Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Clover Brewed® Gold Coast Blend®',
          icon: CLOVER.clover8,
        },
        {
          title: 'Clover Brewed® Breakfast Blend',
          icon: CLOVER.clover9,
        },
        {
          title: 'Kenya Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Veranda Blend® Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Clover Brewed® Starbucks Willow Blend',
          icon: CLOVER.clover7,
        },
        {
          title: 'Decaf Sumatra Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Caffé Verona® Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Clover Brewed® Decaf Pike Place® Roast',
          icon: CLOVER.clover7,
        },
        {
          title: 'Espresso Roast Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Decaf Espresso Roast Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Ethiopia Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'French Roast Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Italian Roast Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Komodo Dragon Clover®',
          icon: CLOVER.clover7,
        },
        {
          title: 'Sumatra Clover®',
          icon: CLOVER.clover7,
        },
      ],
    },
    {
      title: 'Coffee Travelers',
      url: icon,
      listOfItems: [
        {
          title: 'Coffee Traveler - Veranda Blend®',
          icon: TRAVELERS.coffeeTravelers,
        },
        {
          title: 'Coffee Traveler - Dark Roast',
          icon: TRAVELERS.coffeeTravelers,
        },
        {
          title: 'Coffee Traveler - Pike Place® Roast',
          icon: TRAVELERS.coffeeTravelers,
        },
        {
          title: 'Coffee Traveler - Decaf Pike Place® Roast',
          icon: TRAVELERS.coffeeTravelers,
        },
      ],
    },
  ],
  ['Hot Teas']: [
    {
      title: 'Chai Teas',
      url: icon,
      listOfItems: [
        {
          title: 'Chai Tea Latte',
          icon: CHAITEAS.chaiTeas1,
        },
        {
          title: 'Chai Tea',
          icon: CHAITEAS.chaiTeas1,
        },
      ],
    },
    {
      title: 'Black Teas',
      url: icon,
      listOfItems: [
        {
          title: 'Earl Grey Tea',
          icon: BLACKTEAS.blackTeas1,
        },
        {
          title: 'Teavana® London Fog Tea Latte',
          icon: BLACKTEAS.blackTeas2,
        },
        {
          title: 'Royal English Breakfast Tea',
          icon: BLACKTEAS.blackTeas3,
        },
        {
          title: 'Royal English Breakfast Tea Latte',
          icon: BLACKTEAS.blackTeas4,
        },
      ],
    },
    {
      title: 'Green Teas',
      url: icon,
      listOfItems: [
        {
          title: 'Emperor’s Clouds & Mist®',
          icon: GREENTEAS.greenTeas1,
        },
        {
          title: 'Matcha Tea Latte',
          icon: GREENTEAS.greenTeas2,
        },
        {
          title: 'Honey Citrus Mint Tea',
          icon: GREENTEAS.greenTeas3,
        },
        {
          title: 'Jade Citrus Mint® Brewed Tea',
          icon: GREENTEAS.greenTeas4,
        },
      ],
    },
    {
      title: 'Herbal Teas',
      url: icon,
      listOfItems: [
        {
          title: 'Mint Majesty®',
          icon: HERBALTEAS.herbalTeas1,
        },
        {
          title: 'Peach Tranquility®',
          icon: HERBALTEAS.herbalTeas2,
        },
      ],
    },
  ],
  ['Hot Drinks']: [
    {
      title: 'Hot Chocolates',
      url: icon,
      listOfItems: [
        {
          title: 'Hot Chocolate',
          icon: HOTCHOCOLATES.hotChocolates1,
        },
        {
          title: 'White Hot Chocolate',
          icon: HOTCHOCOLATES.hotChocolates2,
        },
      ],
    },
    {
      title: 'Juice',
      url: icon,
      listOfItems: [
        {
          title: 'Caramel Apple Spice',
          icon: JUICE.juice1,
        },
        {
          title: 'Steamed Apple Juice',
          icon: JUICE.juice2,
        },
      ],
    },
    {
      title: 'Steamers',
      url: icon,
      listOfItems: [
        {
          title: 'Pumpkin Spice Crème',
          icon: STREAMERS.steamers1,
        },
        {
          title: 'Steamed Milk',
          icon: STREAMERS.steamers2,
        },
        {
          title: 'Vanilla Crème',
          icon: STREAMERS.steamers3,
        },
      ],
    },
  ],
  ['Frappuccino® Blended Beverages']: [
    {
      title: 'Coffee Frappuccino',
      url: icon,
      listOfItems: [
        {
          title: 'Pumpkin Spice Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino1,
        },
        {
          title: 'Apple Crisp Oatmilk Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino2,
        },
        {
          title: 'Mocha Cookie Crumble Frappuccino®',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino3,
        },
        {
          title: 'Caramel Ribbon Crunch Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino4,
        },
        {
          title: 'Espresso Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino5,
        },
        {
          title: 'Caffè Vanilla Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino6,
        },
        {
          title: 'Caramel Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino7,
        },
        {
          title: 'Coffee Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino8,
        },
        {
          title: 'Mocha Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino9,
        },
        {
          title: 'Java Chip Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino10,
        },
        {
          title: 'White Chocolate Mocha Frappuccino® Blended Beverage',
          icon: COFFEE_FRAPPUCCINO.coffeeFrappuccino11,
        },

      ],
    },
    {
      title: 'Creme Frappuccino',
      url: icon,
      listOfItems: [
        {
          title: 'Pumpkin Spice Crème Frappuccino® Blended Beverage',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino1,
        },
        {
          title: 'Apple Crisp Oatmilk Crème Frappuccino® Blended Beverage',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino2,
        },
        {
          title: 'Chocolate Cookie Crumble Crème Frappuccino®',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino3,
        },
        {
          title: 'Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino4,
        },
        {
          title: 'Strawberry Crème Frappuccino® Blended Beverage',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino5,
        },
        {
          title: 'Chai Crème Frappuccino®',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino6,
        },
        {
          title: 'Double Chocolaty Chip Crème Frappuccino® Blended Beverage',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino7,
        },
        {
          title: 'Matcha Crème Frappuccino® Blended Beverage',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino8,
        },
        {
          title: 'Vanilla Bean Crème Frappuccino® Blended Crème',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino9,
        },
        {
          title: 'White Chocolate Crème Frappuccino® Blended Beverage',
          icon: CREME_FRAPPUCCINO.cremeFrappuccino10,
        },
      ],
    },
  ],
  ['Cold Coffees']: [
    {
      title: 'Cold Brews',
      url: icon,
      listOfItems: [
        {
          title: 'Pumpkin Cream Cold Brew',
          icon: COLD_BREWS.coldBrews1,
        },
        {
          title: 'Chocolate Cream Cold Brew',
          icon: COLD_BREWS.coldBrews2,
        },
        {
          title: 'Salted Caramel Cream Cold Brew',
          icon: COLD_BREWS.coldBrews3,
        },
        {
          title: 'Starbucks® Cold Brew Coffee',
          icon: COLD_BREWS.coldBrews4,
        },
        {
          title: 'Vanilla Sweet Cream Cold Brew',
          icon: COLD_BREWS.coldBrews5,
        },
        {
          title: 'Starbucks® Cold Brew Coffee with Milk',
          icon: COLD_BREWS.coldBrews6,
        },
      ],
    },
    {
      title: 'Nitro Cold Brews',
      url: icon,
      listOfItems: [
        {
          title: 'Nitro Cold Brew',
          icon: NITRO_COLD_BREWS.nitroColdBrews1,
        },
        {
          title: 'Vanilla Sweet Cream Nitro Cold Brew',
          icon: NITRO_COLD_BREWS.nitroColdBrews2,
        },
      ],
    },
    {
      title: 'Iced Americano',
      url: icon,
      listOfItems: [
        {
          title: 'Iced Caffè Americano',
          icon: ICED_AMERICANO.icedAmericano,
        },
      ],
    },
    {
      title: 'Iced Coffees',
      url: icon,
      listOfItems: [
        {
          title: 'Iced Coffee',
          icon: ICED_COFFEES.icedCoffees1,
        },
        {
          title: 'Iced Coffee with Milk',
          icon: ICED_COFFEES.icedCoffees2,
        },
        {
          title: 'Iced Espresso',
          icon: ICED_COFFEES.icedCoffees3,
        },
      ],
    },
    {
      title: 'Iced Shaken Espresso',
      url: icon,
      listOfItems: [
        {
          title: 'Iced Toasted Vanilla Oatmilk Shaken Espresso',
          icon: ICED_SHAKEN_ESPRESSO.icedShakenEspresso1,
        },
        {
          title: 'Iced Brown Sugar Oatmilk Shaken Espresso',
          icon: ICED_SHAKEN_ESPRESSO.icedShakenEspresso2,
        },
        {
          title: 'Iced Chocolate Almondmilk Shaken Espresso',
          icon: ICED_SHAKEN_ESPRESSO.icedShakenEspresso3,
        },
        {
          title: 'Iced Shaken Espresso',
          icon: ICED_SHAKEN_ESPRESSO.icedShakenEspresso4,
        },
      ],
    },
    {
      title: 'Iced Flat Whites',
      url: icon,
      listOfItems: [
        {
          title: 'Iced Flat White',
          icon: ICED_FLAT_WHITES.icedFlatWhites1,
        },
        {
          title: 'Iced Honey Almondmilk Flat White',
          icon: ICED_FLAT_WHITES.icedFlatWhites2,
        },
      ],
    },
    {
      title: 'Iced Lattes',
      url: icon,
      listOfItems: [
        {
          title: 'Iced Pumpkin Spice Latte',
          icon: ICED_LATTES.icedLattes1,
        },
        {
          title: 'Starbucks Reserve® Iced Latte',
          icon: ICED_LATTES.icedLattes2,
        },
        {
          title: 'Starbucks Reserve® Iced Hazelnut Bianco Latte',
          icon: ICED_LATTES.icedLattes3,
        },
        {
          title: 'Iced Caffè Latte',
          icon: ICED_LATTES.icedLattes4,
        },
        {
          title: 'Iced Cinnamon Dolce Latte',
          icon: ICED_LATTES.icedLattes5,
        },
        {
          title: 'Iced Starbucks® Blonde Vanilla Latte',
          icon: ICED_LATTES.icedLattes6,
        },
      ],
    },
    {
      title: 'Iced Macchiatos',
      url: icon,
      listOfItems: [
        {
          title: 'Iced Apple Crisp Oatmilk Macchiato',
          icon: ICED_MACCHIATOS.icedMacchiatos1,
        },
        {
          title: 'Iced Caramel Macchiato',
          icon: ICED_MACCHIATOS.icedMacchiatos2,
        },
      ],
    },
    {
      title: 'Iced Mochas',
      url: icon,
      listOfItems: [
        {
          title: 'Iced White Chocolate Mocha',
          icon: ICED_MOCHAS.icedMochas1,
        },
        {
          title: 'Iced Caffè Mocha',
          icon: ICED_MOCHAS.icedMochas2,
        },
        {
          title: 'Starbucks Reserve® Iced Dark Chocolate Mocha',
          icon: ICED_MOCHAS.icedMochas3,
        },
      ],
    },
    // {
    //   title: 'Iced Clover® Brewed Coffees',
    //   url: icon,
    //   listOfItems: [
    //     {
    //       title: 'Hawai‘i Ka‘u Clover® Starbucks Reserve®',
    //       icon: CLOVER.clover1,
    //     },
    //     {
    //       title: 'Iced Caffè MochaSun-Dried Zambia® Starbucks Reserve®',
    //       icon: CLOVER.clover2,
    //     },
    //     {
    //       title: 'Vietnam Da Lat Clover® Starbucks Reserve®',
    //       icon: CLOVER.clover3,
    //     },
    //     {
    //       title: 'Clover® Starbucks Reserve® Costa Rica Naranjo',
    //       icon: CLOVER.clover4,
    //     },
    //     {
    //       title: 'Rwanda Hingakawa Clover® Starbucks Reserve®',
    //       icon: CLOVER.clover5,
    //     },
    //     {
    //       title: 'Clover Brewed® Pike Place® Roast',
    //       icon: CLOVER.clover6,
    //     },
    //     {
    //       title: 'Organic Yukon Blend® Clover®',
    //       icon: CLOVER.clover7,
    //     },
    //     {
    //       title: 'Clover Brewed® Gold Coast Blend®',
    //       icon: CLOVER.clover8,
    //     },
    //     {
    //       title: 'Clover Brewed® Breakfast Blend',
    //       icon: CLOVER.clover9,
    //     },
    //     {
    //       title: 'Kenya Clover®',
    //       icon: CLOVER.clover10,
    //     },
    //     {
    //       title: 'Veranda Blend® Clover®',
    //       icon: CLOVER.clover11,
    //     },
    //     {
    //       title: 'Clover Brewed® Starbucks Willow Blend',
    //       icon: CLOVER.clover12,
    //     },
    //     {
    //       title: 'Decaf Sumatra Clover®',
    //       icon: CLOVER.clover13,
    //     },
    //     {
    //       title: 'Caffé Verona® Clover®',
    //       icon: CLOVER.clover14,
    //     },
    //     {
    //       title: 'Clover Brewed® Decaf Pike Place® Roast',
    //       icon: CLOVER.clover15,
    //     },
    //     {
    //       title: 'Espresso Roast Clover®',
    //       icon: CLOVER.clover16,
    //     },
    //     {
    //       title: 'Decaf Espresso Roast Clover®',
    //       icon: CLOVER.clover17,
    //     },
    //     {
    //       title: 'Ethiopia Clover®',
    //       icon: CLOVER.clover18,
    //     },
    //     {
    //       title: 'French Roast Clover®',
    //       icon: CLOVER.clover19,
    //     },
    //     {
    //       title: 'Ethiopia Clover®',
    //       icon: CLOVER.clover20,
    //     },
    //     {
    //       title: 'Italian Roast Clover®',
    //       icon: CLOVER.clover21,
    //     },
    //     {
    //       title: 'Komodo Dragon Clover®',
    //       icon: CLOVER.clover22,
    //     },
    //     {
    //       title: 'Sumatra Clover®',
    //       icon: CLOVER.clover22,
    //     },
    //   ],
    // },

  ],
  ['Iced Teas']: [
    {
      title: 'Bottled Teas',
      url: icon,
      listOfItems: [
        {
          title: 'Teavana® Sparkling Unsweetened Peach Nectarine Green Tea',
          icon: ICED_TEAS.icedTeas1,
        },
        {
          title: 'Teavana® Mango Black Tea',
          icon: ICED_TEAS.icedTeas2,
        },
      ],
    },
    {
      title: 'Iced Black Teas',
      url: icon,
      listOfItems: [
        {
          title: 'Iced Black Tea',
          icon: icon,
        },
        {
          title: 'Iced Black Tea Lemonade',
          icon: icon,
        },
        {
          title: 'Iced Royal English Breakfast Tea Latte',
          icon: icon,
        },
        {
          title: 'Iced London Fog Tea Latte',
          icon: icon,
        },
      ],
    },
    {
      title: 'Iced Chai Teas',
      url: icon,
      listOfItems: [
        'Iced Chai Tea Latte',
      ],
    },
    {
      title: 'Iced Green Teas',
      url: icon,
      listOfItems: [
        'Iced Peach Green Tea',
        'Iced Peach Green Tea Lemonade',
        'Iced Matcha Tea Latte',
        'Iced Green Tea',
        'Iced Green Tea Lemonade',
        'Iced Matcha Lemonade',
      ],
    },
    {
      title: 'Iced Herbal Teas',
      url: icon,
      listOfItems: [
        'Iced Passion Tango® Tea',
        'Iced Passion Tango® Tea Lemonade',
      ],
    },
  ],
  ['Cold Drinks']: [
    {
      title: 'Starbucks Refreshers™',
      url: icon,
      listOfItems: [
        'Dragon Drink® Starbucks Refreshers® Beverage',
        'Mango Dragonfruit Starbucks Refreshers® Beverage',
        'Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage',
        'Paradise Drink Starbucks Refreshers® Beverage',
        'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
        'Pineapple Passionfruit Starbucks Refreshers® Beverage',
        'Pineapple Passionfruit Lemonade Starbucks Refreshers® Beverage',
        'Pink Drink Starbucks Refreshers® Beverage',
        'Strawberry Açaí Starbucks Refreshers® Beverage',
      ],
    },
    {
      title: 'Juice',
      url: icon,
      listOfItems: [
        'Starbucks BAYA™ Energy Mango Guava',
        'Evolution Fresh® Organic Vital Berry',
        'Evolution Fresh® Organic Defense Up®',
        'Evolution Fresh® Orange',
        'Evolution Fresh® Organic Super Fruit Greens',
        'Evolution Fresh® Mighty Watermelon',
        'Tree Top Apple Juice Box',
        'Starbucks BAYA™ Energy Raspberry Lime',
        'Lemonade',
        'Blended Strawberry Lemonade',
      ],
    },
    {
      title: 'Milk',
      url: icon,
      listOfItems: [
        'Horizon® Chocolate Organic Milk',
        'Horizon® Organic Lowfat Milk Box',
        'SBC Milk',
        'Horizon® Organic Vanilla Milk Box',
      ],
    },
    {
      title: 'Sparkling Water',
      url: icon,
      listOfItems: [
        'Galvanina Sparkling Water',
        'Spindrift® Grapefruit Sparkling Water',
        'Spindrift® Raspberry Lime Sparkling Water',
        'Galvanina Sparkling Water - Lime',
      ],
    },
    {
      title: 'Water',
      url: icon,
      listOfItems: [
        'DASANI Bottled Water',
        'Ethos® Bottled Water',
        'Hawai‘i Volcanic Water',
      ],
    },
  ],
  ['Hot Breakfast']: [
    {
      title: 'Breakfast Sandwiches & Wraps',
      url: icon,
      listOfItems: [
        'Bacon, Sausage & Egg Wrap',
        'Impossible™ Breakfast Sandwich',
        'Bacon, Gouda & Egg Sandwich',
        'Double-Smoked Bacon, Cheddar & Egg Sandwich',
        'Turkey Bacon, Cheddar & Egg White Sandwich',
        'Sausage, Cheddar & Egg Sandwich',
        'Spinach, Feta & Egg White Wrap',
        'Avocado Spread',
      ],
    },
    {
      title: 'Sous Vide Egg Bites',
      url: icon,
      listOfItems: [
        'Kale & Mushroom Egg Bites',
        'Bacon & Gruyère Egg Bites',
        'Egg White & Roasted Red Pepper Egg Bites',
      ],
    },
  ],
  ['Bakery']: [
    {
      title: 'Bagels',
      url: icon,
      listOfItems: [
        'Plain Bagel',
        'Cinnamon Raisin Bagel',
        'Everything Bagel',
        'Avocado Spread',
      ],
    },
    {
      title: 'Cake Pops',
      url: icon,
      listOfItems: [
        'Owl Cake Pop',
        'Unicorn Cake Pop',
        'Cookies & Cream Cake Pop',
        'Birthday Cake Pop',
        'Chocolate Cake Pop',
      ],
    },
    {
      title: 'Cookies, Brownies & Bars',
      url: icon,
      listOfItems: [
        'Lime-Frosted Coconut Bar',
        'Bullseye Cookie',
        'Double Chocolate Brownie',
        'Chocolate Chip Cookie',
        'Marshmallow Dream Bar',
      ],
    },
    {
      title: 'Croissants',
      url: icon,
      listOfItems: [
        'Ham & Swiss Croissant',
        'Butter Croissant',
        'Almond Croissant',
        'Chocolate Croissant',
      ],
    },
    {
      title: 'Loaves & Cakes',
      url: icon,
      listOfItems: [
        'Cinnamon Coffee Cake',
        'Iced Lemon Loaf',
        'Pumpkin & Pepita Loaf',
        'Banana Walnut & Pecan Loaf',
      ],
    },
    {
      title: 'Danishes & Doughnuts',
      url: icon,
      listOfItems: [
        'Cheese Danish',
        'Glazed Doughnut',
      ],
    },
    {
      title: 'Muffins & Scones',
      url: icon,
      listOfItems: [
        'Pumpkin Cream Cheese Muffin',
        'Pumpkin Scone',
        'Blueberry Scone',
        'Petite Vanilla Bean Scone',
        'Blueberry Muffin',
      ],
    },
  ],
  ['Lunch']: [
    {
      title: 'Warm Sandwiches',
      url: icon,
      listOfItems: [
        'Crispy Grilled Cheese on Sourdough',
        'Ham & Swiss on Baguette',
        'Turkey, Provolone & Pesto on Ciabatta',
        'Tomato & Mozzarella on Focaccia',
        'Avocado Spread',
      ],
    },
    {
      title: 'Protein Boxes',
      url: icon,
      listOfItems: [
        'Eggs & Gouda Protein Box',
        'Cheese Trio Protein Box',
        'Cheddar & Uncured Salami Protein Box',
        'Chickpea Bites & Avocado Protein Box',
        'Eggs & Cheddar Protein Box',
        'PB&J Protein Box',
        'Cheese & Fruit Protein Box',
      ],
    },
  ],
  ['Snacks & Sweets']: [
    {
      title: 'Biscotti & Cookies',
      url: icon,
      listOfItems: [
        'Dipped Madeleines',
        'Madeleines',
        'Vanilla Biscotti with Almonds',
        'Shortbread Cookies',
        'Rip van Wafels – Honey & Oats',
      ],
    },
    {
      title: 'Chocolates & Candy',
      url: icon,
      listOfItems: [
        'Salted Almond Chocolate Bites',
        'Dark Chocolate Covered Espresso Beans',
        'Dark Chocolate Peanut Butter Cups',
      ],
    },
    {
      title: 'Fruit & Nuts',
      url: icon,
      listOfItems: [
        'Squirrel Brand® Fruit & Nut',
        'Squirrel - Classic Almonds',
        'Peter Rabbit™ Organics Apple & Grape',
        'Peter Rabbit™ Organics Strawberry Banana',
      ],
    },
    {
      title: 'Gum & Mints',
      url: icon,
      listOfItems: [
        'Spearmint Gum',
      ],
    },
    {
      title: 'Popcorn & Chips',
      url: icon,
      listOfItems: [
        'Starbucks Butter Popcorn',
        'Hippeas® - White Cheddar',
        'Salt & Vinegar Kettle Potato Chips',
        'Perfectly Salted Chips',
      ],
    },
    {
      title: 'Meat & Cheese',
      url: icon,
      listOfItems: [
        'Country Archer – Hickory Smoked Turkey Jerkey',
        'Country Archer Original Beef Jerky',
        'String Cheese',
      ],
    },
    {
      title: 'Snack Bars',
      url: icon,
      listOfItems: [
        'Perfect Bar® - Dark Chocolate Chip Peanut Butter',
        'Perfect Bar® Peanut Butter',
        'KIND - Almond Coconut Cashew Chai',
        'KIND® Blueberry Vanilla & Cashew Bar',
        'KIND Peanut Butter Dark Chocolate Bar',
        'KIND® Salted Caramel & Dark Chocolate Nut Bar',
        'Thats It® – Apple + Blueberry Bar',
        'Thats It® – Apple + Blueberry Bar',
        'This Bar Saves Lives™ – Dark Chocolate Cherry & Sea Salt Bar',
        'This Bar Saves Lives™ - Dark Chocolate Peanut Butter',
        'This Bar Saves Lives™ Madagascar Vanilla Almond & Honey Bar',
        'This Bar Saves Lives™ - Wild Blueberry Pistachio Bar',
      ],
    },
    {
      title: 'Spreads',
      url: icon,
      listOfItems: [
        'Avocado Spread',
      ],
    },
  ],
  ['Oatmeal & Yogurt']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Rolled & Steel-Cut Oatmeal',
        'Berry Trio Parfait',
        'Strawberry Overnight Grains',
      ],
    },
  ],
  ['Whole Bean']: [
    {
      title: 'Starbucks Reserve®',
      url: icon,
      listOfItems: [
        'Rwanda Hingakawa Starbucks Reserve®',
        'Sun-Dried Zambia Ngoli Estate Whole Bean',
        'Starbucks Reserve® Vietnam Da Lat',
        'Costa Rica Naranjo Starbucks Reserve®',
        'Starbucks Reserve® Hawai Ka‘u',
      ],
    },
    {
      title: 'Blonde Roast',
      url: icon,
      listOfItems: [
        'Veranda Blend®',
        'Starbucks® Blonde Espresso Roast',
      ],
    },
    {
      title: 'Medium Roast',
      url: icon,
      listOfItems: [
        'Single-Origin Guatemala Casi Cielo®',
        'Sirens Blend™',
        'Guatemala Antigua',
        'Pike Place® Roast',
        'Organic Yukon Blend®',
      ],
    },
    {
      title: 'Dark Roast',
      url: icon,
      listOfItems: [
        'Decaf Sumatra',
        'Caffè Verona®',
        'Espresso Roast',
        'Italian Roast',
        'Komodo Dragon Blend®',
        'Sumatra',
      ],
    },
  ],
  ['VIA® Instant']: [
    {
      title: 'Flavored',
      url: icon,
      listOfItems: [
        'Starbucks VIA® Instant Pike Place® Roast',
      ],
    },
    {
      title: 'Blonde Roast',
      url: icon,
      listOfItems: [
        'VIA® Veranda Blend™',
      ],
    },
    {
      title: 'Medium Roast',
      url: icon,
      listOfItems: [
        'Starbucks VIA® Instant Pike Place® Roast',
      ],
    },
    {
      title: 'Dark Roast',
      url: icon,
      listOfItems: [
        'VIA® Italian Roast',
        'VIA® Decaf Italian Roast',
      ],
    },
  ],
  ['Cold Cups']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Siren Tail Stainless-Steel Cold Cup - 24 fl oz',
        'Iridescent Plastic Cold Cup - 24 fl oz',
        'Siren Stainless-Steel Cold Cup - 24 fl oz',
        'Tinted Bling Plastic Cold Cup - 24 fl oz',
        'Siren Logo Plastic Cold Cup - 24 fl oz',
        'Reusable Plastic Cold-Cup Straw Pack',
        'Cold To-Go Cup - 24 fl oz',
      ],
    },
  ],
  ['Tumblers']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Pebble Stainless-Steel Tumbler - 12 fl oz',
        'Two-Tone Stainless-Steel Tumbler - 16 fl oz',
        'Recycled Stainless-Steel Tumbler - 16 fl oz',
        'Recycled Plastic Tumbler - 16 fl oz',
        'Iridescent Stainless-Steel Tumbler - 16 fl oz',
        'Siren Logo Double-Wall Ceramic Tumbler - 12 fl oz',
        'Ice Stainless-Steel Tumbler - 16 fl oz',
        'Luster Double-Wall Ceramic Tumbler - 8 fl oz',
        'Siren Logo Plastic Hot Cup - 16 fl oz',
      ],
    },
  ],
  ['Mugs']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Concrete Ceramic Mug with Lid - 12 fl oz',
        'Recycled Ceramic Mug - 16 fl oz',
      ],
    },
  ],
  ['Water Bottles']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Siren Stainless-Steel Water Bottle - 20 fl oz',
        'Tritan Plastic Water Bottle - 24 fl oz',
        'Translucent Glass Water Bottle - 22 fl oz',
      ],
    },
  ],
  ['Other']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Reusable Plastic Cold-Cup Straw Pack',
        'Small Shopping Bag',
      ],
    },
  ],
  ['Happy Birthday']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Starbucks Card - Birthday',
      ],
    },
  ],
  ['Thank You']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Starbucks Card - Thank You',
      ],
    },
  ],
  ['Traditional']: [
    {
      title: '',
      url: icon,
      listOfItems: [
        'Starbucks Card - Traditional',
      ],
    },
  ],
};
export const REW = {
  section1: {
    title: 'Getting started is easy',
    subtitle: 'Earn Stars and get rewarded in a few easy steps.',
    arrayItem: [
      {span: '1',
        title: 'Create an account',
        text: `To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.`,
      },
      {span: '2',
        title: 'Order and pay how you’d like',
        text: `Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how`,
      },
      {span: '3',
        title: 'Earn Stars, get Rewards',
        text: `As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!`,
      },
    ],
  },
  section2: {
    title: 'Endless Extras',
    subtitle: 'Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.',
    arrayItem: [
      {icon: freebies,
        title: 'Fun freebies',
        text: 'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
        link: 'Learn more',
      },
      {icon: order,
        title: 'Order & pay ahead',
        text: 'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.',
        link: 'Learn more',
      },
      {icon: free,
        title: 'Get to free faster',
        text: 'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.',
        link: 'Learn more',
      },
    ],
  },
  section3: {
    title: 'Cash or card, you earn Stars',
    subtitle: 'No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.',
    arrayItem: [
      {title: '1★Star per dollar',
        text: 'Pay as you go',
      },
      {icon: scan,
        title: 'Scan and pay separately',
        text: 'Use cash or credit/debit card at the register.',
      },
      {icon: save,
        title: 'Save payment in the app',
        text: 'Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.',
      },
      {title: '2★Stars per dollar',
        text: 'Add funds in the app',
      },
      {icon: preload,
        title: 'Preload',
        text: 'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.',
      },
      {icon: register,
        title: 'Register your gift card',
        text: 'Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.',
      },
    ],
  },
  section4: {
    title: 'Star Codes',
    subtitle: 'Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.',
  },
};
export const FEATURED_CARD = [
  {
    url: FEATURED_CARDS_ICONS.fci,
    title: 'Pumpkin Spice Latte',
    text: 'Espresso and steamed milk with pumpkin, cinnamon and nutmeg flavors, topped with whipped cream.',
  },
  {
    url: FEATURED_CARDS_ICONS.fci2,
    title: 'Pumpkin Cream Cold Brew',
    text: 'Cold brew sweetened with vanilla, finished with pumpkin cream cold foam and a dusting of pumpkin spice topping.',
  },
  {
    url: FEATURED_CARDS_ICONS.fci3,
    title: 'Apple Crisp Oatmilk Macchiato',
    text: 'Layers of Starbucks® Blonde Espresso, warm spices, brown sugar and creamy oatmilk.',
  },
  {
    url: FEATURED_CARDS_ICONS.fci4,
    title: 'Iced Apple Crisp Oatmilk Macchiato',
    text: 'A cool combination of baking spices layered with oatmilk and Starbucks® Blonde Espresso.',
  },
  {
    url: FEATURED_CARDS_ICONS.fci5,
    title: 'Chai Tea Latte',
    text: 'Black tea infused with warming spices, swirled with steamed milk.',
  },
  {
    url: FEATURED_CARDS_ICONS.fci6,
    title: 'Iced Chai Tea Latte',
    text: 'A cool mingling of milk and black tea infused with warming spices.',
  },
  {
    url: FEATURED_CARDS_ICONS.fci7,
    title: 'Pumpkin & Pepita Loaf',
    text: 'Gently spiced pumpkin bread capped with crunchy pepitas.',
  },
  {
    url: FEATURED_CARDS_ICONS.fci8,
    title: 'Chocolate Cake Pop',
    text: 'Bite-sized chocolate cake and chocolate buttercream covered in chocolaty icing.',
  },
];


