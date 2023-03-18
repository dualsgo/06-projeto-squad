import React from 'react';
import Icon1 from '../../images/icon-1.svg';
import Icon2 from '../../images/icon-2.svg';
import Icon3 from '../../images/icon-3.svg';
import {
    MembershipsContainer,
    MembershipsH1,
    MembershipsWrapper,
    MembershipsCard,
    MembershipsChecks,
    MembershipsIcon,
    MembershipsH2,
    MembershipsP,
    CheckMark,
}
    from './MembershipsElements';

const Memberships = () => {
    return (
        <MembershipsContainer id='memberships'>
            <MembershipsH1>A sua melhor opção na hora de levar uma vida + saudável.</MembershipsH1>
            <MembershipsWrapper>

                <MembershipsCard>
                    <MembershipsIcon src={Icon1} />
                    <MembershipsH2>Plano Fit
                    </MembershipsH2>
                    <MembershipsChecks>
                        <MembershipsP>< CheckMark />Área de musculação e aeróbicos</MembershipsP>
                        <MembershipsP>< CheckMark />Fit Go treinos online</MembershipsP>
                        <MembershipsP>< CheckMark />Fit App</MembershipsP>
                    </MembershipsChecks>
                    <MembershipsH2>R$ 89,99</MembershipsH2>
                </MembershipsCard>

                <MembershipsCard>
                    <MembershipsIcon src={Icon2} />
                    <MembershipsH2>Plano Smart</MembershipsH2>
                    <MembershipsChecks>
                        <MembershipsP>< CheckMark />Área de musculação e aeróbicos</MembershipsP>
                        <MembershipsP>< CheckMark />Fit Go treinos online</MembershipsP>
                        <MembershipsP>< CheckMark />Fit App</MembershipsP>
                        <MembershipsP>< CheckMark />Plano Vip 30 dias para um amigo</MembershipsP>

                    </MembershipsChecks>
                    <MembershipsH2>R$ 119.99</MembershipsH2>
                </MembershipsCard>

                <MembershipsCard>
                    <MembershipsIcon src={Icon3} />
                    <MembershipsH2>Plano Black</MembershipsH2>
                    <MembershipsChecks>
                        <MembershipsP>< CheckMark />Área de musculação e aeróbicos</MembershipsP>
                        <MembershipsP>< CheckMark />Fit Go treinos online</MembershipsP>
                        <MembershipsP>< CheckMark />Fit App</MembershipsP>
                        <MembershipsP>< CheckMark />Acesso ilimitado a +1.000 academias da rede</MembershipsP>
                        <MembershipsP>< CheckMark />Leve amigos para treinar com você</MembershipsP>
                        <MembershipsP>< CheckMark />Cadeira de massagem</MembershipsP>
                    </MembershipsChecks>
                    <MembershipsH2>R$ 199.99</MembershipsH2>
                </MembershipsCard>

            </MembershipsWrapper>
        </MembershipsContainer>
    )
}

export default Memberships
