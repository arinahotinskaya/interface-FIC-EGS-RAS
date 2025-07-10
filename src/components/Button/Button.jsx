function Button({ aim, content}) {
  return (
    <>
      <button className={`${aim}__button`}>
        {content}
      </button>
    </>
  );
}

export default Button;