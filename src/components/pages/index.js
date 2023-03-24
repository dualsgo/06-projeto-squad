import React, { useState } from 'react';
import HomeSection from '../HomeSection';
import Sobre from '../Sobre';
import { homeObjOne, homeObjTwo} from '../Sobre/Data';
import Navbar from '../Navbar'; 
import Funcionalidades from '../Funcionalidades';
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
                <Sobre {...homeObjOne}/>
                <Funcionalidades />
                <Contato/>
                <Footer />
        </>
    );
};

export default Home
