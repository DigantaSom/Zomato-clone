import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

import { toggleNavMenu } from '../../redux/UI/ui.actions';

import './navbar.styles.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className='container'>
      <div className='nav-left'>Get the App</div>
      <div className='hamburger' onClick={() => dispatch(toggleNavMenu())}>
        <GiHamburgerMenu />
      </div>
      <div className='nav-links'>
        <div className='nav-link' onClick={() => navigate('/partner-with-us')}>
          Add restaurant
        </div>
        <div className='nav-link'>Log in</div>
        <div className='nav-link'>Sign up</div>
      </div>
    </nav>
  );
};

export default Navbar;
