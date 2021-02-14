import React from 'react';
import { MusicNote } from '@material-ui/icons';
import Ticker from 'react-ticker';
import style from './VideoFooter.module.css';

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer_text}>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className={style.footer_ticker}>
          <MusicNote className={style.footer_ticker_icon} />
          <Ticker mode="smooth">{() => <p>{song}</p>}</Ticker>
        </div>
      </div>
      <img
        className={style.footer_logo}
        src="https://freesvg.org/img/1536281106.png"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
