import React from "react";

function Header() {
  return (
    <header>
      <section className="intro-section">
        <div className="container">
          <div className="intro">
            <div className="row">
              <div className="col-sm-8 col-md-4 col-lg-3">
                <div className="profile-img margin-b-30">
                  <img src="images/profile.jpeg" alt="profiel" />
                </div>
              </div>
              {/* col-sm-8 */}
              <div className="col-sm-10 col-md-5 col-lg-6">
                <h2>
                  <b>Abdy Malik Mulky</b>
                </h2>
                <h4 className="font-yellow">Software Developer</h4>
                <ul className="information margin-tb-30">
                  <li>
                    <b className="font-yellow">PHONE/WA/TELEGRAM</b> :{" "}
                    <a href="tel:+628112284854">+628112284854</a>
                  </li>
                  <li>
                    <b className="font-yellow">EMAIL</b> :{" "}
                    <a href="mailto:me@abdymalikmulky.com">
                      me@abdymalikmulky.com
                    </a>{" "}
                    /{" "}
                    <a href="mailto:abdymalikmulky@gmail.com">
                      abdymalikmulky@gmail.com
                    </a>
                  </li>
                  <li>
                    <b className="font-yellow">INTEREST</b> :{" "}
                    <span className="badge badge-pill badge-success">
                      React Native
                    </span>
                    <span className="badge badge-pill badge-success">
                      Android
                    </span>
                    <span className="badge badge-pill badge-info">ReactJS</span>
                    <span className="badge badge-pill badge-primary">PHP</span>
                    <span className="badge badge-pill badge-primary">
                      NodeJS
                    </span>
                    <span className="badge badge-pill badge-danger">UI/UX</span>
                  </li>
                </ul>
                <ul className="social-icons">
                  <li>
                    <a href="https://github.com/abdymm" target="_blank">
                      <i className="ion-social-github" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdymm"
                      target="_blank"
                    >
                      <i className="ion-social-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* col-sm-8 */}
              <div className="col-sm-10 col-md-3 col-lg-3">
                <a className="downlad-btn" href="http://abdymalikmulky.com/cv-abdymalikmulky-2.pdf">
                  Download CV
                </a>
              </div>
              {/* col-lg-2 */}
            </div>
            {/* row */}
          </div>
          {/* intro */}
        </div>
        {/* container */}
      </section>
    </header>
  );
}

export default Header;
