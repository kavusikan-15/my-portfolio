import '../../styles/Profile.css';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/assets/new_pic1.png" alt="KAVUSIKAN JK profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">KAVUSIKAN JK</h1>
        <p className="section__text__p2">Aspiring Web Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href='#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href='https://www.linkedin.com/in/kavusikan-kanthaswamy'}
          />
          <img
            src="/assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href='https://github.com/kavusikan-15'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;