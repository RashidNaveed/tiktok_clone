import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons';
import React, { useState } from 'react';
import style from './VideoSideBar.module.css';

const VideoSideBar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className={style.side_bar}>
      <div className={style.side_bar_selection_buttons}>
        {liked ? (
          <Favorite fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className={style.side_bar_selection_buttons}>
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className={style.side_bar_selection_buttons}>
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSideBar;
