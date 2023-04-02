import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import './Login.scss';

const Login = () => {
  return(
    <div className='login__wrapper'>
      <Link to='/'>
        <img src={logo} alt='icon' />
      </Link>
      <form className='login__form__container'>
        <h1 className='heading__L'>Login</h1>
        <input className='body__S' type='email' placeholder='Email address' required />
        <input className='body__S' type='password' placeholder='Password' required/>
        <div className='login__btn'>
        <Button>Login to your account</Button>
        </div>
        <p className='body__M'>Don't have an account?&nbsp;&nbsp;<Link className='link' to='/signup'>Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;
