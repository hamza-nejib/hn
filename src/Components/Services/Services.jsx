import React from 'react'
import './Services.css'
import { Card } from '../Card/Card'
import dev from '../../img/dev.jpg'
import design from '../../img/design.jpg'
import test from '../../img/test.jpg'
import Cv from './CV_HAMZA_NEJIB.pdf'

function Services () {
  return (
    <div className="services">
        {/* left */}
        <div className="awesome">
            <span>Mes Services</span>
            <span>Je vous accompagne tout au long de votre projet à travers de la conception, du développement et de la maintenance pour un résultat optimal répondant exactement à votre cahier des charges. Vos projets sont mes projets  et mon but est votre réussite.</span>
            <a href={Cv} download className='button s-button'> Mon CV</a>
        </div>
        {/* right side*/}
        <div className="cards">
            <Card pics={design} heading={'Design'} detail={'Photoshop, Figma, Adobe Illustrator'} />
            <Card pics={dev} heading={'Développement'} detail={'HTML, CSS, JavaScript, MongoDB, Express, React.js Node.js'} />
            <Card pics={test} heading={'Optimisation'} detail={'React Testing Library, Jest, React Developper Tools'} />
        </div>
    </div>
  )
}
export default Services
