import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.espn.com/espn/rss/news")
      .then((res) => res.json())
      .then((data) => setNews(data.items));
  }, []);

  return (
    <div className="section">
      <h2>📰 Sports News</h2>

      <div className="grid">
        {news?.slice(0, 6).map((item, index) => (
          <div className="card glass" key={index}>
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;