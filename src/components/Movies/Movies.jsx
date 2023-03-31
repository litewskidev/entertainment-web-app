import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
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
      <Container>
        <Navbar />
        <div>
          <SearchForm>Search for movies</SearchForm>
          {(togglePage(searchString) !== true) ? (
            <MoviesList movies={movies} />
          ) : (
            <SearchPage list={movies} title={listTitle} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Movies;
