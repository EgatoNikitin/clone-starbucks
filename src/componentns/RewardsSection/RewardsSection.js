import PropTypes from 'prop-types';
import '../Rewards/Rewards.scss';

export const RewardsSection = ({array, children})=>{
  return (
    <>
      {array.map((el, _index)=>{
        return (
          <section className='rewards-section'>
            <div className='rewards-title'>
              <h2>{el.title}</h2>
              <p>{el.subtitle}</p>
            </div>
            <div className='rewards-steps'>
              <div className='rewards-item'>
                {children}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

RewardsSection.propTypes = {
  array: PropTypes.array,
  children: PropTypes.node,
};
