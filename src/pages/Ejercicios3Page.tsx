import React from 'react'
import {useHistory } from "react-router-dom";
import '../App.css';
import playImg from "../assets/play.png";
import niniosImg from "../assets/ninios3.jpg";
import video2 from "../assets/descansovideo.mp4";
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
                      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel" >IMPORTANCIA DEL DESCANSO</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <video width="100%" controls  onPointerEnter={(e) => {
                  e.currentTarget.play();
                  console.log(e.currentTarget.ended);
                }}

                onPointerOut={(e)=>{
                  e.currentTarget.pause();
                }}>
        <source src={video2} type="video/mp4"></source>
      </video>
     </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">VOLVER</button>
        
      </div>
    </div>
  </div>
</div>
            <div className="divtitulo">DESCANSO</div>
            <div className="divvideo">
            
               <button className="botonvideo"  data-bs-toggle="modal" data-bs-target="#exampleModal"> <img src={playImg} width="15%" /> VER VIDEO</button>
               
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
