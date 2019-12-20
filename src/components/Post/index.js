import React from 'react';

import Comment from '../Comment';

import './style.css';

function Post({ data }) {
  return (
    <div className="bg-post">
      <div className="inside-post">
        <img src={data.author.avatar} className="avatar" />
        <div className="info">
          <span className="name">{data.author.name}</span>
          <span className="date">{data.date}</span>
        </div>
      </div>
      <div className="question-block">
        <div className="question">{data.content}</div>
      </div>
      <div className="line"></div>
      <div>
        {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </div>
  )
}

export default Post;