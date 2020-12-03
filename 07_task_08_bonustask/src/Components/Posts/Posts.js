import React, { Component } from 'react';
import axios from 'axios';
import './Posts.css'

// API declared outside the component --> URL not visible for the user
const API = "https://jsonplaceholder.typicode.com/photos"

class Posts extends Component {

  state = {
    posts: [],
    isLoading: false,
  }

 /* after everything else has been loaded */
  componentDidMount() {
    this.setState({ isLoading:true });
    
    axios
    .get(API, {
      params: {
        _limit:15
      }
    })
    .then((response) => this.setState({ posts: response.data, isLoading:false }))
  }

  removeHandler = (id) => {
    // posts placement in the array and remove it. Cannot hardcode as id will be changing when deleting and adding posts
    const postIndex = this.state.posts.findIndex(post => {
      return post.id === id
    })

    // 1. ...(=spread): copy the array
    // 2. splice(which index to remove, no. of posts to remove)
    // 3. overwrite the old array
    const currentArray = [...this.state.posts];
    currentArray.splice(postIndex, 1);
    this.setState({posts: currentArray});
  };

  render() {

    if(this.state.isLoading) {
      return <p>Loading posts...</p>
    }
    return (
         <div>
         {/* mapping always needs a key! */}
        <ul className="posts">{this.state.posts.map((post) => (
          <li className="post" key= {post.id}>
            <img src={post.thumbnailUrl} alt={post.id} />
            <h2>{post.id} {post.title}</h2>
            <div className="remove" onClick={() => this.removeHandler(post.id)}>X</div>
          </li>
          ))}
        </ul>
        
      </div>
    );
  }
}

export default Posts;