import {Container, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'

function AdminSobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await fetch('http://localhost:3001/sobre')
            const sobre = await response.json()
            setSobre(sobre.sobreData)
        }
        getSobre()
    }, []);

    function handleTextChange(event) {
        const text = event.target.value
        setSobre({...sobre, text})
        console.log(sobre);
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const text = form.text.value

        const response = await fetch('http://localhost:3001/editsobre/' + 1, {
            method: 'PUT',
            body: JSON.stringify({
                comment: text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

        if(!response.ok) {
            return alert('Erro ao atualizar o conteúdo da página Sobre')
        }
        alert('Conteúdo da página Sobre atualizado com sucesso!')
    }

    return (
        <Container className="conteudo-margin">
            <h1>Admin - Sobre</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Conteúdo da página Sobre</Form.Label>
                    <Form.Control as="textarea" rows={3} value={sobre.text} onChange={handleTextChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Atualizar o texto
                </Button>
            </Form>            
        </Container>
    )
}

export default AdminSobre