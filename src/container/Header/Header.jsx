import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <header className="app__header app__flex">
      <h1 className="app__header-title heading-text">
        Build The Community Your Fans will Love
      </h1>
      <p className="app__header-text p-text">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion
      </p>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="app__flex p-text header__cta"
      >
        get started for free
      </a>
      <div className="app__header-image">
        <img src={images.screenMockup} alt="hero" />
      </div>
    </header>
  );
};

export default Header;
