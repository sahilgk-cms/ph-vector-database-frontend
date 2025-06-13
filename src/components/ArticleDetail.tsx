// src/components/ArticleDetail.tsx
import React from 'react';

interface Article {
  _id: string;
  title: string;
  text: string;
  date: string;
  // Add other fields as needed
}

interface Props {
  article: Article | null;
}

const ArticleDetail: React.FC<Props> = ({ article }) => {
  if (!article) {
    return <p>Select an article to see details</p>;
  }

  return (
    <div style={{ width: '50%', paddingLeft: '2rem' }}>
      <h2>{article.title}</h2>
      <p><strong>Date:</strong> {article.date}</p>
      <p>{article.text}</p>
      <a href={article.article_links} target="_blank" rel="noopener noreferrer">Read full article ↗</a>
      {/* Add more fields as needed */}
    </div>
  );
};

export default ArticleDetail;
