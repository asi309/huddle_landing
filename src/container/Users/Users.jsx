import { images } from '../../constants';
import './Users.scss';

const Users = () => {
  return (
    <section className="app__users app__flex">
      <div className="top">
        <img src={images.sectionTop2} alt="background-shapes" />
      </div>
      <div className="app__users-content app__flex">
        <div className="app__users-content-text app__flex">
          <h2 className="heading-text">Your Users</h2>
          <p className="p-text">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div className="app__users-content-image">
          <img src={images.usersIllus} alt="Your Users" />
        </div>
      </div>
      <div className="bottom">
        <img src={images.sectionBottom2} alt="background-shapes" />
      </div>
    </section>
  );
};

export default Users;
