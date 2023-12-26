import React from 'react'
import './Competences.css'
import ProgressBar from "@ramonak/react-progress-bar";


function Competences() {
  return (
    <div className='competences'>
        <span>Mes Compétences</span>
        <div className="compgroup"> 
          <div className="comps">
              <span>JavaScript</span> 
              <ProgressBar completed={80} bgColor={'#FFD600'} />
          </div>
          <div className="comps">
              <span>PHP</span> 
              <ProgressBar completed={60} bgColor={'#484C89'} />
          </div>
          <div className="comps">
              <span>Java</span> 
              <ProgressBar completed={70} bgColor={'#F44336'} />
          </div>
          <div className="comps">
              <span>TypeScript</span> 
              <ProgressBar completed={70} bgColor={'#1976D2'} />
          </div>
        </div>
        <div className="compgroup"> 
          <div className="comps">
              <span>React</span> 
              <ProgressBar completed={80} bgColor={'#61DAFB'} />
          </div>
          <div className="comps">
              <span>Node JS</span> 
              <ProgressBar completed={70} bgColor={'#5FA04E'} />
          </div>
          <div className="comps">
              <span>Express JS</span> 
              <ProgressBar completed={60} bgColor={'#191A1B'} />
          </div>
          <div className="comps">
              <span>MongoDB</span> 
              <ProgressBar completed={70} bgColor={'#43a23a'} />
          </div>
        </div>
        <div className="compgroup"> 
          <div className="comps">
              <span>Angular</span> 
              <ProgressBar completed={20} bgColor={'#DD0031'} />
          </div>
          <div className="comps">
              <span>Jakarta JEE</span> 
              <ProgressBar completed={20} bgColor={'#FDB940'} />
          </div>
          <div className="comps">
              <span>Spring</span> 
              <ProgressBar completed={20} bgColor={'#6cb52d'} />
          </div>
          <div className="comps">
              <span>Hibernate</span> 
              <ProgressBar completed={20} bgColor={'#59666C'} />
          </div>
        </div>
        <div className="compgroup"> 
          <div className="comps">
          <span>HTML</span> 
              <ProgressBar completed={90} bgColor={'#E65100'} />
          </div>
          <div className="comps">
              <span>CSS</span> 
              <ProgressBar completed={80} bgColor={'#0277BD'} />
          </div>
          <div className="comps">
              <span>SQL</span> 
              <ProgressBar completed={70} bgColor={'#D1C4E9'} />
          </div>
          <div className="comps">
              <span>GitHub</span> 
              <ProgressBar completed={70} bgColor={'#171515'} />
          </div>
        </div>
        <div className="compgroup"> 
          <div className="comps">
          <span>Docker</span> 
              <ProgressBar completed={50} bgColor={'#1D63ED'} />
          </div>
          <div className="comps">
              <span>Kubernetes</span> 
              <ProgressBar completed={50} bgColor={'#326ce5'} />
          </div>
          <div className="comps">
              <span>AWS</span> 
              <ProgressBar completed={50} bgColor={'#FF9900'} />
          </div>
          <div className="comps">
              <span>Jenkins</span> 
              <ProgressBar completed={50} bgColor={'#263238'} />
          </div>
        </div>
    </div>
  )
}

export default Competences