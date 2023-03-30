import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import Trending from '../Trending/Trending';
import Recommended from '../Recommended/Recommended';
import './Home.scss';

const Home = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <SearchForm>Search for movies or TV series</SearchForm>
          <Trending />
          <Recommended />
        </div>
      </Container>
    </>
  );
};

export default Home;
