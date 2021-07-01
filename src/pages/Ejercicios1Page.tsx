import React from 'react'
import {useHistory } from "react-router-dom";
import '../App.css';
import playImg from "../assets/play.png";
import niniosImg from "../assets/ninios1.jpg";
export const Ejercicios1Page = () => {
    const history=useHistory();

    const irAEjercicios2=()=>{
        history.push('/ejercicios2');
        //console.log('clic')
      }
      const irAEPaginaCatu=()=>{
        history.push('/');
        //console.log('clic')
      }

    return (
        <div className="fondo">
            <div className="divtitulo">EJERCICIO</div>
            <div className="diva">
            
               <button className="botonvideo"> <img src={playImg} width="15%" /> VER VIDEO</button>
               
            </div>
            <div className="divcontenido">
                
                <div className="divImagen">
                    <img src={niniosImg} width="100%" />
                </div>
                <div className="divf">
                <div className="divtexto" >
                    <br />
                    
                    Para mantener un cuerpo sano es importante hacer ejercicio todos los días</div>
                </div>
            </div>
            <div className="divanterior">
            <button className="botonvideo" onClick={irAEPaginaCatu}>ANTERIOR </button>
            </div>
            <div className="divsiguiente">
            <button className="botonvideo" onClick={irAEjercicios2}>SIGUIENTE </button>
            </div>
            
            
        </div>
    )
}
