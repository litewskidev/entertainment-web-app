import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import './SignUp.scss';

const SignUp = () => {
  return(
    <div className='signup__wrapper'>
      <Link to='/'>
        <img src={logo} alt='icon' />
      </Link>
      <form className='signup__form__container'>
        <h1 className='heading__L'>Sign Up</h1>
        <input className='body__S' type='email' placeholder='Email address' required />
        <input className='body__S' type='password' placeholder='Password' required/>
        <input type='password' placeholder='Repeat password' required/>
        <div className='signup__btn'>
          <Button>Create an account</Button>
        </div>
        <p className='body__M'>Already have an account?&nbsp;&nbsp;<Link className='link' to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;

