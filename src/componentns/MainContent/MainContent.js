import {MainCard} from '../MainCard/MainCard';
import {MAIN_CONTENT} from '../../constants';

import './MainContent.scss';

export const MainContent = () => {
  return (
    <main>
      {
        MAIN_CONTENT.map(({text, title, direction, url, buttonText}, index)=>{
          return <MainCard text={text}
            title={title}
            direction={direction}
            url={url}
            key={index}
            buttonText={buttonText}
          />;
        },
        )
      }

    </main>
  );
};
