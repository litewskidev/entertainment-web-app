import './Login.scss';

const Login = () => {
  return(
    <div>
      <h1>Login</h1>
      <input type='email' placeholder='Email address' />
      <input type='password' placeholder='Password' />
      <button>Login to your account</button>
      <p>Don't have an account?<a href='/signup'>Sign Up</a></p>
    </div>
  );
};

export default Login;
