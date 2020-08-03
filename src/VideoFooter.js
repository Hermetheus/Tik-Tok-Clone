import MusicNoteIcon from "@material-ui/icons/MusicNote";
import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@hermetheus</h3>
        <p>this is a description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Yooo Whatdupppp</p>
              </>
            )}
          </Ticker>
        </div>
        <img
          className="videoFooter__record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default VideoFooter;
