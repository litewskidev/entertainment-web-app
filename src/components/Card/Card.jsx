import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../../redux/listRedux';
import ToggleBookmarkIcon from '../ToggleBookmarkIcon/ToggleBookmarkIcon';
import clsx from 'clsx';
import { categoryIcon } from '../../utils/categoryIcon';
import { Link } from 'react-router-dom';

const Card = ({title, id, year, category, rating, isBookmarked}) => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleBookmark(id, isBookmarked));
  };

  return(
    <div className={styles.list__card}>
      <div className={styles.card__image}>
        <img className={styles.main__pic} alt={title} src={`${process.env.PUBLIC_URL}/assets/${id}/regular/large.jpg`} />
        <div>
          <Link className={styles.link} to="/show">
            <div className={styles.overlay}>
              <img className={styles.play__btn} alt='play button' src={`${process.env.PUBLIC_URL}/assets/icons/icon-play.svg`} />
              <p>Play</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={clsx(styles.card__description, 'body__S')}>
        <p>{year}</p>
        <p>&#8226;</p>
        <p><img alt='category icon' src={categoryIcon(category)} />&nbsp;&nbsp;{category}</p>
        <p>&#8226;</p>
        <p>{rating}</p>
      </div>
      <div className={clsx(styles.card__title, 'heading__XS')}>
        <p>{title}</p>
      </div>
      <div className={styles.inner__card}>
        <button className={styles.book__btn} onClick={toggle}><ToggleBookmarkIcon active={isBookmarked} /></button>
      </div>
    </div>
  );
};

export default Card;
