import Header from "./pages/Header/Header"
import {Route, Routes} from 'react-router-dom'
import Cards from "./pages/Cards/Cards"
import Stations from "./pages/Stations/Stations"
import Registration from "./pages/Authorization/Registration/Registration"
import Login from "./pages/Authorization/Login/Login"
import "./pages/Authorization/Authorization.scss"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  )
}

export default App;
