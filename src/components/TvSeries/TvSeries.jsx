import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
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
      <Container>
        <Navbar />
        <div>
          <SearchForm>Search for TV series</SearchForm>
          {(togglePage(searchString) !== true) ? (
            <TvSeriesList tvSeries={tvSeries} />
          ) : (
            <SearchPage list={tvSeries} title={listTitle} />
          )}
        </div>
      </Container>
    </>
  );
};

export default TvSeries;
