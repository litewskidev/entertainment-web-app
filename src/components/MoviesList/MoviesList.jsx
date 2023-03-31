import Card from '../Card/Card';
import './MoviesList.scss';

const MoviesList = ({ movies }) => {
  return(
    <div className='movies'>
      <h1 className='heading__L'>Movies</h1>
      <div className='movies__list'>
        <div className='movies__list__wrapper'>
          {movies.map(movie => <Card key={movie.id} {...movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
