import { useState } from "react";
import visibleIcon from "../imgs/view.png";
import hiddenIcon from "../imgs/not-visible.png";
import '../../page/LoginPage.css'

export const PasswordInput = ({ passwordValue, passwordChangeHanlder }) => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibilityHandler = ()=>{
    setIsVisible(!isVisible)
  }

  return (
    <>
      {!isVisible ? (
        <div className="input-password" tabindex="0">
          <input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => passwordChangeHanlder(e.target.value)}
          />
          <img src={hiddenIcon} alt="hidden password" className="visibilty-icons" onClick={setVisibilityHandler}/>
        </div>
      ) : (
        <div className="input-password" tabindex="0">
        <input
          type="text"
          placeholder="Password"
          value={passwordValue}
          onChange={(e) => passwordChangeHanlder(e.target.value)}
        />
        <img src={visibleIcon} alt="hidden password" className="visibilty-icons" onClick={setVisibilityHandler}/>
      </div>
      )}
    </>
  );
};
