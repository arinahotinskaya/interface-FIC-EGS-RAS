import {Route, Routes, Navigate} from 'react-router-dom'
import Header from "./pages/Header/Header"
import Footer from "./pages/Footer/Footer"

import InfoPage from "./pages/InfoPage/InfoPage"
import StationsPage from "./pages/StationsPage/StationsPage"
import AccessPage from "./pages/AccessPage/AccessPage"
import Login from "./pages/Authorization/Login/Login"
import Registration from "./pages/Authorization/Registration/Registration"
import "./pages/Authorization/Authorization.scss"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Информация" replace />} />
        <Route path='/Информация' element={<InfoPage />} />
        <Route path="/Станции" element={<StationsPage />} />
        <Route path="/Доступ" element={<AccessPage />} />
        <Route path="/Логин" element={<Login />} />
        <Route path="/Регистрация" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
