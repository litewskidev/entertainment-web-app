import { useSelector } from 'react-redux';
import { getMovies } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';
import Card from '../Card/Card';
import SearchPage from '../SearchPage/SearchPage';
import './MoviesList.scss';

const MoviesList = () => {

  const movies = useSelector(state => getMovies(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'Movies';

  return(
    <div className='movies'>
      {(togglePage(searchString) !== true) ? (
        <h1 className='heading__L'>{listTitle}</h1>
      ) : (<p></p>)}
      <div className='movies__list'>
        <div className='movies__list__wrapper'>
          {(togglePage(searchString) !== true) ? (
              movies.map(movie => <Card key={movie.id} {...movie} />)
            ) : (
              <SearchPage list={movies} title={listTitle} />
            )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
