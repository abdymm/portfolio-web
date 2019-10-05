import React, { Component } from "react";

export default class PortfolioItem extends Component {
  render() {
    const { portfolio, onClick } = this.props;
    return (
      <div className="p-item mobile col-md-3" key={portfolio.version}>
        <a
          onClick={onClick}
          href="#"
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
              <span className={`badge badge-pill badge-${interest.badge}`}>
                {interest.label}
              </span>
            );
          })}
        </a>
      </div>
    );
  }
}
