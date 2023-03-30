import React from 'react';
import Icon1 from '../../images/icon-1.svg';
import '../../App.css'
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
            const response = await fetch('https://squad-back.onrender.com/funcionalidades', {
                mode: 'no-cors'
            })
            const data = await response.json();
            setFuncionalidadesItems(data.funcionalidadeData);
        }
        fetchItems();
    }, []);

    return (
        <FuncionalidadesContainer id='funcionalidades'>
            <FuncionalidadesH1>Veja os benefícios que você irá adquirir fazendo parte do nosso programa.</FuncionalidadesH1>

            <FuncionalidadesCard>
                <FuncionalidadesIcon src={Icon1} />
                <FuncionalidadesChecks style={{ listStyle: 'none' }}>
                    {funcionalidadeItems.map((funcionalidades, index) => (
                        <FuncionalidadesP className='fs-1' index={index}> <CheckMark />{funcionalidades.name}<p className='descricao'>{funcionalidades.comment}</p></FuncionalidadesP>
                    ))}</FuncionalidadesChecks>
            </FuncionalidadesCard>
        </FuncionalidadesContainer>
    )
}

export default Funcionalidades
