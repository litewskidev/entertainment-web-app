import { useSelector } from 'react-redux';
import { getTv } from '../../redux/listRedux';
import Card from '../Card/Card';
import './TvSeriesList.scss';

const TvSeriesList = () => {

  const tvSeries = useSelector(state => getTv(state));

  return(
    <div className='tvseries'>
      <h1 className='heading__L'>TV Series</h1>
      <div className='tvseries__list'>
      <div className='tvseries__list__wrapper'>
        {tvSeries.map(show => <Card key={show.id} {...show} />)}
      </div>
      </div>
    </div>
  );
};

export default TvSeriesList;
