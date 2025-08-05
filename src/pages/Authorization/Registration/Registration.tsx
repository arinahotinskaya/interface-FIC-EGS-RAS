import Button from '@components/Button/Button.tsx'
import './Registration.scss'

function Registration() {
  return (
    <section className='reg'>
      <div className='reg__container'>
        <h2 className='reg__title'>Регистрация</h2>
        <form action='' id='reg__form' className='reg__form'>
          <input type='text' className='reg__form-input' placeholder='Имя пользователя' required/>
          <input type='email' className='reg__form-input' placeholder='Почта' required/>
          <input type='text' className='reg__form-input' placeholder='Организация' required/>
          <input type='password' className='reg__form-input' placeholder='Пароль' required/>
          <input type='password' className='reg__form-input' placeholder='Подтверждение пароля' required/>
        </form> 
        <Button form='reg_form' type='submit' aim='reg' content={'зарегистрироваться'}></Button>
      </div>
    </section>
  );
}

export default Registration;