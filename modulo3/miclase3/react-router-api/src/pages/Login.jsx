import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

export default function Login({loginAsAdmin, setUser}) {
    const [input, setInput] = useState({ username: '', password: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value }
        setInput(changedInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(input.username);
        if(input.username === 'admin' && input.password === '123'){
            loginAsAdmin()
        }
        history.push('/')
    }

    return (
        <div>
            Login
            <Form onSubmit={handleSubmit} className='mx-auto card p-5' style={{ width: '500px' }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onchange={handleChange} name="username" type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onchange={handleChange} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}