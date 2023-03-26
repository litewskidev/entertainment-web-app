import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import BookmarkedMovies from '../BookmarkedMovies/BookmarkedMovies';
import BookmarkedTvSeries from '../BookmarkedTvSeries/BookmarkedTvSeries';
import './Bookmarked.scss';

const Bookmarked = () => {
  return(
    <>
      <Container>
        <Navbar />
        <div>
          <Search>Search for bookmarked shows</Search>
          <BookmarkedMovies />
          <BookmarkedTvSeries />
        </div>
      </Container>
    </>
  );
};

export default Bookmarked;
