import countryFlags from '../../../../constants/country-flags.constant';
import './footer-countries.styles.css';

const FooterCountries = () => {
  return (
    <div className='footer-select__boxes-outer-container footer-countries__container'>
      <div className='footer-countries__inner-container'>
        {countryFlags.map(({ id, name, flagUri }, idx) => (
          <div
            key={id}
            className={` footer-select__boxes-item ${
              idx === 0 && 'footer-select__boxes-item-active'
            } footer-countries__item`}
          >
            <img src={flagUri} alt={name} className='footer-countries__flag' />
            <span className='footer-countries__name'>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterCountries;
