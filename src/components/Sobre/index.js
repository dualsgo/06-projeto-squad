import React from 'react';
import { useEffect, useState } from 'react';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from './InfoElements';

const Sobre = ({ lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    img }) => {

    const [sobre, setSobre] = useState('');

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('https://squad-back.onrender.com/sobre');
            const data = await response.json();

            if (data.sobreData[0] === undefined) {
                setSobre('');
            } else {
                setSobre(data.sobreData[0])
            }

        }
        fetchItems();
    }, []);

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{sobre.comment}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Sobre
