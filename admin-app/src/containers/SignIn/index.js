import React from 'react'
import Layout from '../../components/Layout'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import Input from '../../components/UI/input'


const SignIn = () => {
  return (
    <Layout>
    <Container>
        <Row style={{ marginTop: '50px' }}>
            <Col md={{span: 6, offset: 3}}>
                <Form >
                    <Input 
                        label="Email"
                        placeholder="Email"
                        value=""
                        type="email"
                        onChange={() => {}}
                    />
                    <br/>

                    <Input 
                        label="Password"
                        placeholder="Password"
                        value=""
                        type="password"
                        onChange={() => {}}
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

export default SignIn