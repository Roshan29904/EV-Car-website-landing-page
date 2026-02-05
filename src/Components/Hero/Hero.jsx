import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/Assets/arrow_btn.png'
import play_icon from '../../assets/Assets/play_icon.png'
import pause_icon from '../../assets/Assets/pause_icon.png'

const Hero = ({heroData,setcount,count,setplayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt=''/>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setcount(0)}className={count===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setcount(1)}className={count===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setcount(2)}className={count===2?"hero-dot orange":"hero-dot"}></li>
          
          
        </ul>
        <div className="hero-play">
          <img onClick={()=>{setplayStatus(!playStatus)}} src={playStatus?pause_icon:play_icon} alt="" />
          <p>See the video</p>
        </div>
        
      </div>

      
    </div>
  )
  
}

export default Hero
