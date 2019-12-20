import React from 'react';

import './style.css';

function Post({ data }) {
  return (
    <div className="bg-post">
      <div className="inside-post">
        <div className="avatar"></div>
        <div className="info">
          <span className="name">{data.author.name}</span>
          <span className="date">{data.date}</span>
        </div>
      </div>
      <div className="question-block">
        <div className="question">{data.content}</div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default Post;