import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const MessageCardForm = props => {
  return (
    <Card
      body
      className="message-form"
      style={{ position: "absolute", top: "5px", right: "5px", zIndex: 999 }}
    >
      <Card.Title>Welcome to QAFFI Staff Map!</Card.Title>
      <Card.Text>Leave a message with your location!</Card.Text>
      
      
        <Form onSubmit={props.formSubmitted}>
          <Form.Group>
            <Form.Label for="name">Name</Form.Label>
            <Form.Control
              onChange={props.nameChanged}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label for="message">Room Number</Form.Label>
            <Form.Control
              onChange={props.messageChanged}
              type="text"
              name="message"
              id="message"
              placeholder="Enter your room number"
            />
          </Form.Group>

        </Form>
      
    </Card>
  );
};

export default MessageCardForm;
