import { useSelector } from 'react-redux';
import { getTrending } from '../../redux/listRedux';
import TrendingSlider from '../TrendingSlider/TrendingSlider';
import './TrendingSlider.scss';

const Trending = () => {

  const trendingShows = useSelector(getTrending);

  return(
    <div className='trending'>
      <h1 className='heading__L'>Trending</h1>
      <div className='trending__slider'>
        {trendingShows.map(trendingShow => <TrendingSlider key={trendingShow.id} {...trendingShow} />)}
      </div>
    </div>
  );
};

export default Trending;
