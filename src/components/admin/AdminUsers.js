import { Container, Table, Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AdminUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:3001/users');
            var body = await response.json();
            setUsers(body.funcionalidadeData);
            console.log(body);
        }
        fetchItems();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const title = form.title.value
        const description = form.description.value

        const response = await fetch('http://localhost:3001/addusers', {
            method: 'POST',
            body: JSON.stringify({
                name: title,
                comment: description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

        if (!response.ok) {
            alert('Erro ao cadastrar funcionalidade')
            return
        }
        const funcionalidade = await response.json()
        alert('Users cadastrada com sucesso')
        setUsers([...users, funcionalidade.data])
        form.reset()
        console.log(users);
    }


    async function excluirUsers(id) {
        console.log(id)

        fetch('http://localhost:3001/deleteusers/' + id, {
            method: 'DELETE',
            body: JSON.stringify({
                funcionalidadeId: id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))

        alert('Users excluída com sucesso')
        const usersAtualizadas = users.filter((funcionalidade) => funcionalidade.funcionalidadeId !== id)
        setUsers(usersAtualizadas)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => { salvarEdicao(event.target, id) }

        const linha = botao.parentNode.parentNode
        console.log(linha)
        const colunaTitulo = linha.children[1]
        console.log(colunaTitulo)

        const inputTitulo = document.createElement('input')
        inputTitulo.type = 'text'
        inputTitulo.value = colunaTitulo.innerText
        colunaTitulo.innerText = ''
        colunaTitulo.appendChild(inputTitulo)

        const colunaDescricao = linha.children[2]
        const inputDescricao = document.createElement('input')
        inputDescricao.type = 'text'
        inputDescricao.value = colunaDescricao.innerText
        colunaDescricao.innerText = ''
        colunaDescricao.appendChild(inputDescricao)
        console.log(botao.parentNode.parentNode.children[1].children[0].value)
    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        const inputTitulo = colunaTitulo.children[0]
        const colunaDescricao = linha.children[2]
        const inputDescricao = colunaDescricao.children[0]

        const response = await fetch('http://localhost:3001/editusers/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                funcionalidadeId: id,
                name: botao.parentNode.parentNode.children[1].children[0].value,
                comment: botao.parentNode.parentNode.children[2].children[0].value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
        console.log(id)

        colunaTitulo.innerText = inputTitulo.value
        colunaDescricao.innerText = inputDescricao.value

        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="conteudo-margin">
            <Link to="/"><Button variant="secondary">Home</Button></Link>
            <Link to="/Register"><Button variant="secondary">Administrativo</Button></Link>
            <hr />
            <h1>Admin Users</h1>
            <hr />
            <h2>Adicionar Users</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Digite o título da funcionalidade" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Digite a descrição" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>Lista de Users</p>
            <Table striped hover>
                <thead>
                    <tr className='text-dark'>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((funcionalidade, index) => (
                        <tr key={index}>
                            <td className='text-dark'>{funcionalidade.funcionalidadeId}</td>
                            <td className='text-dark'>{funcionalidade.name}</td>
                            <td className='text-dark'>{funcionalidade.comment}</td>
                            <td>
                                <Button variant="primary" onClick={(event) => { habilitarEdicao(event.target, funcionalidade.funcionalidadeId) }}>Editar</Button>
                                <Button variant="danger" onClick={() => { excluirUsers(funcionalidade.funcionalidadeId) }}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminUsers