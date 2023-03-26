import './SignUp.scss';

const SignUp = () => {
  return(
    <div>
      <h1>Sign Up</h1>
      <input type='email' placeholder='Email address' />
      <input type='password' placeholder='Password' />
      <input type='password' placeholder='Repeat password' />
      <button>Create an account</button>
      <p>Already have an account?<a href='/login'>Login</a></p>
    </div>
  );
};

export default SignUp;
