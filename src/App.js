import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import Video from "./Video";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
