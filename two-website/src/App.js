import React from 'react';
import NavBar from './Navbar';
import AppSection from './AppSection';
import CardSection from './CardSection';
import Footer from './Footer';
import HeroSection from './HeroSection';



const App =()=>{
    return (
        <div>
        <NavBar/>
        <HeroSection/>
        <AppSection/>
        <CardSection/>
        <Footer/>
        </div>
    )
}

export default App;