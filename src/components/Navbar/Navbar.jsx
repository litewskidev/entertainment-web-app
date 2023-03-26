import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import ihome from '../../images/icon-nav-home.svg';
import imovies from '../../images/icon-nav-movies.svg';
import itv from '../../images/icon-nav-tv-series.svg';
import ibookmark from '../../images/icon-nav-bookmark.svg';
import avatar from '../../images/image-avatar.png';

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar__interactive'>
        <nav className='navbar__icons'>
          <Link to='/'>
            <img src={ihome} alt='icon' />
          </Link>
          <Link to='/movies'>
            <img src={imovies} alt='icon' />
          </Link>
          <Link to='/tvseries'>
            <img src={itv} alt='icon' />
          </Link>
          <Link to='/bookmarked'>
            <img src={ibookmark} alt='icon' />
          </Link>
        </nav>
        <div className='navbar__avatar'>
          <img src={avatar} alt='avatar' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
