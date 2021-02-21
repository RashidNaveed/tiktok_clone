import { useState, useEffect } from 'react';
import './App.css';
import Videos from './components/Video/Videos';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Videos
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
