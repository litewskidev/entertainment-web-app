import './ToggleBookmarkIcon.scss';

const ToggleBookmarkIcon = ({ active }) => {

  const activeMark = `${process.env.PUBLIC_URL}/assets/icons/icon-bookmark-full.svg`;
  const inactiveMark = `${process.env.PUBLIC_URL}/assets/icons/icon-bookmark-empty.svg`;

  return(
    <div className='toggle'>
      {active ? (
        <img alt='active icon' src={activeMark} className='active' />
      ) : (
        <img alt='inactive icon' src={inactiveMark} className='inactive' />
      )}
    </div>
  );
};

export default ToggleBookmarkIcon;
