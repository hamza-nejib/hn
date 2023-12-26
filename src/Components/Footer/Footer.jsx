import React from 'react'
import './Footer.css'

import Wave from '../../img/wave.svg'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>Tous droits réservés &copy; 2023 - Développé par  <a className='alink' href="https://hamza-nejib.github.io/" target="_blank" rel="noopener noreferrer">Hamza Nejib</a></span>
            <div className='f-icons'>
                <a href="https://www.linkedin.com/in/hamza-nejib-37342427b/" target="_blank" rel="noopener noreferrer"><LinkedIn color='white'/></a>
                <a href="https://github.com/hamza-nejib" target="_blank" rel="noopener noreferrer"><Github color='white'/></a>
                <a href="https://www.facebook.com/profile.php?id=100083741425712" target="_blank" rel="noopener noreferrer"><Facebook color='white'/></a>  
            </div>
        </div>
    </div>
  )
}

export default Footer