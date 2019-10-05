import React, { Component } from "react";
import Modal from "react-responsive-modal";

export default class PortfolioDetail extends Component {
  render() {
    const { showModal, portfolio, onClose } = this.props;
    console.log("PortoflioDetail", portfolio);
    return (
      <Modal open={showModal} onClose={onClose} center>
        <div
          className="portfolio-modal"
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
                        src={portfolio.icon}
                        alt="portfolio"
                        className="app-icon"
                      />
                    </div>
                    <div className="col-md-8 app-name-box">
                      <p className="app-name">{portfolio.name}</p>
                      <div className="app-cat">
                        {portfolio.interests.map(interest => {
                          return (
                            <span
                              className={`badge badge-pill badge-${interest.badge}`}
                            >
                              {interest.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 app-download-box">
                  {portfolio.url_app_store !== "" && (
                    <span>
                      <a href={portfolio.url_app_store} target="_blank">
                        <span className="appstore-logo" />
                      </a>
                    </span>
                  )}
                  {portfolio.url_play_store !== "" && (
                    <span>
                      <a href={portfolio.url_play_store} target="_blank">
                        <span className="playstore-logo" />
                      </a>
                    </span>
                  )}
                  {portfolio.url_web !== "" && portfolio.url_web != null && (
                    <span>
                      <a
                        href={portfolio.url_web}
                        target="_blank"
                        class="btn btn-primary"
                      >
                        Website
                      </a>
                    </span>
                  )}
                </div>
                <div className="col-md-12 app-desc">
                  <p>{portfolio.description}</p>
                </div>
                <div className="col-md-12 app-ss">
                  <ul>
                    {portfolio.screenshoots.map(screenshoot => {
                      return (
                        <li>
                          <a href={screenshoot} target="_blank">
                            <img src={screenshoot} alt={screenshoot} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
