import React from "react";
import { Card } from "react-bootstrap";

const BlogCard = ({ title, author, desc, img, link }) => {

  return (
    <Card className="BlogCard" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={img} alt={title}/>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
        <Card.Text> {desc} </Card.Text>
        <Card.Link href={link}>Read more</Card.Link>
      </Card.Body>
    </Card> 
  );
};

export default BlogCard;
