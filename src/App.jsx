import React from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import SocMediaLinks from './components/SocMediaLinks'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <SocMediaLinks />
    </>
  )
}

export default App