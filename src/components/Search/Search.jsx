import './Search.scss';
import isearch from '../../images/icon-search.svg';

const Search = props => {
  return(
    <div className='searchbar'>
      <img src={isearch} alt='' />
      <input className='heading__M' type='text' placeholder={props.children} />
    </div>
  );
};

export default Search;
