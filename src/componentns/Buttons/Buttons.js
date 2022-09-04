import PropTypes from 'prop-types';

import './Buttons.scss';

export const Buttons = ({type, text, size}) =>{
  const getButton = ()=>{
    switch (type) {
      case 'green': return (<button type='button' className='button'>
        {text}
      </button>);
      case 'black': return (<button type='button' className='button black'>
        {text}
      </button>);
      case 'light': return (<button type='button'
        className={`button light ${size}`}>
        {text}
      </button>);
    }
  };

  return (
    <>
      {getButton()}
    </>
  );
};

Buttons.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
};
