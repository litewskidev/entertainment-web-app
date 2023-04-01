import './E404.scss';

const E404 = () => {
  return(
    <div className='error__wrapper'>
      <div className='error'>
        <h1 className='heading__L'>I'm sorry.</h1>
        <p className='body__M'><span>404 </span> Not Found</p>
      </div>
    </div>
  );
};

export default E404;
