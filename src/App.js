import React, { useState, useEffect } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://ntounews-12c3919cf8d0.herokuapp.com/news');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>海大最新消息</h1>
      <table>
        <thead>
          <tr><th>單位</th><th>日期</th><th>新聞標題</th></tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id}><td>{item.publisher}</td><td>{item.date}</td><td><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsList;
