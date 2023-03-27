import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import TvSeriesList from '../TvSeriesList/TvSeriesList';
import './TvSeries.scss';

const TvSeries = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <SearchForm>Search for TV series</SearchForm>
          <TvSeriesList />
        </div>
      </Container>
    </>
  );
};

export default TvSeries;
