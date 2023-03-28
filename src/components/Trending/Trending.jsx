import { useSelector } from 'react-redux';
import { getTrending } from '../../redux/listRedux';
import TrendingList from '../TrendingList/TrendingList';
import './Trending.scss';

const Trending = () => {

  const trendingShows = useSelector(state => getTrending(state));

  return(
    <div className='trending'>
      <h1 className='heading__L'>Trending</h1>
      <div className='trending__slider'>
        {trendingShows.map(trendingShow => <TrendingList key={trendingShow.id} {...trendingShow} />)}
      </div>
    </div>
  );
};

export default Trending;
