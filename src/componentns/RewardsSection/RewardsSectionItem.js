/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import '../Rewards/Rewards.scss';

export const RewardsSectionItem = ({array}) => {
  const getRewardsSectionItem = () => {
    return array.map((el, _index) => {
      if (!el.icon && el.span) {
        return (
          <div className='rewards-item'>
            <span>{el.span}</span>
            <h3>{el.title}</h3>
            <p>{el.text}</p>
          </div>);
      } else if (el.icon) {
        return (<div className='rewards-item'>
          <img src={el.icon} />
          <h3>{el.title}</h3>
          <p>{el.text}</p>
          <a>{el.link}</a>
        </div>);
      } else if (!el.span && !el.icon) {
        return (<div className='rewards-item'>
          <h3>{el.title}</h3>
          <p>{el.text}</p>
        </div>);
      }
    });
  };


  return (
    <>
      {getRewardsSectionItem()}
    </>
  );
};



RewardsSectionItem.propTypes = {
  array: PropTypes.array,
  item: PropTypes.any,
};



//   return (
//     <>
//       {array.map((el, _index) => {
//         return (
//           <div className='rewards-item'>
//             {
//             switch (el) {
//                 case el.span: return (
//                   <>
//                     <span>{el.span}</span>
//                     <h3>{el.title}</h3>
//                     <p>{el.text}</p>
//                   </>
//                 );
//                 case el.icon: return(
//                   <>
//                     <img src={el.icon} />
//                     <h3>{el.title}</h3>
//                     <p>{el.text}</p>
//                     <a>{el.link}</a>
//                   </>
//                 );
//             } }
//           </div>
//         );
//       })}
//     </>
//   );
// };

