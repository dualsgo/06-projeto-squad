import { Container, Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function AdminSobre() {
    const [sobre, setSobre] = useState({ text: '' });

    useEffect(() => {
        async function getSobre() {
            const response = await fetch('https://squad-back.onrender.com/sobre')
            const sobreData = await response.json()
            setSobre(sobreData)
        }
        getSobre()
    }, []);

    function handleTextChange(event) {
        const text = event.target.value
        setSobre({ ...sobre, text })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const text = form.text.value

        const response = await fetch('https://squad-back.onrender.com/editsobre/' + 1, {
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

        if (!response.ok) {
            return alert('Erro ao atualizar o conteúdo da página Sobre')
        }
        alert('Conteúdo da página Sobre atualizado com sucesso!')
    }

    return (
        <Container className="conteudo-margin">
            <hr />
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Body Move Center</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Register">Administrativo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
            <h2>Adicionar Sobre</h2>
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
