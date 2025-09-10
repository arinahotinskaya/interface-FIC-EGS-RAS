import Button from '@components/Button/Button.tsx'
import './Login.scss'
import { useForm } from 'react-hook-form';

interface LoginProps {
  'login': string,
  'password': string
}

function Login() {
  const {register, handleSubmit, formState} = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => console.log(data);

  const loginError = formState.errors.login;
  const passwordError = formState.errors.password;

  return(
    <section className='login'>
      <div className='login__container'>
        <h2 className='login__title'>Вход</h2>
        <form id='login__form' className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('login', {
              required: 'Логин обязательный',
            })} 
            type='text' 
            className='login__form-input' 
            placeholder='Логин'
          />
          {loginError && <p className='login__form-error'>{loginError.message}</p>}
          <input
            {...register('password', {
              required: 'Пароль обязательный',
              minLength: {value: 8, message: 'Минимум 8 символов'},
            })} 
            type='password' 
            className='login__form-input' 
            placeholder='Пароль'
          />
          {passwordError && <p className='login__form-error'>{passwordError.message}</p>}
        </form>
        <Button form='login__form' type='submit' aim='login' content={'Войти'}></Button>
      </div>
    </section>
  );
}

export default Login;