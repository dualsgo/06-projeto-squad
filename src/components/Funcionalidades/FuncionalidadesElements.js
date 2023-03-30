import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

export const FuncionalidadesContainer = styled.div`  
    height: 800px;
    display: flex;
    margin: auto;
    padding: 100px auto 100px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 1000px) {
        height: 1000px;
        margin: 20px;
        padding: 150px;
    }

    @media screen and (max-width: 480px) {
        height: 1000px;
        margin: 20px;
        padding: 150px;
    }
`;

export const FuncionalidadesWrapper = styled.div` 
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const FuncionalidadesCard = styled.div` 
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    height: auto;
    width: 75%;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;        
    }
`;
export const FuncionalidadesChecks = styled.div` 
    min-height: 240px;
    padding: 10px 0;
`;

export const FuncionalidadesIcon = styled.img` 
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    margin-top: 30px
`;

export const FuncionalidadesH1 = styled.h1` 
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
margin: 20px;

        text-align: center;
    }


    @media screen and (max-width: 480px) {
margin: 20px;
        font-size: 2rem;
    }
    `;

export const FuncionalidadesH2 = styled.h2` 
    font-size: 1.2rem;
    margin-top: 18px;
    margin-bottom: 10px;
`;

export const FuncionalidadesP = styled.p` 
    font-size: 40px;
    text-align: center;
`;

export const CheckMark = styled(BsCheckLg)` 
    margin-right: 8px;
    font-size: 16px;
    color: #F44;
    `;


