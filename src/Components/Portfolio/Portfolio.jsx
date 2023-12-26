import React, { useState} from 'react'
import './Portfolio.css'
import dataSlider from './dataPortfolio'
import BtnSlider from './BtnSlider'

function Portfolio() {

const [slideAnim, setSlideAnim] = useState({
  index:1,
  inProgress: false
})

const nextSlide = () => {
  if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress){
    setSlideAnim({index: slideAnim.index + 1, inProgress:true})

    setTimeout(() => {
      setSlideAnim({index: slideAnim.index + 1, inProgress: false})
    }, 500)

  }else if(slideAnim.index === dataSlider.length && !slideAnim.inProgress){
    setSlideAnim({index: 1, inProgress:true})

    setTimeout(() => {
      setSlideAnim({index: 1, inProgress: false})
    }, 500)
  }
}
const prevSlide = () => {
  if(slideAnim.index !== 1 && !slideAnim.inProgress){
    setSlideAnim({index: slideAnim.index - 1, inProgress:true})

    setTimeout(() => {
      setSlideAnim({index: slideAnim.index - 1, inProgress: false})
    }, 500)

  }else if(slideAnim.index === 1 && !slideAnim.inProgress){
    setSlideAnim({index: 5, inProgress:true})

    setTimeout(() => {
      setSlideAnim({index: 5, inProgress: false})
    }, 500)
  }
}

const moveDot = index => {
  setSlideAnim({index: index, inProgress: false})
}
  return (
    <div className="portfolio">
        <span className='exper'>Portfolio</span>
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
              return (
                <div
                key={obj.id}
                className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                >
                  <a href={obj.link} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + `/Imgs/img${index+1}.png`} alt="" /></a>
                </div>
              )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            
            <div className="container-dots">
              {Array.from({length: 5}).map((item, index) => {
                return <button
                key={index} 
                className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                onClick={() => moveDot(index + 1)}
                ></button>
              })}
             </div>
        </div>
    </div>
  )
}

export default Portfolio