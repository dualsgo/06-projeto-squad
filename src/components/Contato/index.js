import React from 'react';
import { useEffect, useState } from 'react';

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
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        number: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Enviar");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Enviado");
        let response = await fetch("http://localhost:3001/adduser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "access-control-allow-origin": "*",
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText("Enviar");
        let result = await response.json();
        console.log(result);

        if (result.code === 200) {
            setStatus({ success: true, message: "Mensagem de Sucesso" });
        } else {
            setStatus({
                success: false,
                message: "",
            });
            setFormDetails({
                firstName: "",
                lastName: "",
                email: "",
                number: "",

            });

        }
    };

    return (
        <ContatoContainer id='contato'>
            <ContatoH1>Fale conosco</ContatoH1>
            <Form onSubmit={handleSubmit}>
                <FormLabel htmlFor='nome'>Nome</FormLabel>
                <FormInput
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Nome"
                    onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                    }
                />
                <FormLabel htmlFor='sobrenome'>Sobrenome</FormLabel>
                <FormInput
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Sobrenome"
                    onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                    }
                />
                <FormLabel htmlFor='email'>E-mail</FormLabel>
                <FormInput
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) =>
                        onFormUpdate("email", e.target.value)
                    }
                />
                <FormLabel htmlFor='mensagem'>Mensagem</FormLabel>
                <FormInput
                    type="tel"
                    value={formDetails.number}
                    placeholder="Telefone"
                    onChange={(e) =>
                        onFormUpdate("number", e.target.value)
                    }
                />
                <FormButton type='submit'>{buttonText}</FormButton>
                <p
                    className={
                        status.success === false ? "danger" : "success"
                    }
                >
                    {status.message}
                </p>
            </Form>
        </ContatoContainer>
    )
}

export default Contato;
