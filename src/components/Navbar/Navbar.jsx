import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import ihome from '../../images/icon-nav-home.svg';
import imovies from '../../images/icon-nav-movies.svg';
import itv from '../../images/icon-nav-tv-series.svg';
import ibookmark from '../../images/icon-nav-bookmark.svg';
import avatar from '../../images/image-avatar.png';
import styles from'./Navbar.module.scss';

const Navbar = () => {
  return(
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.navbar__interactive}>
        <nav className={styles.navbar__icons}>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>
            <img src={ihome} alt='icon' />
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/movies'>
            <img src={imovies} alt='icon' />
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/tvseries'>
            <img src={itv} alt='icon' />
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/bookmarked'>
            <img src={ibookmark} alt='icon' />
          </NavLink>
        </nav>
        <div className={styles.navbar__avatar}>
          <img src={avatar} alt='avatar' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
