import React, { Component } from "react";
import Modal from "react-responsive-modal";

import Item from "./item";
import DetailModal from "./detail";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      portfolios: this.props.portfolios,
      portfolio: {
        interests: [],
        screenshoots: []
      }
    };
  }
  componentDidMount() {}
  onShowModal = (show, portfolio = {}) => {
    if (show) {
      this.setState({ portfolio });
    }
    this.setState({ showModal: show });
  };
  render() {
    const { showModal, portfolios, portfolio } = this.state;

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
                <Item
                  portfolio={portfolio}
                  onClick={() => {
                    this.onShowModal(true, portfolio);
                  }}
                />
              );
            })}
          </div>
          {/* portfolioContainer */}

          {/* portfolioDetail */}
          <DetailModal
            showModal={showModal}
            portfolio={portfolio}
            onClose={() => {
              this.onShowModal(false);
            }}
          />
        </div>
      </section>
    );
  }
}
