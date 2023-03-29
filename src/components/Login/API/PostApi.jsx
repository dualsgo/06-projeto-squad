import React, { useState } from 'react'
import {
  Container,
  FormWrap,
  FormContent,
  FormContentBtn,
  Form,
  FormInput,
  FormLabel,
  FormButtonSearch,
  LinkEdit
} from './StyledComponents'

function PostApi() {

  const [data, setData] = useState({
    nome: '',
    cpf: '',
/*     endereco: '',
    estado: '', */
    telefone: '',
    email: '',
/*     plano: '' */
  });

  const Alunos = (e) => {
    e.preventDefault()
    fetch('https://api-drfq.onrender.com/alunos', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }).then(x => x.json()).then(res => {})
  }

  const handleChange = ({ target: { value, name } }) => {

    setData({
      ...data, [name]: value,
    });
  }

  return (
  <Container>
    <FormWrap>


      <FormContent>
        <FormContentBtn>
          <LinkEdit to='/register' >Listagem de alunos </LinkEdit>
            <LinkEdit to='/'>Página inicial</LinkEdit>
            <LinkEdit to='/admin/sobre'>Sobre</LinkEdit>
            <LinkEdit to='/admin/funcionalidades'>Funcionalidades</LinkEdit>
          </FormContentBtn>

        <Form onSubmit={Alunos}>
          <FormLabel>Nome</FormLabel>
          <FormInput type='text' onChange={handleChange} name='nome' />
          <FormLabel>CPF</FormLabel>
          <FormInput type='text' onChange={handleChange} name='cpf' />
{/*           <FormLabel>Endereço</FormLabel>
          <FormInput type='text' onChange={handleChange} name='endereco' />
          <FormLabel>Cidade</FormLabel>
          <FormInput type='text' onChange={handleChange} name='estado' /> */}
          <FormLabel>Telefone</FormLabel>
          <FormInput type='text' onChange={handleChange} name='telefone' />
          <FormLabel>Email</FormLabel>
          <FormInput type='email' onChange={handleChange} name='email' />
{/*           <FormLabel>Plano</FormLabel>
          <FormInput type='text' onChange={handleChange} name='plano' /> */}
          <FormButtonSearch>Cadastrar</FormButtonSearch>
        </Form>
      </FormContent>

    </FormWrap>

  </Container>);
}

export default PostApi;
