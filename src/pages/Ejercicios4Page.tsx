import React from 'react'
import {useHistory } from "react-router-dom";
import '../App.css';
import playImg from "../assets/play.png";
import niniosImg from "../assets/ninios4.jpg";
export const Ejercicios4Page = () => {
    const history=useHistory();

    const irAPaginaFrancis=()=>{
        history.push('/');
        //console.log('clic')
      }
      const irAEjercicios3=()=>{
        history.push('/ejercicios3');
        //console.log('clic')
      }

    return (
        <div className="fondo">
            <div className="divtitulo">DESCANSO</div>
            <div className="diva">
            
            </div>
            <div className="divcontenido">
                
                <div className="divImagen">
                <div className="divtexto" >
                    
                    <br />
                    <h1 >RECOMENDACIONES:</h1>
                    <br />
                    NO TE ACUESTES TARDE
                    <br />
                    
                    <hr />
                    
                    LEVANTATE TEMPRANO
                </div>

                </div>
                <div className="divf">
                <img src={niniosImg} width="100%" />                
                </div>
            </div>
            <div className="divanterior">
            <button className="botonvideo" onClick={irAEjercicios3}>ANTERIOR </button>
            </div>
            <div className="divsiguiente">
            <button className="botonvideo" onClick={irAPaginaFrancis}>SIGUIENTE </button>
            </div>
            
            
        </div>
    )
}
