import {Route, Routes, Navigate} from 'react-router-dom'
import Header from '@/pages/Header/Header'
import Footer from '@/pages/Footer/Footer'
import InfoPage from '@pages/InfoPage/InfoPage.tsx'
import StationsPage from '@pages/StationsPage/StationsPage.tsx'
import AccessPage from '@pages/AccessPage/AccessPage.tsx'
import Login from '@pages/Authorization/Login/Login.tsx'
import Registration from '@pages/Authorization/Registration/Registration.tsx'
import '@pages/Authorization/Authorization.scss'


function App() {
  return (
    <>
      <div className="page__container">
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/Information' replace />} />
          <Route path='/Information' element={<InfoPage />} />
          <Route path='/Stations' element={<StationsPage />} />
          <Route path='/Access' element={<AccessPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
