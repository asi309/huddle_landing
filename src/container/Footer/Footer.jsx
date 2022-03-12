import { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';

import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {};

  return (
    <footer className="app__footer app__flex">
      <section className="app__footer-cta app__flex">
        <h1 className="app__footer-cta-title heading-text">
          Ready To Build Your Community?
        </h1>
        <a
          href="#"
          type="_blank"
          rel="noopener noreferrer"
          className="app__flex p-text app__footer-cta-btn"
        >
          get started for free
        </a>
      </section>
      <section className="app__footer-footer app__flex">
        <div className="top">
          <img src={images.footerTopDesktop} alt="background-shapes" />
        </div>
        <div className="top-small">
          <img src={images.footerTopMobile} alt="background-shapes" />
        </div>
        <div className="app__footer-content app__flex">
          <div className="app__footer-social app__flex">
            <div className="logo">
              <img src={images.footerLogo} alt="footer-logo" />
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              fugiat cupiditate repudiandae officia voluptatem modi quam
              voluptate.
            </p>
            <div className="phone app__flex">
              <div className="phone-logo">
                <img src={images.phone} alt="phone" />
              </div>
              <div className="phone-number">Phone: +1-543-123-4567</div>
            </div>
            <div className="email app__flex">
              <div className="email-logo">
                <img src={images.email} alt="email" />
              </div>
              <div className="email-address">example@huddle.com</div>
            </div>
            <div className="social-icons app__flex">
              <FaFacebookSquare fontSize={32} />
              <BsInstagram fontSize={30} />
              <AiFillTwitterSquare fontSize={32} />
            </div>
          </div>
          <div className="app__footer-newsletter app__flex">
            <h2>Newsletter</h2>
            <p>
              To receive tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address
            </p>
            <form className="newsletter-form app__flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
