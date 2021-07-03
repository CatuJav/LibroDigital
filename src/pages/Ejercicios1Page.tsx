import React from 'react'
import {useHistory } from "react-router-dom";
import '../App.css';
import playImg from "../assets/play.png";
import niniosImg from "../assets/ninios1.jpg";
import video1 from "../assets/ejerciciovideo.mp4";
import '../themes/estilos.css';
export const Ejercicios1Page = () => {
    const history=useHistory();

    const irAEjercicios2=()=>{
        history.push('/ejercicios2');
        //console.log('clic')
      }
      const irAEPaginaCatu=()=>{
        history.push('/sana');
        //console.log('clic')
      }

    return (
        <div className="fondo">
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">IMPORTANCIA DEL EJERCICIO</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <video width="100%" id="videoEjercicio"  controls onPointerEnter={(e) => {
                  e.currentTarget.play();
                  console.log(e.currentTarget.ended);
                }}

                onPointerOut={(e)=>{
                  e.currentTarget.pause();
                }}>
        <source src={video1} type="video/mp4"></source>
      </video>
     </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >VOLVER</button>
        
      </div>
    </div>
  </div>

</div>

            <div className="divtitulo">EJERCICIO</div>
            <div className="divvideo">
            
               <button className="button" style={{fontSize:15}} data-bs-toggle="modal" data-bs-target="#exampleModal"> <img src={playImg} width="15%" /> VER VIDEO</button>
               
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
            <button className="button" onClick={irAEPaginaCatu}>ANTERIOR </button>
            </div>
            <div className="divsiguiente">
            <button className="button" onClick={irAEjercicios2}>SIGUIENTE </button>
            </div>
            
            
        </div>

        
    )
}

