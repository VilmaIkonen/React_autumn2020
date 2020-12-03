import React, { useState, useEffect }from 'react';
import axios from 'axios'

// 1. import hooks
// 2. use function comp rsc
// 3. set names, descriptive!
// 4. default= title, change title = setTitle(newTitle)

const API ="http://localhost:3001/posts/"

const Blog = () => {

  const [title, setTitle] = useState('Hello World!') // default title
  const [posts, setPosts] = useState([]) // default empty array
  const [post, setPost] = useState({
    title: "",
    desc: "",
    img: "",
    author: ""
  });// template for making new post / form
  const [isLoading, setIsLoading] = useState(false);

// useEffect will take care of lifecyle 
  useEffect(() => {
    axios.get(API).then(response => setPosts(response.data))
  }, []); // empty array 

  const changeTitleHandler = () => {
    let newTitle= prompt("What should be the next title?"); 
    setTitle(newTitle);
  }

  const changeValueHandler =(event) => {
    setPost({
      ...post, 
      [event.target.name]: event.target.value
    })
  }
  // checking the onchage event
  const addPosthandler = (event) => {
    event.preventDefault();

    setIsLoading(true);

    axios
      .post(API, post)
      .then(() => {
        return axios.get(API);
      })
      .then((response) => setPosts(response.data))
      .then(() => setIsLoading(false));
  };

  let postList = undefined;

  if (isLoading) {
    postList = <h1>Loading post</h1>;
  }

  if (!isLoading) {
    postList = (
      <div>
        <h1 onClick={changeTitleHandler}>{title}</h1>
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <img src={post.img} alt={post.desc} />
              <h2>{post.title}</h2> <p>{post.desc}</p>
              <p>{post.author}</p>
            </div>
          ))}
        </div>
        <form onSubmit={addPosthandler}>
          <input
            type="text"
            name="title"
            onChange={changeValueHandler}
            placeholder="title"
          />
          <input
            type="text"
            name="desc"
            onChange={changeValueHandler}
            placeholder="desc"
          />
          <input
            type="text"
            name="img"
            onChange={changeValueHandler}
            placeholder="img"
          />
          <input
            type="text"
            name="author"
            onChange={changeValueHandler}
            placeholder="author"
          />
          <button type="submit">send new post</button>
        </form>
      </div>
    );
  }
  return postList;
};

export default Blog;