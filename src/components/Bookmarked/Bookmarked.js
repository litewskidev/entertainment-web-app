import Search from '../Search/Search';
import BookmarkedMovies from '../BookmarkedMovies/BookmarkedMovies';
import BookmarkedTvSeries from '../BookmarkedTvSeries/BookmarkedTvSeries';
import './Bookmarked.scss';

const Bookmarked = () => {
  return(
    <div>
      <Search>Search for bookmarked shows</Search>
      <BookmarkedMovies />
      <BookmarkedTvSeries />
    </div>
  );
};

export default Bookmarked;
