import { FC, useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';

import FooterCountries from '../footer-countries/footer-countries.component';
import FooterLanguages from '../footer-languages/footer-languages.component';

import countryFlags from '../../../../constants/country-flags.constant';
import languages from '../../../../constants/languages.constant';

import './footer-select.styles.css';

interface FooterSelectProps {
  type: 'country' | 'language';
}

const FooterSelect: FC<FooterSelectProps> = ({ type }) => {
  const [isCountryOpen, toggleCountryOpen] = useState(false);
  const [isLanguageOpen, toggleLanguageOpen] = useState(false);

  const onToggle = () => {
    if (type === 'country') {
      toggleCountryOpen(prevState => !prevState);
    } else if (type === 'language') {
      toggleLanguageOpen(prevState => !prevState);
    }
  };

  return (
    <>
      {isCountryOpen && !isLanguageOpen && <FooterCountries />}
      {isLanguageOpen && !isCountryOpen && <FooterLanguages />}
      <div className='footer-select__container' onClick={onToggle}>
        <div className='footer-select__img'>
          {type === 'country' ? (
            <img src={countryFlags[0].flagUri} alt={countryFlags[0].name} />
          ) : (
            <BsGlobe className='footer-select__icon' />
          )}
        </div>
        <span>{type === 'country' ? countryFlags[0].name : languages[0]}</span>
        <AiOutlineCaretDown />
      </div>
    </>
  );
};

export default FooterSelect;
