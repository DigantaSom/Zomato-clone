import languages from '../../../../constants/languages.constant';

import './footer-languages.styles.css';

const FooterLanguages = () => {
  return (
    <div className='footer-select__boxes-outer-container footer-languages__container'>
      <div className='footer-languages__inner-container'>
        {languages.map((lang, idx) => (
          <div
            key={lang}
            className={`footer-select__boxes-item ${
              idx === 0 && 'footer-select__boxes-item-active'
            }`}
          >
            <span>{lang}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLanguages;
