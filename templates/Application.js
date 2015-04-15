import React from "react";

export default class extends React.Component {
  render() {
    return (
      <html>
        <head></head>
        <body>
          <this.props.page />
        </body>
      </html>
    );
  }
}
