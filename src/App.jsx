import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';

const App = () => {

  let heroData=[
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give into", text2:"your passions"},
  ]

  const [count, setcount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);

  useEffect(() => {
      setInterval(
        ()=>{
          setcount((count)=>{return count===2?0:count+1})
        },3000);
      },[])
      
    
  
    
  

  return (
    <div>
      
      <Background playStatus={playStatus} count={count} />
      <Navbar />
      <Hero 
        playStatus={playStatus}
        setplayStatus={setplayStatus}
        heroData={heroData[count]}
        count={count}
        setcount={setcount}
      />
     
      
      
    </div>
  )
}

export default App

