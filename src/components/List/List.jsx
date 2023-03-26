import { useSelector } from 'react-redux';
import { getList } from '../../redux/listRedux';
import './List.scss';

const List = () => {

  const listOf = useSelector(getList);

  return (
    <div className='list__wrapper'>
      {listOf.map((item) => (
        <div key={item.title} className='list__product'>
          <div className='product__image'>
            <img src={item.thumbnail.regular.small} alt='' />
          </div>
          <div className='product__description'>
            <p>{item.year}</p>
            <p>{item.category}</p>
            <p>{item.rating}</p>
          </div>
          <div className='product__title'>
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  )
};

export default List;
