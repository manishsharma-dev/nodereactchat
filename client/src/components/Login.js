import React, { useRef } from 'react'
import { Button, Container, Form, ButtonGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function Login({ onIdSubmit }) {
    const idRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    const createNewId = () => {
        onIdSubmit(uuidv4());
    }
    return (
        <Container className='align-items-center d-flex' style={{
            height: '100vh'
        }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <ButtonGroup className='mt-2'>
                    <Button type="submit" className='me-2'>Login</Button>
                    <Button variant='secondary' onClick={createNewId}>Create A New Id</Button>
                </ButtonGroup>
            </Form>
        </Container>
    )
}

export default Login
