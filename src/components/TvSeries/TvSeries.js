import Search from '../Search/Search';
import TvSeriesList from '../TvSeriesList/TvSeriesList';
import './TvSeries.scss';

const TvSeries = () => {
  return(
    <div>
      <Search>Search for TV series</Search>
      <TvSeriesList />
    </div>
  );
};

export default TvSeries;
