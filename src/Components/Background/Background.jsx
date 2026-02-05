import React from 'react'
import './Background.css'
import video1 from '../../assets/Assets/video1.mp4'
import image1 from '../../assets/Assets/image1.png'
import image2 from '../../assets/Assets/image2.png'
import image3 from '../../assets/Assets/image3.png'

const Background = ({playStatus,count}) => {

  if(playStatus){
    return(
        <video className="background fade-in" autoPlay loop muted>
            <source src={video1} type='video/mp4' />
        </video>
    )
  }
  else if(count===0){
        return <img src={image1} className="background fade-in" alt="" />
    }
  else if(count===1){
    return <img src={image2} className="background fade-in" alt="" />
  }
  else if(count===2){
    return <img src={image3} className="background fade-in" alt="" />
  }

}

export default Background
