import React, { useRef, useState } from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSideBar from '../VideoSideBar/VideoSideBar';
import style from './Videos.module.css';

const Videos = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVidePress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className={style.video}>
      <video
        className={style.video_player}
        src={url}
        loop
        ref={videoRef}
        onClick={onVidePress}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Videos;
