import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

export const PlanosContainer = styled.div`  
    height: 800px;
    display: flex;
    margin: 100px auto 100px auto;
    padding: 100px auto 100px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 1000px) {
        height: 1800px;
    }

    @media screen and (max-width: 480px) {
        height: 1800px;
    }
`;

export const PlanosWrapper = styled.div` 
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const PlanosCard = styled.div` 
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
export const PlanosChecks = styled.div` 
    min-height: 240px;
    padding: 10px 0;
`;

export const PlanosIcon = styled.img` 
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    margin-top: 30px
`;

export const PlanosH1 = styled.h1` 
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {

        text-align: center;
    }


    @media screen and (max-width: 480px) {

        font-size: 2rem;
    }
    `;

export const PlanosH2 = styled.h2` 
    font-size: 1.2rem;
    margin-top: 18px;
    margin-bottom: 10px;
`;

export const PlanosP = styled.p` 
    font-size: 1rem;
    text-align: center;
    padding-top: 5px;
`;

export const CheckMark = styled(BsCheckLg)` 
    margin-right: 8px;
    font-size: 16px;
    color: #F44;
    `;


