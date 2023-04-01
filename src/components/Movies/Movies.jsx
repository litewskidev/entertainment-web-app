import MoviesList from '../MoviesList/MoviesList';
import SearchPage from '../SearchPage/SearchPage';
import { useSelector } from 'react-redux';
import { getMovies } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';
import './Movies.scss';

const Movies = () => {

  const movies = useSelector(state => getMovies(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'Movies';

  return(
    <>
      {(togglePage(searchString) !== true) ? (
        <MoviesList movies={movies} />
      ) : (
        <SearchPage list={movies} title={listTitle} />
      )}
    </>
  );
};

export default Movies;
