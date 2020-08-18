import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import HtmlCss from "../../icons/HtmlCss";
import Android from "../../icons/Android";
import Node from "../../icons/Node";
import PhpSql from "../../icons/PhpSql";
import ReactRedux from "../../icons/ReactRedux";
import WpWoo from "../../icons/WpWoo";

const ServiceList = [
  {
    icon: <HtmlCss />,
    title: "Html & Css",
    description:
      "HTML provides the structure of the page, CSS the visual and aural layout.",
  },
  {
    icon: <ReactRedux />,
    title: "ReactJS & Redux",
    description:
      "React is a JavaScript framework for building UI components. Redux is a JavaScript library for managing application state. ",
  },
  {
    icon: <Node />,
    title: "NodeJs ",
    description:
      "Node.js is a cross-platform, JavaScript runtime environment that executes code outside a web browser.",
  },
  {
    icon: <PhpSql />,
    title: "Php & MySQL",
    description:
      "PHP is a general-purpose scripting language especially suited to web development. MySQL is a relational database management system",
  },
  {
    icon: <WpWoo />,
    title: "WordPress & Woo",
    description:
      "WordPress is a content management system. WooCommerce is an e-commerce plugin for WordPress, designed for online merchants.",
  },
  {
    icon: <Android />,
    title: "Android",
    description:
      "Android is a mobile operating system, designed primarily for touchscreen mobile devices such as smartphones and tablets. ",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a className="invisible-button">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
