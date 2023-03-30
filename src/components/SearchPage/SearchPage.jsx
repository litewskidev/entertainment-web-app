import { useSelector } from 'react-redux';
import { getSearchString } from '../../redux/searchRedux';
import Card from '../Card/Card';
import './SearchPage.scss';

const SearchPage = ({ list, title}) => {

  const searchString = useSelector(getSearchString);

  return(
    <div>
      <div className='search__page'>
        <div className='search__page__list'>
          {list.map(result => <Card key={result.id} {...result} />)}
        </div>
        <div>
          <p className='result__string heading__L'>
            <div>Found {list.length} results for '{searchString}' in <span>{title}</span></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
