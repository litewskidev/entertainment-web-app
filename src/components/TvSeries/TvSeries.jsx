import TvSeriesList from '../TvSeriesList/TvSeriesList';
import SearchPage from '../SearchPage/SearchPage';
import { useSelector } from 'react-redux';
import { getTv } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';
import './TvSeries.scss';

const TvSeries = () => {

  const tvSeries = useSelector(state => getTv(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'TV Series';

  return(
    <>
      {(togglePage(searchString) !== true) ? (
        <TvSeriesList tvSeries={tvSeries} />
      ) : (
        <SearchPage list={tvSeries} title={listTitle} />
      )}
    </>
  );
};

export default TvSeries;
