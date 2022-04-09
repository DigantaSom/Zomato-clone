import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './redux/store';

import NavMenu from './components/Navbar/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import PartnerWithUs from './pages/PartnerWithUs/PartnerWithUs';
import MobileApp from './pages/MobileApp/MobileApp';

import './App.css';

const App = () => {
  const { isMenuHidden } = useSelector((state: RootState) => state.ui);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isMenuHidden ? <Home /> : <NavMenu />} />
        <Route path='partner-with-us' element={<PartnerWithUs />} />
        <Route path='mobile' element={<MobileApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
