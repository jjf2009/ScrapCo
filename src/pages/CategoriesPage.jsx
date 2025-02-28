import React from 'react'
import './CategoriesPage.css'
import allImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/All.jpg'
import metalImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/metal.jpg'
import paperImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/paper.jpg'
import electImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/electronics.jpg'
import glassImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/glass.jpg'
import rubberImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/rubber.jpg'
import plasticImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/plastic.jpeg'
import furnImg from 'C:/Users/anton/OneDrive/Documents/GitHub/ScrapCo/src/assets/categories/furniture.jpg'
import { Link } from 'react-router-dom';
// import Loading from '../../components/Loading';

const CategoriesPage = () => { 
  const Categorystyle = {  width: '20vw', height: '20vh',marginRight: '5vw',marginLeft: '10vw' };
  return (
   <>
   <div style={{ display: "flex", height: "25vh", backgroundColor: "#fff"} }>
      <button className='Category'>
       <img style= { Categorystyle } src={allImg} alt="" />All
       </button>
        <button className='Category'>
       <img style= { Categorystyle } src={metalImg} alt="" />Metal
       </button>
   </div>

    <div style={{ display: "flex", height: "25vh", backgroundColor: "#fff"} }>
       <button className='Category' >
       <img style= { Categorystyle } src={paperImg} alt="" />Paper</button>
       <button className='Category' > 
       <img style= { Categorystyle } src={electImg} alt="" />Electronics</button>
    </div>
    <div style={{ display: "flex", height: "25vh", backgroundColor: "#fff"} }>
       <button className='Category' >
        <img style= { Categorystyle } src={glassImg} alt="" />Glass</button>
        <button className='Category' >
        <img style= { Categorystyle } src={rubberImg} alt="" />Rubber</button>
    </div>
    <div style={{ display: "flex", height: "25vh", backgroundColor: "#fff"} }>    
       <button className='Category' >
       <img style= { Categorystyle } src={plasticImg} alt="" />Plastic</button>
       <button className='Category' >
       <img style= { Categorystyle } src={furnImg} alt="" />Furniture</button>
    </div>
  </>)
}

export default CategoriesPage