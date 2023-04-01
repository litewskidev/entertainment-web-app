import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleBookmark } from '../../redux/listRedux';
import { categoryIcon } from '../../utils/categoryIcon';
import ToggleBookmarkIcon from '../ToggleBookmarkIcon/ToggleBookmarkIcon';
import './TrendingList.scss';

const TrendingList = ({title, id, year, category, rating, isBookmarked}) => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleBookmark(id, isBookmarked));
  };
  return(
    <div className='list__trending'>
      <div className='trending__image'>
        <img alt={title} src={`${process.env.PUBLIC_URL}/assets/${id}/regular/large.jpg`} />
        <div>
          <Link className='link' to="/show">
            <div className='overlay'>
              <img className='play__btn' alt='play button' src={`${process.env.PUBLIC_URL}/assets/icons/icon-play.svg`} />
              <p>Play</p>
            </div>
          </Link>
        </div>
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
      <div className='inner__trending'>
        <button className='book__btn' onClick={toggle}><ToggleBookmarkIcon active={isBookmarked} /></button>
      </div>
    </div>
  );
};

export default TrendingList;
