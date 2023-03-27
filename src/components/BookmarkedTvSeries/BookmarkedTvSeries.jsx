import { useSelector } from 'react-redux';
import { getBookmarkedTvSeries } from '../../redux/listRedux';
import Card from '../Card/Card';
import './BookmarkedTvSeries.scss';

const BookmarkedTvSeries = () => {

  const bookTvSeries = useSelector(getBookmarkedTvSeries);

  return(
    <div className='bookmarked__tvseries'>
      <h1 className='heading__L'>Bookmarked TV Series</h1>
      <div className='bookmarked__tvseries__list'>
        <div className='bookmarked__tvseries__list__wrapper'>
          {bookTvSeries.map(bookTv => <Card key={bookTv.id} {...bookTv} />)}
        </div>
      </div>
    </div>
  );
};

export default BookmarkedTvSeries;
