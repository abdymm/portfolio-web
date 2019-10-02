import React, { Component } from "react";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: this.props.portfolios
    };
  }
  componentDidMount() {}
  render() {
    const { portfolios } = this.state;
    return (
      <section className="portfolio-section section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4"></div>
            <div className="col-sm-12 col-md-4">
              <div className="heading">
                <h3>
                  <b>Portfolio</b>
                </h3>
                <h6 className="font-lite-black">
                  <b>MY WORK</b>
                </h6>
              </div>
            </div>
            <div className="col-sm-12 col-md-4"></div>

            {/* col-sm-8 */}
          </div>
          {/* row */}
          <div className="portfolioContainer  margin-b-50 row">
            {portfolios.map(portfolio => {
              return (
                <div className="p-item mobile col-md-3" key={portfolio.version}>
                  <a
                    href="/"
                    data-toggle="modal"
                    data-target=".portfolio-modal"
                  >
                    <img
                      src={portfolio.icon}
                      alt="portfolio"
                      className="portfolio-icon"
                    />
                    <p className="portfolio-title">{portfolio.name}</p>
                    <p className="portfolio-version">V{portfolio.version}</p>
                    {portfolio.interests.map(interest => {
                      return (
                        <span
                          className={`badge badge-pill badge-${interest.badge}`}
                        >
                          {interest.label}
                        </span>
                      );
                    })}
                  </a>
                </div>
              );
            })}
          </div>
          {/* portfolioContainer */}
        </div>

        <div
          className="modal fade portfolio-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="row app-box">
                <div className="col-md-6 col-sm-12 app-bio-box">
                  <div className="row">
                    <div className="col-md-4 app-icon-box">
                      <img
                        src="images/portfolio/ts.png"
                        alt="portfolio"
                        className="app-icon"
                      />
                    </div>
                    <div className="col-md-8 app-name-box">
                      <p className="app-name">IGracias Telkomschool</p>
                      <div className="app-cat">
                        <span className="badge badge-pill badge-success">
                          React Native
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 app-download-box">
                  <span>
                    <a href="https://itunes.apple.com/us/app/untappd/id449141888?mt=8">
                      <span className="appstore-logo" />
                    </a>
                  </span>
                  <span>
                    <a href="https://play.google.com/store/apps/details?id=com.untappdllc.app&hl=en">
                      <span className="playstore-logo" />
                    </a>
                  </span>
                </div>
                <div className="col-md-12 app-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et dui vel urna interdum ultrices. Nunc sit amet
                    congue lectus, quis consectetur velit. Vestibulum
                    pellentesque tempor nibh, ut aliquet ligula rhoncus sed
                  </p>
                </div>
                <div className="col-md-12 app-ss">
                  <ul>
                    <li>
                      <img src="images/portfolio/ss/ts/1.jpg" alt="ts-1" />
                    </li>
                    <li>
                      <img src="images/portfolio/ss/ts/2.jpg" alt="ts-2" />
                    </li>
                    <li>
                      <img src="images/portfolio/ss/ts/3.jpg" alt="ts-3" />
                    </li>
                    <li>
                      <img src="images/portfolio/ss/ts/4.jpg" alt="ts-4" />
                    </li>
                    <li>
                      <img src="images/portfolio/ss/ts/5.jpg" alt="ts-5" />
                    </li>
                    <li>
                      <img src="images/portfolio/ss/ts/6.jpg" alt="ts-6" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
