import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <div className="pb-3">
        <Card >
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.excerpt}
                </Card.Text>
                <Button variant="primary" href={props.readMore}>Read more...</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default BasicExample;