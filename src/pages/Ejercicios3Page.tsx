import React from 'react'
import {useHistory } from "react-router-dom";
import '../App.css';
import playImg from "../assets/play.png";
import niniosImg from "../assets/ninios3.jpg";
export const Ejercicios3Page = () => {
    const history=useHistory();

    const irAEjercicios2=()=>{
        history.push('/ejercicios2');
        //console.log('clic')
      }
      const irAEjercicios4=()=>{
        history.push('/ejercicios4');
        //console.log('clic')
      }

    return (
        <div className="fondo">
            <div className="divtitulo">DESCANSO</div>
            <div className="diva">
            
               <button className="botonvideo"> <img src={playImg} width="15%" /> VER VIDEO</button>
               
            </div>
            <div className="divcontenido">
                
                <div className="divImagen">
                    <img src={niniosImg} width="100%" />
                </div>
                <div className="divf">
                <div className="divtexto" >
                Todo niño debe dormir por los menos 8 horas todos los días
                <hr />
                El descanso y el sueño son los dos amigos de los niños
                </div>
                </div>
            </div>
            <div className="divanterior">
            <button className="botonvideo" onClick={irAEjercicios2}>ANTERIOR </button>
            </div>
            <div className="divsiguiente">
            <button className="botonvideo" onClick={irAEjercicios4}>SIGUIENTE </button>
            </div>
            
            
        </div>
    )
}
