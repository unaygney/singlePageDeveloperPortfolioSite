// Project Image
import Design1 from "../assets/thumbnail-project-1-large.webp";
import Design2 from "../assets/thumbnail-project-2-large.webp";
import Design3 from "../assets/thumbnail-project-3-large.webp";
import Design4 from "../assets/thumbnail-project-4-large.webp";
import Design5 from "../assets/thumbnail-project-5-large.webp";
import Design6 from "../assets/thumbnail-project-6-large.webp";

function MainContent() {
  return (
    <main className="main container">
      <section className="talents">
        <div className="talent">
          <h3 className="heading-l">HTML</h3>
          <p className="body-text">4 Years Experience</p>
        </div>
        <div className="talent">
          <h3 className="heading-l">CSS</h3>
          <p className="body-text">4 Years Experience</p>
        </div>
        <div className="talent">
          <h3 className="heading-l">Javascript</h3>
          <p className="body-text">4 Years Experience</p>
        </div>
        <div className="talent">
          <h3 className="heading-l">Accessibility</h3>
          <p className="body-text">4 Years Experience</p>
        </div>
        <div className="talent">
          <h3 className="heading-l">React</h3>
          <p className="body-text">3 Years Experience</p>
        </div>
        <div className="talent">
          <h3 className="heading-l">Sass</h3>
          <p className="body-text">3 Years Experience</p>
        </div>
      </section>
      {/* Project */}
      <section className="projects">
        <div className="projects-heading">
          <h3 className="heading-xl">Projects</h3>
          <a className="contact" href="#footer">
            Contact Me
          </a>
        </div>

        <div className="project-grid-area">
          <div className="project">
                <div className="project-img-container">
              <img src={Design1} alt="" />
                </div>

              <div className="project-info">
              <h3 className="heading-m">DESIGN PORTFOLIO</h3>
              <div className="project-tech">
                <p className="body-text">HTML</p>
                <p className="body-text">CSS</p>
              </div>

              <div className="project-views">
                <a className="contact" href="#">
                  VIEW PROJECT
                </a>
                <a className="contact" href="#">
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-img-container">
              <img src={Design2} alt="" />
            </div>
            <div className="project-info">
              <h3 className="heading-m">E-LEARNING LANDING PAGE</h3>
              <div className="project-tech">
                <p className="body-text">HTML</p>
                <p className="body-text">CSS</p>
              </div>
              <div className="project-views">
                <a className="contact" href="#">
                  VIEW PROJECT
                </a>
                <a className="contact" href="#">
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-img-container">
              <img src={Design3} alt="" />
            </div>
            <div className="project-info">
              <h3 className="heading-m">TODO WEB APP</h3>
              <div className="project-tech">
                <p className="body-text">HTML</p>
                <p className="body-text">CSS</p>
                <p className="body-text">JAVASCRIPT</p>
              </div>
              <div className="project-views">
                <a className="contact" href="#">
                  VIEW PROJECT
                </a>
                <a className="contact" href="#">
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-img-container">
              <img src={Design4} alt="" />
            </div>
            <div className="project-info">
              <h3 className="heading-m">ENTERTAINMENT WEB APP</h3>
              <div className="project-tech">
                <p className="body-text">HTML</p>
                <p className="body-text">CSS</p>
                <p className="body-text">JAVASCRIPT</p>
              </div>
              <div className="project-views">
                <a className="contact" href="#">
                  VIEW PROJECT
                </a>
                <a className="contact" href="#">
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-img-container">
              <img src={Design5} alt="" />
            </div>
            <div className="project-info">
              <h3 className="heading-m">MEMORY GAME</h3>
              <div className="project-tech">
                <p className="body-text">HTML</p>
                <p className="body-text">CSS</p>
                <p className="body-text">JAVASCRIPT</p>
              </div>

              <div className="project-views">
                <a className="contact" href="#">
                  VIEW PROJECT
                </a>
                <a className="contact" href="#">
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-img-container">
              <img src={Design6} alt="" />
            </div>
            <div className="project-info">
              <h3 className="heading-m">ART GALLERY SHOWCASE</h3>
              <div className="project-tech">
                <p className="body-text">HTML</p>
                <p className="body-text">CSS</p>
                <p className="body-text">JAVASCRIPT</p>
              </div>

              <div className="project-views">
        
                <a className="contact" href="#">
                  VIEW PROJECT
                </a>
                <a className="contact" href="#">
                  VIEW CODE
                </a>
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
