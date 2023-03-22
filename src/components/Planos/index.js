import React from 'react';
import Icon1 from '../../images/icon-1.svg';

import { useEffect, useState } from 'react';

import {
    PlanosContainer,
    PlanosH1,
    PlanosCard,
    PlanosChecks,
    PlanosIcon,
    PlanosP,
    CheckMark,
}
    from './PlanosElements';

const Planos = () => {

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
        <PlanosContainer id='funcionalidades'>
            <PlanosH1>Veja os benefícios que você irá adquirir fazendo parde do nosso programa.</PlanosH1>

            <PlanosCard>
                <PlanosIcon src={Icon1} />
                <PlanosChecks style={{ listStyle: 'none' }}>
                    {funcionalidadeItems.map((funcionalidades, index) => (
                        <PlanosP className='fs-1' index={index}> <CheckMark />{funcionalidades.name}<p>{funcionalidades.comment}</p></PlanosP>
                    ))}</PlanosChecks>
            </PlanosCard>
        </PlanosContainer>
    )
}

export default Planos
