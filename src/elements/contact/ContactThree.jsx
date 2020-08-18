import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      mailSent: false,
      error: null,
    };
    this.validator = new SimpleReactValidator();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    console.log(email);
    console.log(name !== "");
    console.log(subject !== "");
    console.log(message !== "");

    if (this.validator.allValid()) {
      //  alert("You submitted the form and stuff!");
      let templateParams = {
        from_name: name,
        user_mail: email,
        subject: subject,
        message: message,
      };
      emailjs.send(
        "default_service",
        "emailtemplate",
        templateParams,
        "user_FqIXKAIpDQYC1lkU3it2G"
      );
      toast.success("Thanks. Your message has been submitted successfullly");
      this.setState(() => {
        return { mailSent: true };
      });
    } else {
      this.validator.showMessages();
      toast.error("I'm sorry. Your message couldn't been submitted");
      this.forceUpdate();
    }
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      mailSent: false,
      error: null,
    });
  }

  render() {
    if (this.state.mailSent) {
      this.resetForm();
    }
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Hire Me.</h2>
                <p className="description">
                  I'm allways willing to learn new technologies and get involve
                  in challenging projects.{" "}
                </p>
                <p> Fill the fields below and press submit to contact me.</p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <label htmlFor="name">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      placeholder="Your Name *"
                    />
                    {this.validator.message(
                      "name",
                      this.state.name,
                      "required|alpha"
                    )}
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      placeholder="Your email *"
                    />
                    {this.validator.message(
                      "email",
                      this.state.email,
                      "required|email"
                    )}
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.subject}
                      onChange={(e) => {
                        this.setState({ subject: e.target.value });
                      }}
                      placeholder="Write a Subject *"
                    />
                    {this.validator.message(
                      "subject",
                      this.state.subject,
                      "required|alpha_space"
                    )}
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.message}
                      onChange={(e) => {
                        this.setState({ message: e.target.value });
                      }}
                      placeholder="Your Message *"
                    />
                    {this.validator.message(
                      "message",
                      this.state.message,
                      "required|alpha_space"
                    )}
                  </label>
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={`${this.props.contactImages}`} alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactThree;
