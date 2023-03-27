import RecommendedList from '../RecommendedList/RecommendedList';
import './Recommended.scss';

const Recommended = () => {
  return(
    <div className='recommended'>
      <h1  className='heading__L'>Recommended for you</h1>
      <div className='recommended__list'>
        <RecommendedList />
      </div>
    </div>
  );
};

export default Recommended;
