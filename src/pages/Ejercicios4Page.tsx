import React from 'react'
import {useHistory } from "react-router-dom";
import '../App.css';
import playImg from "../assets/play.png";
import niniosImg from "../assets/ninios4.jpg";
import '../themes/estilos.css';

export const Ejercicios4Page = () => {
    const history=useHistory();
    //TODO: Por el momento va a la pagina del Trax se debe ir a la pagina del Francis
    const irAPaginaFrancis=()=>{
        history.push('/cargaD');
        //console.log('clic')
      }
      const irAEjercicios3=()=>{
        history.push('/ejercicios3');
        //console.log('clic')
      }

    return (
        <div className="fondo">
            <div className="divtitulo">DESCANSO</div>
            <div className="divvideo">
            
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
            <button className="button" onClick={irAEjercicios3}>ANTERIOR </button>
            </div>
            <div className="divsiguiente">
            <button className="button" onClick={irAPaginaFrancis}>SIGUIENTE </button>
            </div>
            
            
        </div>
    )
}
