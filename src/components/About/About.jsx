import '../../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="/assets/profile-pic.jpg"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Contact</h3>
              <p>📍 Sulur, Coimbatore<br />📞 +91 87789 15058<br />📧 kavusikanjk15@gmail.com</p>
            </div>
            <div className="details-container">
              <img
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Tech – Artificial Intelligence and Data Science<br />CGPA: 7.5</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              An aspiring web developer with expertise in creating responsive, user-friendly websites. Proficient in HTML, CSS, and JavaScript with a strong focus on clean, efficient code and modern designs. Committed to performance optimization and seamless digital experiences. Excels in collaborative environments and keeps up with the latest web development trends.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='#experience'}
      />
    </section>
  );
};

export default About;