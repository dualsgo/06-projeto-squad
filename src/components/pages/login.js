import React from 'react';
import LogIn from '../Login';
import ScrollToTop from '../ScrollToTop';
import Navbar from '../Navbar';


const LoginPage = () => {
    return (
        <>
            <Navbar/>
            <ScrollToTop />
            <LogIn />
        </>
    )
}

export default LoginPage;

