import React from "react";
import classes from "./Video.module.css";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <section className={classes.videoPlayer}>
      <div className={classes.contentVideoPlayer}>
        <div className={`player-wrapper ${classes.playerWrapperVideo}`}>
          <ReactPlayer
            controls
            className={`react-player ${classes.reactPlayerVideo}`}
            url="https://www.youtube.com/watch?v=z-HTeR5l_tk"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
