import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube, FaLinkedin,
    FaTwitter
}
    from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
}
    from './FooterElements';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Body Move Center
                        </SocialLogo>
                        <WebsiteRights>{new Date().getFullYear()}</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="#/" target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="#" target="_blank"
                                aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="#" target="_blank"
                                aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="#" target="_blank"
                                aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="#" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>

                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
