import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import BookmarkedMovies from '../BookmarkedMovies/BookmarkedMovies';
import BookmarkedTvSeries from '../BookmarkedTvSeries/BookmarkedTvSeries';
import './Bookmarked.scss';

const Bookmarked = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <SearchForm>Search for bookmarked shows</SearchForm>
          <BookmarkedMovies />
          <BookmarkedTvSeries />
        </div>
      </Container>
    </>
  );
};

export default Bookmarked;
