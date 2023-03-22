import React, { useState } from 'react';
import HomeSection from '../HomeSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo} from '../InfoSection/Data';
import Navbar from '../Navbar'; 
import Planos from '../Planos';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Contato from '../Contato';

const Home = () => {
const[isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <HomeSection />
                <InfoSection {...homeObjOne}/>
                <Planos />
                <Contato/>
                <Footer />
        </>
    );
};

export default Home
