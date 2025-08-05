import '../../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills & Tools</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Web & Tools</h2>
            <div className="article-container">
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML, CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>React.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Node.js, Express.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>MongoDB, MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Git, GitHub</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='#projects'}
      />
    </section>
  );
};

export default Experience;