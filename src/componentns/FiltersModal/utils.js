import {FLAVORS} from '../../constants/itemFilters';
import './FiltersModal.scss';

export const getContent = (
    type,
    flavors,
    handleIncreaseFlavors,
    handleDecreaseFlavors)=>{
  switch (type) {
    case 'Flavors':
      return (
        <div className='flavors--wrapper'>
          <div className='flavors--content'>
            <h3 className='flavors--title'>{FLAVORS.title}</h3>
            <div>
              {FLAVORS.filters.map((el, index)=>{
                return (<div
                  key={el.title+index}
                >
                  <h4 className='flavors--subtitle'>{el.title}</h4>
                  {el.values.map((el, index)=>(
                    <div
                      className='flavors--list--item'
                      key={el}
                    ><span>{el}</span>
                      <div className='flavors--counter'>
                        {!!flavors[el] && (
                          <>
                            <span className='plus-sign'
                              onClick={()=>
                              // eslint-disable-next-line max-len
                                handleDecreaseFlavors(Object.keys(flavors)[index])}>
                         &#8722;
                            </span>
                            <span>{flavors[el]}</span>
                          </>)
                        }
                        <span className='plus-sign'
                          onClick={()=>
                            handleIncreaseFlavors(Object.keys(flavors)[index])}>
                        &#43;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>);
              })}
            </div>
          </div>
        </div>
      );
    default: return null;
  }
};
