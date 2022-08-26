import {useState} from 'react';
import PropTypes from 'prop-types';
import visibleIcon from '../../imgs/view.png';
import hiddenIcon from '../../imgs/not-visible.png';
import '../../page/LoginPage/LoginPage.scss';

export const PasswordInput = ({passwordValue, passwordChangeHanlder}) => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibilityHandler = ()=>{
    setIsVisible(!isVisible);
  };

  return (
    <>
      {!isVisible ? (
        <div className="input-password" tabIndex="0">
          <input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => passwordChangeHanlder(e.target.value)}
          />
          <img src={hiddenIcon}
            alt="hidden password"
            className="visibilty-icons"
            onClick={setVisibilityHandler}/>
        </div>
      ) : (
        <div className="input-password" tabIndex="0">
          <input
            type="text"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => passwordChangeHanlder(e.target.value)}
          />
          <img src={visibleIcon}
            alt="hidden password"
            className="visibilty-icons"
            onClick={setVisibilityHandler}/>
        </div>
      )}
    </>
  );
};

PasswordInput.propTypes = {
  passwordValue: PropTypes.string,
  passwordChangeHanlder: PropTypes.func,
};

PasswordInput.defaultProps = {
  passwordValue: '',
};
