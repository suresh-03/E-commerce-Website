import React from "react";
import Layout from "../components/layout/layout";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import Input from "../components/UI/input";

function Signup() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="Firstname"
                      placeholder="Firstname"
                      type="text"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Lastname"
                      placeholder="Lastname"
                      type="text"
                      value=""
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email"
                  placeholder="Email"
                  type="email"
                  value=""
                  message="We Don't share your Email"
                  onChange={() => {}}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value=""
                  onChange={() => {}}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Signup;
