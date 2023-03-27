import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import TrendingSlider from '../TrendingSlider/TrendingSlider';
import RecommendedList from '../RecommendedList/RecommendedList';
import './Home.scss';
import SearchForm from '../SearchForm/SearchForm';

const Home = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <SearchForm>Search for movies or TV series</SearchForm>
          <TrendingSlider />
          <RecommendedList />
        </div>
      </Container>
    </>
  );
};

export default Home;
