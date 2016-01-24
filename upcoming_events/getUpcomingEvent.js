import fetch from "isomorphic-fetch";

export default function getUpcomingEvent(meetupName, meetupInfoURL) {
  return (dispatch) => {
    const handleSuccess = (response) => {
      response.json().then((calendar) => {
        dispatch({
          type: "UPCOMING_EVENTS_ADD"
        , events: calendar.items
        });
      })
    }

    const handleFailure = (error) => {
      console.log("ERROR!!!");

      console.trace();
    }

    fetch(meetupInfoURL, {mode: "cors"}).then(
      handleSuccess
    , handleFailure
    );
  }
}
