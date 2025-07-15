import { Link } from "react-router-dom"
import "./Header.scss"

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo-container">
            <img src="src/assets/header-logo.svg" alt="Федеральный исследовательский центр - Единая геофизическая служба РАН" className="header__logo" />
          </div>
          <div className="header__nav-container">
            <nav className="header__nav">
              <Link to="/" className="header__link">Информация</Link>
              <Link to="/stations-page" className="header__link">Станции</Link>
              <Link to="/access-page" className="header__link">Доступ к данным</Link>
            </nav>
            <div className="header__auth">
              <Link to="/login" className="header__auth-link">Вход</Link>
              <span className="header__auth-slash">/</span>
              <Link to="/registration" className="header__auth-link">Регистрация</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
