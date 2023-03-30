import React, { useState, useEffect, useRef } from 'react';
import Video from '../../videos/video.mp4';
import {
    HomeContainer,
    HomeBg,
    VideoBg,
    HomeContent,
    HomeH1

} from './HomeElements';


const HomeSection = () => {
    const [hover, setHover] = useState(false)
    const mainSentenceRef = useRef(null);

    useEffect(() => {
        const typeWriter = (el) => {
            const mainText = el.innerHTML.split("")
            el.innerHTML = ''
            mainText.forEach(function (letter, i) {
                setTimeout(function () {
                    el.innerHTML += letter
                }, 60 * i)
            })
        }

        typeWriter(mainSentenceRef.current);
    }, []);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HomeContainer id='home'>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
                <HomeH1 ref={mainSentenceRef} className='mainSentence'>Fortaleça seu corpo, fortaleça sua mente - no Body Move Center, nós te ajudamos a alcançar seu melhor desempenho!</HomeH1>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
