import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../../redux/listRedux';
import ToggleBookmarkIcon from '../ToggleBookmarkIcon/ToggleBookmarkIcon';
import clsx from 'clsx';

const Card = ({title, id, year, category, rating, isBookmarked}) => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleBookmark(id, isBookmarked));
  };

  return (
    <div className={styles.list__card}>
      <div className={styles.card__image}>
        <img alt={title} src={`${process.env.PUBLIC_URL}/assets/${id}/regular/large.jpg`} />
      </div>
      <div className={clsx(styles.card__description, 'body__S')}>
        <p>{year}</p>
        <p>•</p>
        <p>{category}</p>
        <p>•</p>
        <p>{rating}</p>
      </div>
      <div className={clsx(styles.card__title, 'heading__XS')}>
        <p>{title}</p>
      </div>
      <div className={styles.inner__card}>
        <button className={styles.bookBtn} onClick={toggle}><ToggleBookmarkIcon active={isBookmarked} /></button>
      </div>
    </div>
  );
};

export default Card;
