import Trending from '../Trending/Trending';
import Recommended from '../Recommended/Recommended';
import SearchPage from '../SearchPage/SearchPage';
import { useSelector } from 'react-redux';
import { getList } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';
import './Home.scss';

const Home = () => {

  const bookmarked = useSelector(state => getList(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'All Shows';

  return(
    <>
      {(togglePage(searchString) !== true) ? (
        <div>
          <Trending />
          <Recommended />
        </div>
      ) : (
        <div>
          <SearchPage list={bookmarked} title={listTitle} />
        </div>
      )}
    </>
  );
};

export default Home;
