import React, { Component } from "react";
import { Preview } from "./components/Preview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      candidate_name: "",
      email: "",
      contact: "",
      linkedin: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      candidate_name: e.target.value,
      email: e.target.value,
      contact: e.target.value,
      linkedin: e.target.value,
      intro: [],
    });
  };

  onSubmitIntro = (e) => {
    e.preventDefault();
    this.setState({
      intro: this.state.intro.concat(this.state.candidate_name, this.state.email, this.state.contact, this.state.linkedin),
      candidate_name: "",
      email: "",
      contact: "",
      linkedin: "",

    });
  };

  render() {
    const { candidate_name, email, contact, linkedin, intro } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitIntro}>
          <label htmlFor="name">Enter Name:</label>
          <input
            onChange={this.handleChange}
            value={candidate_name}
            type="text"
            id="name"
          />

          <label htmlFor="email-id">Enter email address:</label>
          <input
            onChange={this.handleChange}
            value={email}
            type="email"
            id="email-id"
          />

          <label htmlFor="contact-no">Enter your Contact Number:</label>
          <input
            onChange={this.handleChange}
            value={contact}
            type="text"
            id="contact-no"
          />

          <label htmlFor="linkedin-id">LinkedIn account:</label>
          <input
            onChange={this.handleChange}
            value={linkedin}
            type="text"
            id="linkedin-id"
          />

          <button type="submit">Add introduction</button>

        </form>
        <Preview intro={intro}></Preview>
      </div>
    )
  }
}

export default App;
