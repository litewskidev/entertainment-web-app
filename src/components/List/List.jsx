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
            <img alt={item.title} src={`${process.env.PUBLIC_URL}/assets/${item.id}/regular/large.jpg`} />
          </div>
          <div className='product__description body__S'>
            <p>{item.year}</p>
            <p>•</p>
            <p>{item.category}</p>
            <p>•</p>
            <p>{item.rating}</p>
          </div>
          <div className='product__title heading__XS'>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default List;
