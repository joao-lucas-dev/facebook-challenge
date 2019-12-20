import React, { Component } from 'react';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "João Lucas",
          avatar: ""
        },
        date: "17 Dec 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: ""
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: ""
        },
        date: "19 Dec 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: ""
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div>
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
}

export default PostList;
