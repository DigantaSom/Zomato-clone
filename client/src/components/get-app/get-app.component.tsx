import { ChangeEvent, useState } from 'react';

import AppDownloadButtons from '../app-download-buttons/app-download-buttons.component';

import GetZomatoApp_Img from '../../images/get-zomato-app.png';

import Colors from '../../constants/colors.constant';
import countryCodes from '../../constants/country-codes.constant';

import './get-app.styles.css';

// This component has a variable outer container
const GetApp = () => {
  const [medium, setMedium] = useState<'Email' | 'Phone'>('Email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  // const { email, phone } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='get-app__inner-container'>
      <div className='get-app__content'>
        <div className='get-app__content-left'>
          <img src={GetZomatoApp_Img} alt='Get App' />
        </div>

        <div className='get-app__content-right'>
          <h2 className='get-app__title'>Get the Zomato App</h2>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>

          <section className='get-app__radio-buttons-container'>
            <div className='get-app__radio-button'>
              <input
                type='radio'
                name='get-app-radio'
                id='email-radio'
                style={{ accentColor: Colors.zomatoSecondary }}
                onClick={() => setMedium('Email')}
                defaultChecked={medium === 'Email'}
              />{' '}
              <label htmlFor='email-radio'>Email</label>
            </div>
            <div className='get-app__radio-button'>
              <input
                type='radio'
                name='get-app-radio'
                id='phone-radio'
                style={{ accentColor: Colors.zomatoSecondary }}
                onClick={() => setMedium('Phone')}
                defaultChecked={medium === 'Phone'}
              />{' '}
              <label htmlFor='phone-radio'>Phone</label>
            </div>
          </section>

          <form className='get-app__input-container' autoComplete='off'>
            {medium === 'Email' ? (
              <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={onChange}
                required
              />
            ) : (
              <div className='get-app__phone-input-container'>
                <select name='country-code' required>
                  {countryCodes.map(code => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  type='tel'
                  name='phone'
                  placeholder='type here...'
                  onChange={onChange}
                  required
                />
              </div>
            )}
            <button
              type='submit'
              className='get-app__submit-btn'
              style={{ backgroundColor: Colors.zomatoSecondary }}
            >
              Share App Link
            </button>
            <button
              type='submit'
              className='get-app__submit-btn-sm'
              style={{ backgroundColor: Colors.zomatoSecondary }}
            >
              Share
            </button>
          </form>

          <div className='get-app__download-section'>
            <p>Download app from</p>
            <div className='get-app__download-buttons'>
              <AppDownloadButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
