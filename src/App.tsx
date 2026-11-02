import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Skills } from './components/Skills'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

    </>
  )

}

export default App
