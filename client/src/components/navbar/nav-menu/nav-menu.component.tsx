import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { toggleNavMenu } from '../../../redux/UI/ui.actions';

import ZomatoTextBlack from '../../../images/zomato-text-black.png';
import './nav-menu.styles.css';

const NavMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='nav-menu__nav-menu'>
      <div className='nav-menu__header'>
        <FaTimes
          className='nav-menu__close-btn'
          onClick={() => dispatch(toggleNavMenu())}
        />
        <img src={ZomatoTextBlack} alt='Zomato' className='nav-menu__img' />
      </div>
      <div className='nav-menu__nav-links'>
        <div
          className='nav-menu__nav-link'
          onClick={() => {
            dispatch(toggleNavMenu());
            navigate('/partner-with-us');
          }}
        >
          Add restaurant
        </div>
        <div className='nav-menu__nav-link'>Log in</div>
        <div className='nav-menu__nav-link'>Sign up</div>
      </div>
    </div>
  );
};

export default NavMenu;
