import React from "react";
import SideBar from "./application/sideBar/Component";
import Ghost from "./application/ghost/Component";

export default ({children}) => {
  let content = children;

  if(!content) {
    content = (
      <div>
        <h1>Welcome!</h1>

        <p>
          There are so many different JavaScript events happening, how does one possibly keep up with it all?
        </p>

        <p>
          That's what we're here for. We help the Toronto and surrounding communities learn, promote, schedule,
          host, record, share, and participate in front-end web related culture.
        </p>

        <p>
          We also host our own events every two weeks. Join us for a Tech Talk night, Hack night, and Pub night
          to get away from the restrictions of work and discuss the latest tech with fellow members.
        </p>

        <p>
          Toronto JavaScript is an entirely community run organization. We are developers
          managing a community for other developers.
        </p>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-xs-3 sidebar-container">
        <SideBar />
        <Ghost />
      </div>
      <div className="col-xs-9 col-xs-offset-3 content-area">
        {content}
      </div>
    </div>
  );
}
