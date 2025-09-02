import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo-container'>
          <picture>
            <source 
              srcSet='src/assets/logo/header-logo-320.svg' 
              media='(max-width: 320px)' 
            />
            <source 
              srcSet='src/assets/logo/header-logo-575.svg' 
              media='(max-width: 575px)' 
            />
            <source 
              srcSet='src/assets/logo/header-logo-767.svg' 
              media='(max-width: 767px)' 
            />
            <source 
              srcSet='src/assets/logo/header-logo-992.svg' 
              media='(max-width: 992px)' 
            />
            <img 
              src='src/assets/logo/header-logo-1600.svg' 
              alt='Федеральный исследовательский центр – Единая геофизическая служба РАН' 
              className='header__logo' 
            />
          </picture>
        </div>
        <div className='header__nav-container'>
          <nav className='header__nav'>
            <Link to='/Information' className='header__link'>Информация</Link>
            <Link to='/Stations' className='header__link'>Станции</Link>
            <Link to='/Access' className='header__link'>Доступ к данным</Link>
          </nav>
          <div className='header__auth'>
            <Link to='/Login' className='header__auth-link'>Вход</Link>
            <span className='header__auth-slash'>/</span>
            <Link to='/Registration' className='header__auth-link'>Регистрация</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
