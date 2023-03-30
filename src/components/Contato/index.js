import React from 'react';
import { useState } from 'react';

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
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
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
        let response = await fetch("https://api-drfq.onrender.com/alunos", {
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
                nome: "",
                cpf: "",
                email: "",
                telefone: "",

            });

        }
    };

    return (
        <ContatoContainer id='contato'>
            <ContatoH1>Ficou interessado? Cadastre-se na lista de espera e receba mais informações antes da inauguração!</ContatoH1>
            <Form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <FormLabel htmlFor='nome'>Nome</FormLabel>
                        <FormInput
                            type="text"
                            value={formDetails.nome}
                            placeholder="Digite nome e sobrenome"
                            onChange={(e) =>
                                onFormUpdate("nome", e.target.value)
                            }
                        />
                        <FormLabel htmlFor='CPF'>CPF</FormLabel>
                        <FormInput
                            type="text"
                            value={formDetails.cpf}
                            placeholder="xxx.xxx.xxx-xx"
                            onChange={(e) =>
                                onFormUpdate("cpf", e.target.value)
                            }
                        />
                    </div>
                    <div style={{ flex: "1" }}>
                        <FormLabel htmlFor='email'>E-mail</FormLabel>
                        <FormInput
                            type="email"
                            value={formDetails.email}
                            placeholder="email@provedor.com"
                            onChange={(e) =>
                                onFormUpdate("email", e.target.value)
                            }
                        />
                        <FormLabel htmlFor='mensagem'>Telefone</FormLabel>
                        <FormInput
                            type="tel"
                            value={formDetails.telefone}
                            placeholder="(21) 98765-4321"
                            onChange={(e) =>
                                onFormUpdate("telefone", e.target.value)
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

export default Contato;
