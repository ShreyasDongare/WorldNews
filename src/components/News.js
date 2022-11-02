import React from 'react'
import DailyNews from './DailyNews'

const News = ({ news, removeNews }) => {
  return (
    <section>
      <main>
        <h1>Daily News</h1>
      </main>
      <div>
        {news.map((newsInfo) => {
          return (
            <div className="flex">
              <DailyNews
                key={news.publishedAt}
                {...newsInfo}
                removeNews={removeNews}></DailyNews>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News
