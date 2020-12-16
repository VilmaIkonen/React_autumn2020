import React from 'react';
import { Link } from 'react-router-dom'
import { Nav }from 'react-bootstrap'

/* Don't do navigation like that, use Router instead */
const Navigation= () => {
	return (
		<Nav defaultActiveKey="/" as="ul">
			<Nav.Item as="li">
				<Nav.Link href="/" eventkey="home">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link href="/blog" eventKey="blog">Blog</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link href="/new_post" eventKey="new_post">New Post</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navigation;