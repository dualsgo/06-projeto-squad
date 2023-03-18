import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,

} from './HeroElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        // conferir se é isso
        <HeroContainer id='contact'> 
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Uma nova arte de fitness em sua cidade</HeroH1>
                <HeroP>
                    Seu corpo pode suportar quase tudo. É a sua mente que você tem que convencer.
                </HeroP>
                <HeroBtnWrapper>

                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
