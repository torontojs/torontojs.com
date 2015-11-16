import React from "react";

export default class ContactComponent extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact Us</h1>

        <p>
          Send us an email at <a href="mailto:team@torontojs.com">team@torontojs.com</a>
        </p>

        <p>
          Tweet at us <a href="https://twitter.com/torontojs" target="_blank">@torontojs</a>
        </p>

        <p>
          Find us on <a href="http://www.meetup.com/torontojs/" target="_blank">Meetup</a>
        </p>

        <p>
          Join our <a href="http://slack.torontojs.com" target="_blank">Slack</a>
        </p>

        <p>
          Watch our videos on <a href="http://youtube.com/torontojavascript" target="_blank">YouTube</a>
        </p>
      </div>
    );
  }
}
