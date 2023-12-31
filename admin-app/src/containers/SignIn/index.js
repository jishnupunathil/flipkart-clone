import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import Input from '../../components/UI/input'
import {login} from '../../actions'
import { useDispatch } from 'react-redux'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')
    const dispatch=useDispatch()

const userLogin=(e)=>{

    e.preventDefault()
    
    const user={
        email,password
    }

    dispatch(login(user))
}

  return (
    <Layout>
    <Container>
        <Row style={{ marginTop: '50px' }}>
            <Col md={{span: 6, offset: 3}}>
                <Form onSubmit={userLogin}>
                    <Input 
                        label="Email"
                        placeholder="Email"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>

                    <Input 
                        label="Password"
                        placeholder="Password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
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