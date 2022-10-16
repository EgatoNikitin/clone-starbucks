import {Header} from '../../componentns/Header/Header';
import {Rewards} from '../../componentns/Rewards/Rewards';

import './RewardsPage.scss';
import {Footer} from '../../componentns/Footer/Footer';

const RewardsPage = ()=>{
  return (
    <div className='main--wrapper'>
      <Header/>
      <Rewards/>
      <Footer/>
    </div>
  );
};
export default RewardsPage;
