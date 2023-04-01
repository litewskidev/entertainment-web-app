import './ContainerInner.scss';

const ContainerInner = props => {
  return(
    <div className='container__inner'>
      {props.children}
    </div>
  );
};

export default ContainerInner;
