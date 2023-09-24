import * as React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PrimaryLayout from "../layouts/PrimaryLayout";


const Home = ()  => (
  <PrimaryLayout title="Contact Us">
      <Form > 
        <Form.Group className="mb-3" controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactForm.Subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" controlId="contactForm.submit" type="submit">
          Submit
        </Button>
      </Form>
  </PrimaryLayout>
)
export default Home