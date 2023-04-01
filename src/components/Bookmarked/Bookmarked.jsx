import BookmarkedMovies from '../BookmarkedMovies/BookmarkedMovies';
import BookmarkedTvSeries from '../BookmarkedTvSeries/BookmarkedTvSeries';
import SearchPage from '../SearchPage/SearchPage';
import { useSelector } from 'react-redux';
import { getBookmarked } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';
import './Bookmarked.scss';

const Bookmarked = () => {

  const bookmarked = useSelector(state => getBookmarked(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'Bookmarked Shows';

  return(
    <>
      {(togglePage(searchString) !== true) ? (
        <div>
          <BookmarkedMovies />
          <BookmarkedTvSeries />
        </div>
      ) : (
        <div>
          <SearchPage list={bookmarked} title={listTitle} />
        </div>
      )}
    </>
  );
};

export default Bookmarked;
