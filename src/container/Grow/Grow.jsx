import { images } from '../../constants';
import './Grow.scss';

const Grow = () => {
  return (
    <section className="app__grow app__flex">
      <section className="app__grow-numbers app__flex">
        <div className="app__grow-numbers-communities app__flex">
          <div>
            <img src={images.communities} alt="communities" />
          </div>
          <div>1.4k+</div>
          <div>Communities Formed</div>
        </div>
        <div className="app__grow-numbers-messages app__flex">
          <div>
            <img src={images.messages} alt="messages" />
          </div>
          <div>2.7m+</div>
          <div>Messages Sent</div>
        </div>
      </section>
      <section className="app__grow-together app__flex">
        <div className="top">
          <img src={images.sectionTop1} alt="background-shapes" />
        </div>
        <div className="top-small">
          <img src={images.sectionTop1Mobile} alt="background-shapes" />
        </div>
        <div className="app__grow-content app__flex">
          <div className="app__grow-content-text app__flex">
            <h2 className="heading-text">Grow Together</h2>
            <p className="p-text">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div className="app__grow-content-image">
            <img src={images.growIllus} alt="Grow Together" />
          </div>
        </div>
        <div className="bottom">
          <img src={images.sectionBottom1} alt="background-shapes" />
        </div>
        <div className="bottom-small">
          <img src={images.sectionBottom1Mobile} alt="background-shapes" />
        </div>
      </section>
    </section>
  );
};

export default Grow;
