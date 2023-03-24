import React from 'react';
import Icon1 from '../../images/icon-1.svg';

import { useEffect, useState } from 'react';

import {
    FuncionalidadesContainer,
    FuncionalidadesH1,
    FuncionalidadesCard,
    FuncionalidadesChecks,
    FuncionalidadesIcon,
    FuncionalidadesP,
    CheckMark,
}
    from './FuncionalidadesElements';

const Funcionalidades = () => {

    const [funcionalidadeItems, setFuncionalidadesItems] = useState([]);
    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:3001/funcionalidades');
            const data = await response.json();
            setFuncionalidadesItems(data.funcionalidadeData);
        }
        fetchItems();
    }, []);

    return (
        <FuncionalidadesContainer id='funcionalidades'>
            <FuncionalidadesH1>Veja os benefícios que você irá adquirir fazendo parde do nosso programa.</FuncionalidadesH1>

            <FuncionalidadesCard>
                <FuncionalidadesIcon src={Icon1} />
                <FuncionalidadesChecks style={{ listStyle: 'none' }}>
                    {funcionalidadeItems.map((funcionalidades, index) => (
                        <FuncionalidadesP className='fs-1' index={index}> <CheckMark />{funcionalidades.name}<p>{funcionalidades.comment}</p></FuncionalidadesP>
                    ))}</FuncionalidadesChecks>
            </FuncionalidadesCard>
        </FuncionalidadesContainer>
    )
}

export default Funcionalidades
