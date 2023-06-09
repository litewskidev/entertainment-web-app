import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import ContainerInner from '../ContainerInner/ContainerInner';
import SearchForm from '../SearchForm/SearchForm';
import Trending from '../Trending/Trending';
import Recommended from '../Recommended/Recommended';
import SearchPage from '../SearchPage/SearchPage';
import { useSelector } from 'react-redux';
import { getList } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';

const Home = () => {

  const bookmarked = useSelector(state => getList(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'All Shows';

  return(
    <>
      <Container>
        <Navbar />
        <ContainerInner>
          <SearchForm>Search for movies or TV series</SearchForm>
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
        </ContainerInner>
      </Container>
    </>
  );
};

export default Home;
