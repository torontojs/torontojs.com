import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      greeting: "React Toronto"
    }
  }
, handleChange(event) {
    this.setState({
      greeting: event.target.value
    });

    debugger;

  }
, render: function() {
    return (
      <div>
        <h1>Home Page</h1>

        <input type="text" onChange={this.handleChange} />

        <p>
          Hello, {this.state.greeting}!
        </p>
      </div>
    );
  }
});
