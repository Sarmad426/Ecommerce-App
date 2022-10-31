import React from "react";

class Posts extends React.Component {
  state = { posts: [] };
  fetchingData = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json().then((posts) => this.setState({ posts }))
  );
  render() {
    return (
      <div className="text-center">
        <div className="posts">
          {this.state.posts.map((post) => (
            <div className="card-data" key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        <textarea name="Feedback" id="feedback" cols="40" rows="10">
          Add your own post
        </textarea>
        <button className="btn btn-primary m-3">Submit</button>
      </div>
    );
  }
}

export default Posts;
