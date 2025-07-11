import './Button.scss'

function Button({ aim, content}) {
  return (
    <>
      <button className={`button ${aim}__button`}>
        {content}
      </button>
    </>
  );
}

export default Button;