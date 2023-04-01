import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import ContainerInner from '../ContainerInner/ContainerInner';
import SearchForm from '../SearchForm/SearchForm';
import BookmarkedMovies from '../BookmarkedMovies/BookmarkedMovies';
import BookmarkedTvSeries from '../BookmarkedTvSeries/BookmarkedTvSeries';
import SearchPage from '../SearchPage/SearchPage';
import { useSelector } from 'react-redux';
import { getBookmarked } from '../../redux/listRedux';
import { getSearchString } from '../../redux/searchRedux';
import { togglePage } from '../../utils/togglePage';

const Bookmarked = () => {

  const bookmarked = useSelector(state => getBookmarked(state));
  const searchString = useSelector(getSearchString);
  const listTitle = 'Bookmarked Shows';

  return(
    <>
      <Container>
        <Navbar />
        <ContainerInner>
          <SearchForm>Search for bookmarked shows</SearchForm>
          <>
            {(togglePage(searchString) !== true) ? (
              <div>
                <BookmarkedMovies />
                <BookmarkedTvSeries />
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

export default Bookmarked;
