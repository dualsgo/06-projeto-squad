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
            <ContatoH1>Faça a sua inscrição no programa aqui!</ContatoH1>
            <Form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flex: "1", marginRight: "20px" }}>
                <FormLabel htmlFor='nome'>Nome</FormLabel>
                <FormInput
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Joãozinho"
                    onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                    }
                />
                <FormLabel htmlFor='sobrenome'>Sobrenome</FormLabel>
                <FormInput
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Silva"
                    onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                    }
                />
                </div>
                <div style={{ flex: "1" }}>
                <FormLabel htmlFor='email'>E-mail</FormLabel>
                <FormInput
                    type="email"
                    value={formDetails.email}
                    placeholder="email@email.com"
                    onChange={(e) =>
                        onFormUpdate("email", e.target.value)
                    }
                />
                <FormLabel htmlFor='mensagem'>Telefone</FormLabel>
                <FormInput
                    type="tel"
                    value={formDetails.number}
                    placeholder="(21) 9 9988-7766"
                    onChange={(e) =>
                        onFormUpdate("number", e.target.value)
                    }
                />
                </div>
                </div>
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

export default Contato