import React from 'react'
import Intro from './Intro/Intro'
import Services from './Services/Services'
import Competences from './Competences/Competences'
import Contact from './Contact/Contact'
import Experiences from './Experiences/Experiences'
import Portfolio from './Portfolio/Portfolio'

function All() {
  return (
    <>
        <Intro/>
        <Services/>
        <Competences/>
        <Contact/>
        <Experiences/>
        <Portfolio/>
    </>

  )
}

export default All