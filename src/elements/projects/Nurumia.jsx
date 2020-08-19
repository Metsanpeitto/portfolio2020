import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class Nurumia extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Portfolio Details" />

        <Header homeLink="/" logo="symbol-dark" color="color-black" />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_nurumia"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Nurumia</h2>
                  <p>Dashboard and Social Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <h2>Greenhouse Control</h2>
                    <p className="subtitle">
                      Interface for a greenhouse electronic automation system,
                      designed and built by myself.
                    </p>
                    <p>
                      It includes a Chat, Shared Calendar task manager, and I
                      have create a PHP API to handle the information received
                      from IoT devices that I also designed and manufactured.
                      Developed with ReactJS and NodeJs. It uses Firebase to
                      store and filter the data. As well, as a way to
                      authenticate the users. For the data received from the
                      sensors it uses PHP and MySQL.
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Technologies Used:</span>
                        <h4>
                          ReactJs, NodeJs, HTML, CSS, Php, Firebase, MySQL, C++.
                        </h4>
                      </div>
                    </div>
                    <a href="https://nurumia.com/">
                      <p>https://nurumia.com</p>
                    </a>
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb-20pc mt-10pc">
                      <img
                        src="/assets/images/portfolio/nurumiaLarge1.jpg"
                        alt="Portfolio Images"
                      />
                    </div>

                    <div className="thumb mb-20pc mt-10pc">
                      <img
                        src="/assets/images/portfolio/nurumiaLarge2.jpg"
                        alt="Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Related Work */}
        <div className="portfolio-related-work pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="theme-color font--18 fontWeight600">
                    Related Work
                  </span>
                  <h2>Our More Projects</h2>
                </div>
              </div>
            </div>
            <div className="row mt--10">
              {/* Start Single Portfolio */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-grisu">
                      <img
                        src="/assets/images/portfolio/grisuSmall.jpg"
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-grisu">Grisu</a>
                    </h4>
                    <span className="category">Wordpress and WooCommerce</span>
                  </div>
                </div>
              </div>
              {/* End Single Portfolio */}
              {/* Start Single Portfolio */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-delprado">
                      <img
                        src="/assets/images/portfolio/delpradoSmall.jpg"
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-delprado">Del Prado</a>
                    </h4>
                    <span className="category">
                      Frontend and Backend eCommerce
                    </span>
                  </div>
                </div>
              </div>
              {/* End Single Portfolio */}
            </div>
          </div>
        </div>
        {/* End Related Work */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default Nurumia;
