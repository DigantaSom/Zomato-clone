import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './redux/store';

import NavMenu from './components/nav-menu/nav-menu.component';
import HomePage from './pages/home/home.component';
import PartnerWithUs from './pages/partner-with-us/partner-with-us.component';
import MobileAppPage from './pages/mobile-app/mobile-app.component';

import './App.css';

const App = () => {
  const { isMenuHidden } = useSelector((state: RootState) => state.ui);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={isMenuHidden ? <HomePage /> : <NavMenu page='Home' />}
        />
        <Route path='partner-with-us' element={<PartnerWithUs />} />
        <Route
          path='mobile'
          element={isMenuHidden ? <MobileAppPage /> : <NavMenu page='Mobile' />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
