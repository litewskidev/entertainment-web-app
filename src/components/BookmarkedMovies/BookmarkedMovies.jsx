import { useSelector } from 'react-redux';
import { getBookmarkedMovies } from '../../redux/listRedux';
import Card from '../Card/Card';
import './BookmarkedMovies.scss';

const BookmarkedMovies = () => {

  const bookMovies = useSelector(state => getBookmarkedMovies(state));

  return(
    <div className='bookmarked__movies'>
      <h1 className='heading__L'>Bookmarked Movies</h1>
      <div className='bookmarked__movies__list'>
        <div className='bookmarked__movies__list__wrapper'>
          {bookMovies.map(bookMov => <Card key={bookMov.id} {...bookMov} />)}
        </div>
      </div>
    </div>
  );
};

export default BookmarkedMovies;
