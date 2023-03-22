import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormButton,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormLabel,
    Text
} from './LogInElements'

const LogIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Body Move Center</Icon>
                    <FormContent>
                        <Form action='register'>
                            <FormH1>Área administrativa</FormH1>
                            <FormLabel htmlFor='for'>E-mail corporativo</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Senha</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Entrar</FormButton>
                            <Text>Esqueceu a senha? Contacte o suporte</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default LogIn;
