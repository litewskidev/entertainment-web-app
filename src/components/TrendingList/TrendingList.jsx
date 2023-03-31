import { categoryIcon } from '../../utils/categoryIcon';
import './TrendingList.scss';

const TrendingList = ({title, id, year, category, rating}) => {
  return(
    <div className='list__trending'>
      <div className='trending__image'>
        <img alt={title} src={`${process.env.PUBLIC_URL}/assets/${id}/regular/large.jpg`} />
      </div>
      <div className='trending__inner'>
        <div className='trending__description body__S'>
          <p>{year}</p>
          <p>&#8226;</p>
          <p><img alt='category icon' src={categoryIcon(category)} />&nbsp;&nbsp;{category}</p>
          <p>&#8226;</p>
          <p>{rating}</p>
        </div>
        <div className='trending__title heading__S'>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingList;
