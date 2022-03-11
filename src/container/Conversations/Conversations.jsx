import { images } from '../../constants';
import './Conversations.scss';

const Conversations = () => {
  return (
    <section className="app__conversations app__flex">
      <div className="app__conversations-image">
        <img src={images.conversationsIllus} alt="Flowing Conversations" />
      </div>
      <div className="app__conversations-text app__flex">
        <h2 className="heading-text">Flowing Conversations</h2>
        <p className="p-text">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </section>
  );
};

export default Conversations;
