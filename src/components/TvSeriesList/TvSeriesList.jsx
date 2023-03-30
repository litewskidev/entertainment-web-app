import { useSelector } from 'react-redux';
import { getTv } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';
import Card from '../Card/Card';
import SearchPage from '../SearchPage/SearchPage';
import './TvSeriesList.scss';

const TvSeriesList = () => {

  const tvSeries = useSelector(state => getTv(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'TV Series';

  return(
    <div className='tvseries'>
      {(togglePage(searchString) !== true) ? (
        <h1 className='heading__L'>{listTitle}</h1>
      ) : (<p></p>)}
      <div className='tvseries__list'>
      <div className='tvseries__list__wrapper'>
        {(togglePage(searchString) !== true) ? (
          tvSeries.map(show => <Card key={show.id} {...show} />)
          ) : (
            <SearchPage list={tvSeries} title={listTitle} />
          )}
      </div>
      </div>
    </div>
  );
};

export default TvSeriesList;
