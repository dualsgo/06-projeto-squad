import React from 'react';
import {
    ContatoContainer,
    ContatoH1,
    Form,
    FormLabel,
    FormInput,
    FormButton,
}
    from './ContatoElements.js';

const Contato = () => {
    return (
        <ContatoContainer id='contato'>
            <ContatoH1>Fale conosco</ContatoH1>
            <Form>
                <FormLabel htmlFor='nome'>Nome</FormLabel>
                <FormInput type='text' name='nome' placeholder='Digite seu nome' />
                <FormLabel htmlFor='email'>E-mail</FormLabel>
                <FormInput type='email' name='email' placeholder='Digite seu e-mail' />
                <FormLabel htmlFor='mensagem'>Mensagem</FormLabel>
                <FormInput type='text' name='mensagem' placeholder='Digite sua mensagem' />
                <FormButton type='submit'>Enviar</FormButton>
            </Form>
        </ContatoContainer>
    )
}

export default Contato;
