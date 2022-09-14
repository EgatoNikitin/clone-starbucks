import pumpkin from '../imgs/main-content/pumpkin.jpg';
import iceLatte from '../imgs/main-content/ice-latte.jpg';
import apple from '../imgs/main-content/apple.jpg';
import cakes from '../imgs/main-content/cakes.png';
import coffee from '../imgs/main-content/coffe.png';
import icon from '../imgs/menu/americano.svg';

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
  ],
  ['Hot Coffees']: [
    {
      title: 'Americanos',
      url: icon,
      listOfItems: [
        'Caffè Americano',
      ],
    },
    {
      title: 'Brewed Coffees',
      url: icon,
      listOfItems: [
        'Veranda Blend®',
        'Caffè Misto',
        'Featured Starbucks® Dark Roast Coffee',
        'Featured Medium Roast - Pike Place® Roast',
        'Decaf Pike Place® Roast',
      ],
    },
    {
      title: 'Cappuccinos',
      url: icon,
      listOfItems: [
        'Cappuccino',
      ],
    },
    {
      title: 'Espresso Shots',
      url: icon,
      listOfItems: [
        'Espresso',
        'Espresso Con Panna',
      ],
    },
    {
      title: 'Flat Whites',
      url: icon,
      listOfItems: [
        'Flat White',
        'Honey Almondmilk Flat White',
      ],
    },
    {
      title: 'Lattes',
      url: icon,
      listOfItems: [
        'Pumpkin Spice Latte',
        'Caffè Latte',
        'Cinnamon Dolce Latte',
        'Starbucks Reserve® Latte',
        'Starbucks Reserve® Hazelnut Bianco Latte',
        'Starbucks® Blonde Vanilla Latte',
      ],
    },
    {
      title: 'Macchiatos',
      url: icon,
      listOfItems: [
        'Apple Crisp Oatmilk Macchiato',
        'Caramel Macchiato',
        'Espresso Macchiato',
      ],
    },
    {
      title: 'Mochas',
      url: icon,
      listOfItems: [
        'Caffè Mocha',
        'Starbucks Reserve® Dark Chocolate Mocha',
        'White Chocolate Mocha',
      ],
    },
    {
      title: 'Clover® Brewed Coffees',
      url: icon,
      listOfItems: [
        'Hawai‘i Ka‘u Clover® Starbucks Reserve®',
        'Sun-Dried Zambia Ngoli Estate Clover® Starbucks Reserve®',
        'Vietnam Da Lat Clover® Starbucks Reserve®',
        'Clover® Starbucks Reserve® Costa Rica Naranjo',
        'Rwanda Hingakawa Clover® Starbucks Reserve®',
        'Clover Brewed® Pike Place® Roast',
        'Organic Yukon Blend® Clover®',
        'Clover Brewed® Gold Coast Blend®',
        'Clover Brewed® Breakfast Blend',
        'Kenya Clover®',
        'Veranda Blend® Clover®',
        'Clover Brewed® Starbucks Willow Blend',
        'Decaf Sumatra Clover®',
        'Caffé Verona® Clover®',
        'Clover Brewed® Decaf Pike Place® Roast',
        'Espresso Roast Clover®',
        'Decaf Espresso Roast Clover®',
        'Ethiopia Clover®',
        'French Roast Clover®',
        'Italian Roast Clover®',
        'Komodo Dragon Clover®',
        'Sumatra Clover®',
      ],
    },
    {
      title: 'Coffee Travelers',
      url: icon,
      listOfItems: [
        'Coffee Traveler - Veranda Blend®',
        'Coffee Traveler - Dark Roast',
        'Coffee Traveler - Pike Place® Roast',
        'Coffee Traveler - Decaf Pike Place® Roast',
      ],
    },
  ],
  ['Hot Teas']: [
    {
      title: 'Chai Teas',
      url: icon,
      listOfItems: [
        'Chai Tea Latte',
        'Chai Tea',
      ],
    },
    {
      title: 'Black Teas',
      url: icon,
      listOfItems: [
        'Earl Grey Tea',
        'Teavana® London Fog Tea Latte',
        'Royal English Breakfast Tea',
        'Royal English Breakfast Tea Latte',
      ],
    },
    {
      title: 'Green Teas',
      url: icon,
      listOfItems: [
        'Emperor’s Clouds & Mist®',
        'Matcha Tea Latte',
        'Honey Citrus Mint Tea',
        'Jade Citrus Mint® Brewed Tea',
      ],
    },
    {
      title: 'Herbal Teas',
      url: icon,
      listOfItems: [
        'Mint Majesty®',
        'Peach Tranquility®',
      ],
    },
  ],
  ['Hot Drinks']: [
    {
      title: 'Hot Chocolates',
      url: icon,
      listOfItems: [
        'Hot Chocolate',
        'White Hot Chocolate',
      ],
    },
    {
      title: 'Juice',
      url: icon,
      listOfItems: [
        'Caramel Apple Spice',
        'Steamed Apple Juice',
      ],
    },
    {
      title: 'Steamers',
      url: icon,
      listOfItems: [
        'Pumpkin Spice Crème',
        'Steamed Milk',
        'Vanilla Crème',
      ],
    },
  ],
  ['Frappuccino® Blended Beverages']: [
    {
      title: 'Coffee Frappuccino®',
      url: icon,
      listOfItems: [
        'Pumpkin Spice Frappuccino® Blended Beverage',
        'Apple Crisp Oatmilk Frappuccino® Blended Beverage',
        'Mocha Cookie Crumble Frappuccino®',
        'Caramel Ribbon Crunch Frappuccino® Blended Beverage',
        'Espresso Frappuccino® Blended Beverage',
        'Caffè Vanilla Frappuccino® Blended Beverage',
        'Caramel Frappuccino® Blended Beverage',
        'Coffee Frappuccino® Blended Beverage',
        'Mocha Frappuccino® Blended Beverage',
        'Java Chip Frappuccino® Blended Beverage',
        'White Chocolate Mocha Frappuccino® Blended Beverage',
      ],
    },
    {
      title: 'Creme Frappuccino®',
      url: icon,
      listOfItems: [
        'Pumpkin Spice Crème Frappuccino® Blended Beverage',
        'Apple Crisp Oatmilk Crème Frappuccino® Blended Beverage',
        'Chocolate Cookie Crumble Crème Frappuccino®',
        'Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage',
        'Strawberry Crème Frappuccino® Blended Beverage',
        'Chai Crème Frappuccino®',
        'Double Chocolaty Chip Crème Frappuccino® Blended Beverage',
        'Matcha Crème Frappuccino® Blended Beverage',
        'Vanilla Bean Crème Frappuccino® Blended Crème',
        'White Chocolate Crème Frappuccino® Blended Beverage',
      ],
    },
  ],
  ['Frappuccino® Blended Beverages']: [
    {
      title: 'Cold Brews',
      url: icon,
      listOfItems: [
        'Pumpkin Cream Cold Brew',
        'Chocolate Cream Cold Brew',
        'Salted Caramel Cream Cold Brew',
        'Starbucks® Cold Brew Coffee',
        'Vanilla Sweet Cream Cold Brew',
        'Starbucks® Cold Brew Coffee with Milk',
      ],
    },
    {
      title: 'Nitro Cold Brews',
      url: icon,
      listOfItems: [
        'Nitro Cold Brew',
        'Vanilla Sweet Cream Nitro Cold Brew',
      ],
    },
    {
      title: 'Iced Americano',
      url: icon,
      listOfItems: [
        'Iced Caffè Americano',
      ],
    },
    {
      title: 'Iced Coffees',
      url: icon,
      listOfItems: [
        'Iced Coffee',
        'Iced Coffee with Milk',
        'Iced Espresso',
      ],
    },
    {
      title: 'Iced Shaken Espresso',
      url: icon,
      listOfItems: [
        'Iced Toasted Vanilla Oatmilk Shaken Espresso',
        'Iced Brown Sugar Oatmilk Shaken Espresso',
        'Iced Chocolate Almondmilk Shaken Espresso',
        'Iced Shaken Espresso',
      ],
    },
    {
      title: 'Iced Flat Whites',
      url: icon,
      listOfItems: [
        'Iced Flat White',
        'Iced Honey Almondmilk Flat White',
      ],
    },
    {
      title: 'Iced Lattes',
      url: icon,
      listOfItems: [
        'Iced Pumpkin Spice Latte',
        'Starbucks Reserve® Iced Latte',
        'Starbucks Reserve® Iced Hazelnut Bianco Latte',
        'Iced Caffè Latte',
        'Iced Cinnamon Dolce Latte',
        'Iced Starbucks® Blonde Vanilla Latte',
      ],
    },
    {
      title: 'Iced Macchiatos',
      url: icon,
      listOfItems: [
        'Iced Apple Crisp Oatmilk Macchiato',
        'Iced Caramel Macchiato',
      ],
    },
    {
      title: 'Iced Mochas',
      url: icon,
      listOfItems: [
        'Iced White Chocolate Mocha',
        'Iced Caffè Mocha',
        'Starbucks Reserve® Iced Dark Chocolate Mocha',
      ],
    },
    {
      title: 'Iced Clover® Brewed Coffees',
      url: icon,
      listOfItems: [
        'Hawai‘i Ka‘u Clover® Starbucks Reserve®',
        'Sun-Dried Zambia Ngoli Estate Clover® Starbucks Reserve®',
        'Vietnam Da Lat Clover® Starbucks Reserve®',
        'Clover® Starbucks Reserve® Costa Rica Naranjo',
        'Rwanda Hingakawa Clover® Starbucks Reserve®',
        'Clover Brewed® Pike Place® Roast',
        'Organic Yukon Blend® Clover®',
        'Clover Brewed® Gold Coast Blend®',
        'Clover Brewed® Breakfast Blend',
        'Kenya Clover®',
        'Veranda Blend® Clover®',
        'Clover Brewed® Starbucks Willow Blend',
        'Decaf Sumatra Clover®',
        'Caffé Verona® Clover®',
        'Clover Brewed® Decaf Pike Place® Roast',
        'Espresso Roast Clover®',
        'Decaf Espresso Roast Clover®',
        'Ethiopia Clover®',
        'French Roast Clover®',
        'Italian Roast Clover®',
        'Komodo Dragon Clover®',
        'Sumatra Clover®',
      ],
    },
  ],
  ['Cold Coffees']: [
    {
      title: 'Cold Brews',
      url: icon,
      listOfItems: [
        'Pumpkin Cream Cold Brew',
        'Chocolate Cream Cold Brew',
        'Salted Caramel Cream Cold Brew',
        'Starbucks® Cold Brew Coffee',
        'Vanilla Sweet Cream Cold Brew',
        'Starbucks® Cold Brew Coffee with Milk',
      ],
    },
    {
      title: 'Nitro Cold Brews',
      url: icon,
      listOfItems: [
        'Nitro Cold Brew',
        'Vanilla Sweet Cream Nitro Cold Brew',
      ],
    },
    {
      title: 'Iced Americano',
      url: icon,
      listOfItems: [
        'Iced Caffè Americano',
      ],
    },
    {
      title: 'Iced Coffees',
      url: icon,
      listOfItems: [
        'Iced Coffee',
        'Iced Coffee with Milk',
        'Iced Espresso',
      ],
    },
    {
      title: 'Iced Shaken Espresso',
      url: icon,
      listOfItems: [
        'Iced Toasted Vanilla Oatmilk Shaken Espresso',
        'Iced Brown Sugar Oatmilk Shaken Espresso',
        'Iced Chocolate Almondmilk Shaken Espresso',
        'Iced Shaken Espresso',
      ],
    },
    {
      title: 'Iced Flat Whites',
      url: icon,
      listOfItems: [
        'Iced Flat White',
        'Iced Honey Almondmilk Flat White',
      ],
    },
    {
      title: 'Iced Lattes',
      url: icon,
      listOfItems: [
        'Iced Pumpkin Spice Latte',
        'Starbucks Reserve® Iced Latte',
        'Starbucks Reserve® Iced Hazelnut Bianco Latte',
        'Iced Caffè Latte',
        'Iced Cinnamon Dolce Latte',
        'Iced Starbucks® Blonde Vanilla Latte',
      ],
    },
    {
      title: 'Iced Macchiatos',
      url: icon,
      listOfItems: [
        'Iced Apple Crisp Oatmilk Macchiato',
        'Iced Caramel Macchiato',
      ],
    },
    {
      title: 'Iced Mochas',
      url: icon,
      listOfItems: [
        'Iced White Chocolate Mocha',
        'Iced Caffè Mocha',
        'Starbucks Reserve® Iced Dark Chocolate Mocha',
      ],
    },
    {
      title: 'Iced Clover® Brewed Coffees',
      url: icon,
      listOfItems: [
        'Hawai‘i Ka‘u Clover® Starbucks Reserve®',
        'Sun-Dried Zambia Ngoli Estate Clover® Starbucks Reserve®',
        'Vietnam Da Lat Clover® Starbucks Reserve®',
        'Clover® Starbucks Reserve® Costa Rica Naranjo',
        'Rwanda Hingakawa Clover® Starbucks Reserve®',
        'Clover Brewed® Pike Place® Roast',
        'Organic Yukon Blend® Clover®',
        'Clover Brewed® Gold Coast Blend®',
        'Clover Brewed® Breakfast Blend',
        'Kenya Clover®',
        'Veranda Blend® Clover®',
        'Clover Brewed® Starbucks Willow Blend',
        'Decaf Sumatra Clover®',
        'Caffé Verona® Clover®',
        'Clover Brewed® Decaf Pike Place® Roast',
        'Espresso Roast Clover®',
        'Decaf Espresso Roast Clover®',
        'Ethiopia Clover®',
        'French Roast Clover®',
        'Italian Roast Clover®',
        'Komodo Dragon Clover®',
        'Sumatra Clover®',
      ],
    },
  ],
  ['Iced Teas']: [
    {
      title: 'Bottled Teas',
      url: icon,
      listOfItems: [
        'Teavana® Sparkling Unsweetened Peach Nectarine Green Tea',
        'Teavana® Mango Black Tea',
      ],
    },
    {
      title: 'Iced Black Teas',
      url: icon,
      listOfItems: [
        'Iced Black Tea',
        'Iced Black Tea Lemonade',
        'Iced Royal English Breakfast Tea Latte',
        'Iced London Fog Tea Latte',
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
