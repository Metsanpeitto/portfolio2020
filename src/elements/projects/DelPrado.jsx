import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ModalVideo from "react-modal-video";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";

class DelPrado extends Component {
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
          className="rn-page-title-area pt--120 pb--190 bg_image bg_delprado"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Del Prado</h2>
                  <p>Full-stack eCommerce</p>
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
                    <h2>eCommerce</h2>
                    <p className="subtitle">
                      Highly customized frontend and fast to deploy backend.
                    </p>
                    <p>
                      This fully functional eCommerce app combines Wordpress and
                      Woocommerce as back-end, meanwhile delivers to the
                      customer a highly customized front-end, built with
                      ReactJS. The page uses Stripe as way on payment ,
                      MailChimp as marketing platform and the authentication
                      that Wordpress provides. Visit the page
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Technologies</span>
                        <h4>
                          ReactJs, Redux, NodeJs, Express, HTML, CSS, MailChimp,
                          Wordpress, WooCommerce
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb-20pc mt-10pc">
                      <img
                        src="/assets/images/portfolio/delpradoLarge1.jpg"
                        alt="Portfolio Images"
                      />
                    </div>

                    <div className="thumb mb-20pc mt-10pc">
                      <img
                        src="/assets/images/portfolio/delpradoLarge2.jpg"
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
                  <h2>More Projects</h2>
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
                    <a href="/portfolio-nurumia">
                      <img
                        src="/assets/images/portfolio/nurumiaSmall.jpg"
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-nurumia">Nurumia</a>
                    </h4>
                    <span className="category">Greenhouse Control</span>
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
export default DelPrado;
