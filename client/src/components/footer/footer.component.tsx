import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SiLinkedin } from 'react-icons/si';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

import FooterSelects from './footer-selects/footer-selects.component';
import AppDownloadButtons from '../app-download-buttons/app-download-buttons.component';

import FooterLogo from '../../images/zomato-text-black.png';

import './footer.styles.css';

interface FooterProps {
  page: 'Home' | 'MobileApp' | 'Food';
}

const Footer: FC<FooterProps> = ({ page }) => {
  return (
    <footer className='footer__container'>
      <div
        className={`${
          page === 'MobileApp' ? 'mobile-app__container' : 'app__container'
        }`}
      >
        <div className='footer__main'>
          <div className='footer__top'>
            <div className='footer__logo'>
              <img src={FooterLogo} alt='Zomato' />
            </div>
            <FooterSelects />
          </div>

          <div className='footer__links-container'>
            <div className='footer__links-left-container'>
              <div className='footer__link-column'>
                <h6 className='footer__link-header'>About Zomato</h6>
                <Link to='#' className='footer__link'>
                  Who We Are
                </Link>
                <Link to='#' className='footer__link'>
                  Blog
                </Link>
                <Link to='#' className='footer__link'>
                  Work With Us
                </Link>
                <Link to='#' className='footer__link'>
                  Investor Relations
                </Link>
                <Link to='#' className='footer__link'>
                  Report Fraud
                </Link>
              </div>

              <div className='footer__link-column'>
                <h6 className='footer__link-header'>Zomaverse</h6>
                <Link to='#' className='footer__link'>
                  Zomato
                </Link>
                <Link to='#' className='footer__link'>
                  Feeding India
                </Link>
                <Link to='#' className='footer__link'>
                  Hyperpure
                </Link>
                <Link to='#' className='footer__link'>
                  Zomaland
                </Link>
              </div>

              <div className='footer__link-column'>
                <h6 className='footer__link-header'>For Restaurants</h6>
                <Link to='#' className='footer__link'>
                  Partner With Us
                </Link>
                <Link to='#' className='footer__link'>
                  Apps For You
                </Link>
                <h6
                  className='footer__link-header'
                  style={{ marginTop: '1.2rem' }}
                >
                  For Enterprises
                </h6>
                <Link to='#' className='footer__link'>
                  Zomato For Work
                </Link>
              </div>

              <div className='footer__link-column'>
                <h6 className='footer__link-header'>Learn More</h6>
                <Link to='#' className='footer__link'>
                  Privacy
                </Link>
                <Link to='#' className='footer__link'>
                  Security
                </Link>
                <Link to='#' className='footer__link'>
                  Terms
                </Link>
                <Link to='#' className='footer__link'>
                  Sitemap
                </Link>
              </div>
            </div>

            <div className='footer__links-right-container'>
              <div className='footer__link-column'>
                <h6 className='footer__link-header'>Social Links</h6>
                <div className='footer__social-links'>
                  <Link to='#'>
                    <SiLinkedin />
                  </Link>
                  <Link to='#'>
                    <BsInstagram />
                  </Link>
                  <Link to='#'>
                    <AiFillTwitterCircle style={{ fontSize: '1.28rem' }} />
                  </Link>
                  <Link to='#'>
                    <AiFillYoutube style={{ fontSize: '1.4rem' }} />
                  </Link>
                  <Link to='#'>
                    <BsFacebook style={{ fontSize: '1.15rem' }} />
                  </Link>
                </div>
                <div className='footer__download-buttons-container'>
                  <AppDownloadButtons />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__copyright'>
          <small>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2022
            {new Date().getFullYear() > 2022 &&
              ` - ${new Date().getFullYear()}`}{' '}
            © Zomato Clone (Diganta Som)™ Ltd. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
