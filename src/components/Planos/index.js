import React from 'react';
import Icon1 from '../../images/icon-1.svg';
import Icon2 from '../../images/icon-2.svg';
import Icon3 from '../../images/icon-3.svg';
import {
    PlanosContainer,
    PlanosH1,
    PlanosWrapper,
    PlanosCard,
    PlanosChecks,
    PlanosIcon,
    PlanosH2,
    PlanosP,
    CheckMark,
}
    from './PlanosElements';

const Planos = () => {
    return (
        <PlanosContainer id='planos'>
            <PlanosH1>A sua melhor opção na hora de levar uma vida + saudável.</PlanosH1>
            <PlanosWrapper>

                <PlanosCard>
                    <PlanosIcon src={Icon1} />
                    <PlanosH2>Plano Fit
                    </PlanosH2>
                    <PlanosChecks>
                        <PlanosP>< CheckMark />Área de musculação e aeróbicos</PlanosP>
                        <PlanosP>< CheckMark />Fit Go treinos online</PlanosP>
                        <PlanosP>< CheckMark />Fit App</PlanosP>
                    </PlanosChecks>
                    <PlanosH2>R$ 89,99</PlanosH2>
                </PlanosCard>

                <PlanosCard>
                    <PlanosIcon src={Icon2} />
                    <PlanosH2>Plano Smart</PlanosH2>
                    <PlanosChecks>
                        <PlanosP>< CheckMark />Área de musculação e aeróbicos</PlanosP>
                        <PlanosP>< CheckMark />Fit Go treinos online</PlanosP>
                        <PlanosP>< CheckMark />Fit App</PlanosP>
                        <PlanosP>< CheckMark />Plano Vip 30 dias para um amigo</PlanosP>

                    </PlanosChecks>
                    <PlanosH2>R$ 119.99</PlanosH2>
                </PlanosCard>

                <PlanosCard>
                    <PlanosIcon src={Icon3} />
                    <PlanosH2>Plano Black</PlanosH2>
                    <PlanosChecks>
                        <PlanosP>< CheckMark />Área de musculação e aeróbicos</PlanosP>
                        <PlanosP>< CheckMark />Fit Go treinos online</PlanosP>
                        <PlanosP>< CheckMark />Fit App</PlanosP>
                        <PlanosP>< CheckMark />Acesso ilimitado a +1.000 academias da rede</PlanosP>
                        <PlanosP>< CheckMark />Leve amigos para treinar com você</PlanosP>
                        <PlanosP>< CheckMark />Cadeira de massagem</PlanosP>
                    </PlanosChecks>
                    <PlanosH2>R$ 199.99</PlanosH2>
                </PlanosCard>

            </PlanosWrapper>
        </PlanosContainer>
    )
}

export default Planos
