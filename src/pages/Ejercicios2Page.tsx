import React from 'react'
import {useHistory } from "react-router-dom";
import '../App.css';
import playImg from "../assets/play.png";
import niniosImg from "../assets/ninios2.jpg";
export const Ejercicios2Page = () => {
    const history=useHistory();

    const irAEjercicios3=()=>{
        history.push('/ejercicios3');
        //console.log('clic')
      }
      const irAEjercicios1=()=>{
        history.push('/ejercicios1');
        //console.log('clic')
      }

    return (
        <div className="fondo">
            <div className="divtitulo">EJERCICIO</div>
            <div className="diva">
            
               
               
            </div>
            <div className="divcontenido">
                
                <div className="divImagen">
                <div className="divtexto" >
                    <br />
                    Jugar al aire libre con tus hermanos o amigos
                    <br />
                    <hr />
                    
                    Practicar algún deporte, juega con la pelota 
                </div>

                </div>
                <div className="divf">
                <img src={niniosImg} width="100%" />                
                </div>
            </div>
            <div className="divanterior">
            <button className="botonvideo" onClick={irAEjercicios1}>ANTERIOR </button>
            </div>
            <div className="divsiguiente">
            <button className="botonvideo" onClick={irAEjercicios3}>SIGUIENTE </button>
            </div>
            
            
        </div>
    )
}
