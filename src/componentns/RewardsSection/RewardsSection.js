import PropTypes from 'prop-types';
import '../Rewards/Rewards.scss';

export const RewardsSection = ({title, subtitle, children})=>{
  return (
    <section className='rewards-section'>
      <div className='rewards-title'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className='rewards-steps'>
        {children}
      </div>
    </section>
  );
};

RewardsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};
