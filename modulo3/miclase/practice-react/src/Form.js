import { useState } from 'react'
import { Form, InputGroup, Button, Col } from 'react-bootstrap/';
import { getStorageArray, setStorage } from './utils';


export default function TheForm() {

    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({ title:'', imagen:'', descrption:'', })
    // const [articles, setArticles] = useState();
    const handleSubmit = (event) => {
            const form = event.target;
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            if ( ! form.checkValidity() === true) {
                const articles = getStorageArray('articles');
                const updatedArticles = [...articles, input];
                setStorage('articles', updatedArticles);
                // setArticles(updatedArticles);
            }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target['name'];
        const obj = { ...input ,[name] : value };
        setInput(obj);
    };


    return (
        <div style={{ width: "500px", margin: "auto" }} className="mt-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group controlId="title">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={handleChange}
                        name="title"
                    />
                    <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">No se ve bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="imagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="imagen"
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">No se ve bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control name="descrption" as="textarea" rows={3} onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                </Form.Group>
                <Button type="submit">Cargar Articulo</Button>
            </Form>
        </div>
    )
}
