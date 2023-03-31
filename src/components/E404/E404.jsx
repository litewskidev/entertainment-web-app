import './E404.scss';

const E404 = () => {
  return(
    <div className='error__wrapper'>
      <div className='error'>
        <h1 className='heading__L'><span>’’</span>I'm sorry! I couldn't find the page You were looking for.<span>’’</span></h1>
        <p className='body__M'><span>404 </span> Not Found</p>
      </div>
    </div>
  );
};

export default E404;
