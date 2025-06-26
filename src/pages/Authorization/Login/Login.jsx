import './Login.scss'

function Login() {
  return(
    <>
      <section className="login">
        <div className="login__container">
          <h2 className="login__title">Вход</h2>
          <form action="" id="login__form" className="login__form">
            <input type="text" className="login__form-input" placeholder='Логин' required/>
            <input type="password" className="login__form-input" placeholder='Пароль' required/>
          </form> 
          <button form="login__form" type="submit" className="login__btn">войти</button>
        </div>
      </section>
    </>
  );
}

export default Login;