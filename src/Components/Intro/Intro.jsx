import React from 'react'
import './Intro.css'
import github from '../../img/github.svg';
import facebook from '../../img/facebook.svg';
import linkedin from '../../img/linkedin.svg';
import moi from '../../img/moi.png';
import { Link } from 'react-router-dom'
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hamza Nejib </span>
                <span>Je suis à la recherche d'un stage pratique intégré dans ma formation Concepteur Développeur d'Application, sur les technologies Java/Spring/Angular. Le stage non rémunéré, de 12 semaines à partir de 18 Mars 2024.</span>
            </div>
            <Link to="/contact" className="i-button button">Recrutez moi</Link>
            
            <div className="i-icons">
                <a href="https://github.com/hamza-nejib" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100083741425712" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
                <a href="https://www.linkedin.com/in/hamza-nejib-37342427b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={moi} alt="" />
        </div>
    </div>
  )
}

export default Intro