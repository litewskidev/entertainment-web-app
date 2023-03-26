import Search from '../Search/Search';
import TrendingSlider from '../TrendingSlider/TrendingSlider';
import RecommendedList from '../RecommendedList/RecommendedList';
import './Home.scss';

const Home = () => {
  return(
    <div>
      <Search>Search for movies or TV series</Search>
      <TrendingSlider />
      <RecommendedList />
    </div>
  );
};

export default Home;
