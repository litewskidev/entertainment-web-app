import './Search.scss';

const Search = props => {
  return(
    <div>
      <input type='text' placeholder={props.children} />
    </div>
  );
};

export default Search;
