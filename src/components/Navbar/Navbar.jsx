import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="app__navbar app__flex">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="app__navbar-cta">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="app__flex p-text"
        >
          try it free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
