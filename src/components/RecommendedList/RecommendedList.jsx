import { useSelector } from 'react-redux';
import { getList } from '../../redux/listRedux';
import Card from '../Card/Card';
import './RecommendedList.scss';

const RecommendedList = () => {

  const listOf = useSelector(state => getList(state));

  return(
    <div className='list__wrapper'>
      {listOf.map(recomend => <Card key={recomend.id} {...recomend} />)}
    </div>
  );
};

export default RecommendedList;
