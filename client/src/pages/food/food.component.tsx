import { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import SearchBar from '../../components/search-bar/search-bar.component';
import AuthLinks from '../../components/auth-links/auth-links.component';
import NavbarSmall from '../../components/navbar-small/navbar-small.component';
import FoodPageNav from '../../components/food-page-nav/food-page-nav.component';
import Footer from '../../components/footer/footer.component';
import ScrollToTop from 'src/components/scroll-to-top/scroll-to-top.component';

import ZomatoLogoBlack from '../../images/zomato-text-black.png';

import './food.styles.css';

const FoodPage = () => {
  const [searchText, setSearchText] = useState('');
  const [showScrollBtn, setshowScrollBtn] = useState(false);
  const foodPageTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollFunc = () => {
      const y = window.scrollY;
      if (y > window.innerHeight) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    };
    window.addEventListener('scroll', scrollFunc);

    return () => window.removeEventListener('scroll', scrollFunc);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: foodPageTopRef.current?.offsetTop,
    });
  };

  return (
    <>
      {showScrollBtn && <ScrollToTop handleClick={handleScrollToTop} />}

      <div className='app__container'>
        <div className='food-page__header' ref={foodPageTopRef}>
          <div className='food-page__header-inner'>
            <Link to='/'>
              <img
                src={ZomatoLogoBlack}
                alt='Zomato'
                className='food-page__header-logo'
              />
            </Link>
            <div className='food-page__header-searchbar-container'>
              <SearchBar
                searchText={searchText}
                onChangeSearchText={e => setSearchText(e.target.value)}
              />
            </div>
            <div className='food-page__header-auth-links'>
              <AuthLinks />
            </div>
          </div>
          {/* here, NavbarSmall component will only render when screen width is 850px or below */}
          <NavbarSmall page='Food' />
        </div>

        <FoodPageNav />
      </div>

      <Outlet />

      <Footer page='Food' />
    </>
  );
};

export default FoodPage;
