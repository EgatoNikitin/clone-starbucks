import PropTypes from 'prop-types';
import '../Rewards/Rewards.scss';

export const RewardsSectionItem = ({array})=>{
  return (
    <>
      {array.map((el, _index)=>{
        return (
          <>
            <img src={el.icon}/>
            <h3>{el.title}</h3>
            <p>{el.text}</p>
            <a>Learn more</a>
          </>
        );
      })}
    </>
  );
};

RewardsSectionItem.propTypes = {
  array: PropTypes.array,
};
