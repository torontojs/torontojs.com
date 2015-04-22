import React from "react";

export default class extends React.Component {
  render() {
    return (
      <html>
        <head>
          <script src={this.props.clientPath} async="async" />
        </head>
        <body>
          <this.props.page />
        </body>
      </html>
    );
  }
}
