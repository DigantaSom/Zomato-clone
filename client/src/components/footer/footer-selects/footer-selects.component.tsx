import FooterSelect from './footer-select/footer-select.component';

import './footer-selects.styles.css';

const FooterSelects = () => {
  return (
    <div className='footer-selects__container'>
      <FooterSelect type='country' />
      <FooterSelect type='language' />
    </div>
  );
};

export default FooterSelects;
