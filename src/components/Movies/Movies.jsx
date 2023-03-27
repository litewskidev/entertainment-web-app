import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import './Movies.scss';

const Movies = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <SearchForm>Search for movies</SearchForm>
          <MoviesList />
        </div>
      </Container>
    </>
  );
};

export default Movies;
