import PropTypes from 'prop-types';

export const RewardsSection = ({title, subtitle, children})=>{
  return (
    <>
      <h3>{title}</h3>
      <h5>{subtitle}</h5>
      {children}
    </>
  );
};

RewardsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};
