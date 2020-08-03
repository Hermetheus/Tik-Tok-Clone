import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        src="https://v16m.tiktokcdn.com/151e486746f06f356458c6fea300b23f/5f29aa1c/video/tos/useast2a/tos-useast2a-ve-0068c003/5ae6c99267a4425381cd6924dd285eec/?a=1233&br=2988&bt=1494&cr=0&cs=0&dr=0&ds=3&er=&l=2020080218340401019019213111EB7F5D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzloeXQzaDNrdjMzaTczM0ApZDw0OjU5Ojs6NzQ2aDo1Nmdwc2dpaWhva19fLS02MTZzczJiLV40Ml80Ly8zMGIxLjI6Yw%3D%3D&vl=&vr="
        loop
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter />
      {/* <VideoSidebar> */}
    </div>
  );
}

export default Video;
