import './Card.scss';

const Card = ({title, id, year, category, rating}) => {
  return (
    <div className='list__card'>
      <div className='card__image'>
        <img alt={title} src={`${process.env.PUBLIC_URL}/assets/${id}/regular/large.jpg`} />
      </div>
      <div className='card__description body__S'>
        <p>{year}</p>
        <p>•</p>
        <p>{category}</p>
        <p>•</p>
        <p>{rating}</p>
      </div>
      <div className='card__title heading__XS'>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
