import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Experience",
      tab3 = "Resume";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <button className="invisible-button">
                            eCommerce <span> - Fullstack</span>
                          </button>
                          Online Stores customized Frontend and Worpress +
                          Woocommerce Backend, ...
                        </li>
                        <li>
                          <button className="invisible-button">
                            Website and App design <span> - Frontend</span>
                          </button>
                          Landing pages, Websites, Mobile and Web Apps, ...
                        </li>
                        <li>
                          <button className="invisible-button">
                            Custom APIs <span> - Backend</span>
                          </button>
                          Database managing, IoT connection, control of remote
                          devices, ...
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <button className="invisible-button">
                            Del Prado<span> - eCommerce Developer </span>
                          </button>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <button className="invisible-button">
                            Grisu<span> - Web Developer</span>
                          </button>{" "}
                          2019 -2019
                        </li>
                        <li>
                          <button className="invisible-button">
                            Nurumia<span> - Fullstack Developer</span>
                          </button>{" "}
                          2018 - 2019
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <Link
                            to="/files/AbrahamRodriguezResume.pdf"
                            target="_blank"
                            download
                            color="blue"
                          >
                            My Resume
                            <span> - Download it from here </span>
                          </Link>
                        </li>
                        <li>
                          <p className="invisible-text">
                            {" "}
                            Filling space<span>Filling space </span>
                          </p>
                        </li>
                        <li>
                          <p className="invisible-text">
                            Filling space <span> </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
