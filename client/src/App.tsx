import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './redux/store';

import HomePage from './pages/home/home.component';
import PartnerWithUs from './pages/partner-with-us/partner-with-us.component';
import MobileAppPage from './pages/mobile-app/mobile-app.component';
import FoodPage from './pages/food/food.component';
import AllCollections from './pages/food/all-collections/all-collections.component';
import BookmarkedCollections from './pages/food/all-collections/bookmarked-collections/bookmarked-collections.component';
import HandpickedCollections from './pages/food/all-collections/handpicked-collections/handpicked-collections.component';

import NavMenu from './components/nav-menu/nav-menu.component';
import DarkOverlay from './components/dark-overlay/dark-overlay.component';
import AuthForm from './components/auth-form/auth-form.component';
import OrderOnline from './components/order-online/order-online.component';
import DiningOut from './components/dining-out/dining-out.component';
import DrinksAndNightlife from './components/drinks-and-nightlife/drinks-and-nightlife.component';

import './App.css';

const App = () => {
  const {
    isMenuHidden,
    authForm: { isAuthFormHidden, loginOrSignup },
  } = useSelector((state: RootState) => state.ui);

  return (
    <>
      <BrowserRouter>
        {!isAuthFormHidden && (
          <>
            <DarkOverlay />
            <AuthForm loginOrSignup={loginOrSignup} />
          </>
        )}
        <Routes>
          <Route
            path='/'
            element={isMenuHidden ? <HomePage /> : <NavMenu page='Home' />}
          />
          <Route path='partner-with-us' element={<PartnerWithUs />} />
          <Route
            path='mobile'
            element={
              isMenuHidden ? <MobileAppPage /> : <NavMenu page='MobileApp' />
            }
          />
          <Route
            path='food'
            element={isMenuHidden ? <FoodPage /> : <NavMenu page='Food' />}
          >
            <Route index element={<OrderOnline />} />
            <Route path='order-food-online' element={<OrderOnline />} />
            <Route path='dining-out' element={<DiningOut />} />
            <Route
              path='drinks-and-nightlife'
              element={<DrinksAndNightlife />}
            />
            <Route path='collections' element={<AllCollections />}>
              <Route index element={<HandpickedCollections />} />
              <Route path='featured' element={<HandpickedCollections />} />
              <Route path='bookmarked' element={<BookmarkedCollections />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
