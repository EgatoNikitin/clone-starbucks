import {useState} from 'react';
import PropTypes from 'prop-types';
import visibleIcon from '../../imgs/view.png';
import hiddenIcon from '../../imgs/not-visible.png';
import '../../page/LoginPage/LoginPage.scss';

export const PasswordInput =({
  passwordValue, passwordChangeHanlder, placeholder, showicon}) => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibilityHandler = ()=>{
    setIsVisible(!isVisible);
  };

  return (
    <>
      {!isVisible && showicon ? (
        <div className="input-password" tabIndex="0">
          <input
            type="password"
            placeholder={placeholder}
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
            placeholder={placeholder}
            value={passwordValue}
            onChange={(e) => passwordChangeHanlder(e.target.value)}
          />
          {showicon && <img src={visibleIcon}
            alt="hidden password"
            className="visibilty-icons"
            onClick={setVisibilityHandler}/>}
        </div>
      )}
    </>
  );
};

PasswordInput.propTypes = {
  showicon: PropTypes.bool,
  passwordValue: PropTypes.string,
  passwordChangeHanlder: PropTypes.func,
  placeholder: PropTypes.string,
};

PasswordInput.defaultProps = {
  showicon: true,
  passwordValue: '',
};
