import Header from "./pages/Header/Header"
import {Route, Routes} from 'react-router-dom'
import Cards from "./components/Cards/Cards"
import Stations from "./components/ArchiveAccess/ArchiveAccess"
import Registration from "./pages/Authorization/Registration/Registration"
import Login from "./pages/Authorization/Login/Login"
import "./pages/Authorization/Authorization.scss"
import StationsPage from "./pages/StationsPage/StationsPage"
import Footer from "./pages/Footer/Footer"
import AccessPage from "./pages/AccessPage/AccessPage"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/stations-page" element={<StationsPage />} />
        <Route path="/access-page" element={<AccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
