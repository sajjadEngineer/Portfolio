import React from 'react'
import './App.css';
import About_me from './components/About_me Responsive/About_me';
import Award from './components/award/Award';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Resume from './components/resume/Resume';


const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About_me/>
    
    <Resume/>
    <Award/>
    <Footer/>
    </div>
  )
}

export default App