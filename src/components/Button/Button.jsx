import './Button.scss';

const Button = props => {
  return (
    <button className='btn body__M'>{props.children}</button>
  );
};

export default Button;
