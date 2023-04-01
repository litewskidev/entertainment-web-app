import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getSearchString } from '../../redux/searchRedux';
import './SearchPage.scss';

const SearchPage = ({ list, title}) => {

  const searchString = useSelector(getSearchString);

  return(
    <>
      <div className='search__page'>
        <div className='search__page__list'>
          {list.map(result => <Card key={result.id} {...result} />)}
        </div>
        <div>
          <div className='result__string heading__L'>
            <div>Found {list.length} results for '{searchString}' in <span>&nbsp;{title}</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
