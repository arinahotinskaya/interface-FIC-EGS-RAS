import Button from '@components/Button/Button';
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
          <Button form="login_form" type="submit" aim="login" content={'войти'}></Button>
        </div>
      </section>
    </>
  );
}

export default Login;