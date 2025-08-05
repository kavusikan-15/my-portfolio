import '../../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src="/assets/project-1.png" alt="Real-Time Chat Application" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Real-Time Chat Application</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/kavusikan-15'}>
                Github
              </button>
            </div>
            <p>
              Developed a real-time messaging app with group chat, file sharing, emoji support, and JWT-based authentication. State management handled with Zustand and UI built using Tailwind CSS and ShadCN.<br />
              <b>Tech Stack:</b> React.js, Node.js, Express.js, MongoDB, Socket.io, Zustand, Tailwind CSS, Multer, JWT, Axios
            </p>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src="/assets/project-2.png" alt="MERN Auth System" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">MERN Auth System</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/kavusikan-15'}>
                Github
              </button>
            </div>
            <p>
              Built a full-stack authentication system featuring email verification, password recovery, and welcome email integration.<br />
              <b>Tech Stack:</b> HTML, CSS, React.js, JavaScript, Node.js, Express.js, MongoDB
            </p>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src="/assets/project-3.png" alt="Car Landing Page" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Car Landing Page</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://github.com/kavusikan-15'}>
                Github
              </button>
            </div>
            <p>
              Designed and implemented a modern, responsive landing page for Nissan cars with animation and interactive features.<br />
              <b>Tech Stack:</b> HTML, CSS, React.js
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='#contact'}
      />
    </section>
  );
};

export default Projects;