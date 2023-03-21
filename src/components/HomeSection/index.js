import React, { useState } from 'react';
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

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HomeContainer id='home'>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
                <HomeH1>Uma nova arte de fitness em sua cidade</HomeH1>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
