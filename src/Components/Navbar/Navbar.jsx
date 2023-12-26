import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Toggle } from '../Toggle/Toggle'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/competences">Compétences</Link></li>
                    <li><Link to="/experience">Expérience</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </div>
            <Link to="/contact">
                <button className="button n-button">
                    Contactez-moi
                </button>
            </Link>       
        </div>
    </div>
  )
}

export default Navbar