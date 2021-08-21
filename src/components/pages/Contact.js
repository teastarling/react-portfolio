import React from 'react';
import Form from 'react-bootstrap/Form'

export default function Contact() {
  return (
    <div className="col">
      <h1 className="head-text">Contact Me</h1>
      <Form>
      <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Jane Doe" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="lg" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control size="lg" as="textarea" rows={4} />
        </Form.Group>
      </Form>
    </div>
  );
}