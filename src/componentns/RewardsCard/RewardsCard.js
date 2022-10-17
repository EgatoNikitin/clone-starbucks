import PropTypes from 'prop-types';
import icon from '../../imgs/rewards/rew.png';
import {CardItem} from './CardItem/CardItem';

export const RewardsCard = ({price})=>{
  const getContent = ()=>{
    switch (price) {
      case '25': return (
        <CardItem
          title='Customize your drink'
          icon={icon}
          text='Make your drink just right with an extra
          espresso shot, dairy substitute or a dash
          of your favorite syrup.'/>
      );
      case '50': return (
        <CardItem
          title='Brewed hot coffee, bakery item or hot tea'
          icon={icon}
          text='Pair coffee cake or an almond croissant with your
                fresh cup of hot brew.'/>
      );
      case '150': return (
        <CardItem
          title='Handcrafted drink, hot breakfast or parfait'
          icon={icon}
          text='Have a really good morning with a breakfast sandwich,
                oatmeal or your favorite drink.'/>
      );
      case '200': return (
        <CardItem
          title='Salad, sandwich or protein box'
          icon={icon}
          text='Nourish your day with a hearty Chipotle Chicken
                Wrap or Eggs & Cheese Protein Box.'/>
      );
      case '400': return (
        <CardItem
          title='Select merchandise or at-home coffee'
          icon={icon}
          text='Take home a signature cup, a bag of coffee or
                your choice of select coffee accessories.'/>
      );
      default: return null;
    }
  };

  return (
    <>
      {getContent()}
    </>
  );
};

RewardsCard.propTypes = {
  price: PropTypes.string.isRequired,
};

RewardsCard.defaultProps = {
  price: '25',
};
