import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';
import './Movies.scss';

const Movies = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <Search>Search for movies</Search>
          <MoviesList />
        </div>
      </Container>
    </>
  );
};

export default Movies;
