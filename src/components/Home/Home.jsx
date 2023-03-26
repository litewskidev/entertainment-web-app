import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import TrendingSlider from '../TrendingSlider/TrendingSlider';
import RecommendedList from '../RecommendedList/RecommendedList';
import './Home.scss';
import Button from '../Button/Button';

const Home = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <Search>Search for movies or TV series</Search>
          <TrendingSlider />
          <RecommendedList />
          <Button>Login to your account</Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
