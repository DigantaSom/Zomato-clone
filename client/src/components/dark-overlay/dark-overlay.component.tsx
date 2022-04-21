import { useDispatch } from 'react-redux';

import { toggleAuthForm } from '../../redux/UI/ui.actions';

import './dark-overlay.styles.css';

const DarkOverlay = () => {
  const dispatch = useDispatch();

  return (
    <div
      className='dark-overlay__container'
      onClick={() => dispatch(toggleAuthForm('Close', 'for closing'))}
    ></div>
  );
};

export default DarkOverlay;
