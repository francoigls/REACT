import React from "react";
import './Componentes_NavBar.css'
import Carrito from './Carrito.svg'
const Componentes_NavBar = () => {
 return (
   <div className="container">
    <img className="Logo" alt='logo de la marca' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/MTV_Music_2021_logo.svg/2153px-MTV_Music_2021_logo.svg.png"/>
   
   <div className="components">
       
        <a href="*"  ><li className="efects">shop</li> </a>  
        <a href="*" ><li className="efects">conoce</li></a>  
        <a href="*" ><li className="efects">exportate</li></a>
        <a href="*"><li className="efects">nosotros</li></a>   
         <div className="carrito">
   
           <img height={30} src={Carrito} alt='carrito'/><p id="number">5</p>
         </div>
      
   </div>


   </div>
 )
} 






export default Componentes_NavBar