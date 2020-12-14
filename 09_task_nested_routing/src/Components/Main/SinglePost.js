import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {

	const [post, setPost] = useState();

	let {id} = useParams();

	useEffect(() => {
		if(!post) {
			axios.get("https://localhost:30001/posts/" + id)
			.then((res)=> setPost(res.data));
		}
	})

	let postData = undefined;

	if(id) {
		postData = <h1>Loading...</h1>
	}

	if(post) {
		postData = (
			<div>
			{post.title} {post.author} {post.desc}
			</div>
		)
	}

	return postData;
};

export default SinglePost;