import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import { portfolioSlick2 } from "../page-demo/script";

const PortfolioList2 = [
  {
    image: "image-1",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: " Getting tickets to the big show",
  },
];

const Portfolio = () => {
  return (
    <>
      <PageHelmet pageTitle="Counters" />

      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Portfolio"} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30">
                  <h2 className="title">All Works</h2>
                  <p>
                    These are some of the last projects that I have develop.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper portfolio-sacousel-inner mb--55">
            <div className="portfolio-slick-activation mt--70 mt_sm--40">
              <Slider {...portfolioSlick2}>
                {PortfolioList2.map((value, index) => (
                  <div className="portfolio" key={index}>
                    <div className="thumbnail-inner">
                      <div className={`thumbnail ${value.image}`}></div>
                      <div className={`bg-blr-image ${value.image}`}></div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <p>{value.category}</p>
                        <h4>
                          <a href="/portfolio-details">{value.title}</a>
                        </h4>
                        <div className="portfolio-button">
                          <a className="rn-btn" href="/portfolio-details">
                            See Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}
      </main>
      {/* End Page Wrapper  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area  */}
    </>
  );
};

export default Portfolio;
