import React, { useState, useEffect } from "react";
import { Card, Button, Accordion } from "react-bootstrap";


const PostCard = ({ title, author, desc, img, link }) => {

  const [ showDesc, setShowDesc ] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();
    setShowDesc(true);
  }

  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={img} alt={title}/>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
        <Card.Link href={link}>        
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle onClick={clickHandler} as={Button} variant="link" eventKey="0">
                  Read more!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{desc}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>          
        </Card.Link>
      </Card.Body>
    </Card> 
  );
};

export default PostCard;
