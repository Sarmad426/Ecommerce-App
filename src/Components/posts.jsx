import React from "react";

class Posts extends React.Component {
  state = { posts: [] };
  fetchingData = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json().then((posts) => this.setState({ posts }))
  );
  render() {
    return (
      <div className="cards">
        {this.state.posts.map((post) => (
          <div className="card-data">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
