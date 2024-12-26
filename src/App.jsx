import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import viteLogo1 from './assets/msa.png'
import oneIm from './assets/1.jpg'
import twoIm from './assets/2.jpg'
import threeIm from './assets/3.jpg'
import Header from './Header'
import './App.css'
import Footer from './Footer'
import Bottom from './Bottom'
import Carrosel from './Carrosel'
import Container from './Container'
import Program from './Program'
import Nheader from './Nheader'

function App() {
 
  

    const items = [
      <img className='w-full h-[70vh]' src={oneIm} alt="Slide 1" />,
      <img className='w-full h-[70vh]' src={twoIm} alt="Slide 2" />,
      <img className='w-full h-[70vh]' src={threeIm} alt="Slide 3" />,
    ];
  
       
  
   return (
    <>
     <Nheader></Nheader>
     <Carrosel items={items}></Carrosel>
     <Container></Container>
     <Program></Program>
<Bottom></Bottom>
    </>
  )
}

export default App
