import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import TvSeriesList from '../TvSeriesList/TvSeriesList';
import './TvSeries.scss';

const TvSeries = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <Search>Search for TV series</Search>
          <TvSeriesList />
        </div>
      </Container>
    </>
  );
};

export default TvSeries;
