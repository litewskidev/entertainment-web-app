import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './E404.scss';

const E404 = () => {
  return(
    <div className='error__wrapper'>
      <div className='error'>
        <h1 className='heading__L'>I'm sorry...</h1>
        <p className='body__M'><span>404 </span> Not Found</p>
        <Link to='/' className='error__logo'>
          <img src={logo} alt='logo' />
          <p className='heading__L'>Go back</p>
        </Link>
      </div>
    </div>
  );
};

export default E404;
