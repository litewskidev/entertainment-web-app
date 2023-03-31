import './SearchForm.scss';
import isearch from '../../images/icon-search.svg';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { search } from '../../redux/searchRedux';

const SearchForm = props => {

  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    dispatch(search(searchString));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(search(searchString));
    setSearchString("");
  };

  return(
    <form className='searchbar' onSubmit={handleSubmit}>
      <button className='searchBtn'><img src={isearch} alt='' /></button>
      <input value={searchString} onChange={e => setSearchString(e.target.value)} className='heading__M' type='text' placeholder={props.children} />
    </form>
  );
};

export default SearchForm;
