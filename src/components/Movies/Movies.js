import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';
import './Movies.scss';

const Movies = () => {
  return(
    <div>
      <Search>Search for movies</Search>
      <MoviesList />
    </div>
  );
};

export default Movies;
