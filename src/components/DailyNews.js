import React, { useState } from "react";
import './DailyNews.css'


const DailyNews = ({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
  removeNews
}) => {



  return (
    <div className="news">
      <div>
        <img src={urlToImage} alt={title} />
        <div className="newsInfo">
          <h2 className="title">{title}</h2>
          <h4>Author : {author}</h4>
          <p>{description}</p>
          <p>{content}</p>
          <a href={url}>Know More</a>
        </div>
      </div>
      <div className="news-btn">
        <button
          className="deteleButton"
          onClick={() => removeNews(publishedAt)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default DailyNews;
