import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>I can solve your problems</span>
                    <h2>Hire me !</h2>
                    <a className="rn-button-style--2" href="/#contact">
                      <span>Contact </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  {/* Start Single Widget  */}
                  <div className="">
                    <div className="footer-link text-center">
                      <h4>Say Hello</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="mailto:admin@example.com">
                            abraham@waldenberginc.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widget  */}

                  <div className="text-center copyright-text">
                    <p>
                      Copyright © 2020 Waldenberg-Creations. All Rights
                      Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
