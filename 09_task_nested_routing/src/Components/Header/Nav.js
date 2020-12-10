import React from 'react';
import {Link} from 'react-router-dom'

/* Don't do navigation like that, use Router instead */
const Nav = () => {
	return (
		<nav> 
			<ul>
				<li> <Link to="/">Home</Link> </li>
				<li> <Link to="/blog">Blog</Link> </li>
				<li> <Link to="/new_post">New Post</Link> </li>
			</ul>
		</nav>
	);
};

export default Nav;