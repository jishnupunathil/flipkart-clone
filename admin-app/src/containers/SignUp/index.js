import React from 'react'
import Layout from '../../components/Layout'
import { Button, Col, Container, Row,Form } from 'react-bootstrap'
import Input from '../../components/UI/input'

const SignUp = () => {
  return (
    <Layout>
    <Container>
      <Row style={{ marginTop: "50px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Row>
              <Col md={6}>
                <Input
                  label="First Name"
                  placeholder="First Name"
                
                  type="text"
                 
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Last Name"
                  placeholder="Last Name"
                  
                  type="text"
                 
                />
              </Col>
            </Row>

            <Input
              label="Email"
              placeholder="Email"
 
              type="email"

            />

            <Input
              label="Password"
              placeholder="Password"
  
              type="password"

            /><br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
  )
}

export default SignUp