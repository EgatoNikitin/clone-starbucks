import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {getContent} from './utils';
import {useState} from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '70%',
    right: 'auto',
    bottom: 'auto',
    width: '60%',
    height: '100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100,

  },
  overlay: {
    zIndex: 20,
    background: 'rgba(0,0,0,.38)',
    overflow: 'hidden',
  },
};

export const FiltersModal = ({isOpen, setIsOpen}) => {
  const [flavors, setFlavors] = useState({
    ['Add Apple Brown Sugar']: 0,
    ['Add Brown Sugar Syrup']: 0,
    ['Add Caramel Syrup']: 0,
    ['Add Cinnamon Dolce Syrup']: 0,
    ['Add Hazelnut Syrup']: 0,
  });

  const handleIncreaseFlavors = (flavors)=>{
    setFlavors((prevState) => ({
      ...prevState,
      [flavors]: prevState[flavors]++,
    }));
  };

  const handleDecreaseFlavors = (flavors)=>{
    setFlavors((prevState) => ({
      ...prevState,
      [flavors]: prevState[flavors]--,
    }));
  };
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
    >
      {getContent('Flavors',
          flavors,
          handleIncreaseFlavors,
          handleDecreaseFlavors)}
    </Modal>
  );
};

FiltersModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
