import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import PartnerWithUs from './pages/PartnerWithUs/PartnerWithUs';
import MobileApp from './pages/MobileApp/MobileApp';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='partner-with-us' element={<PartnerWithUs />} />
        <Route path='mobile' element={<MobileApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
