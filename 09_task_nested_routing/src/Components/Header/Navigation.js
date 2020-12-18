import React from 'react';
import { Nav }from 'react-bootstrap'

/* Don't do navigation like that, use Router instead */
const Navigation= () => {
	return (
		<Nav className="d-flex justify-content-center">
			<Nav.Item as="li">
				<Nav.Link href="/" eventkey="home">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link href="/posts" eventKey="posts">All posts</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link href="/new_post" eventKey="new_post">New Post</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navigation;