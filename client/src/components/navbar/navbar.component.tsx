import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

import { toggleNavMenu } from '../../redux/UI/ui.actions';

import './navbar.styles.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className='container navbar__nav'>
      <div className='navbar__nav-left'>Get the App</div>
      <div
        className='navbar__hamburger'
        onClick={() => dispatch(toggleNavMenu())}
      >
        <GiHamburgerMenu />
      </div>
      <div className='navbar__nav-links'>
        <div
          className='navbar__nav-link'
          onClick={() => navigate('/partner-with-us')}
        >
          Add restaurant
        </div>
        <div className='navbar__nav-link'>Log in</div>
        <div className='navbar__nav-link'>Sign up</div>
      </div>
    </nav>
  );
};

export default Navbar;
