import React from 'react'
import '../pages/estilosFj.css'

import im4 from '../assets/pos.jpg';
import im5 from '../assets/pos2.jpg';
import im6 from '../assets/posfelix.jpg';
import { useHistory } from "react-router-dom";



export const CuidadoPage = () => {
    const history = useHistory();
    const irAnterior=()=>{
        history.push("/Pupitre");
      }
const irSiguiente=()=>{
    history.push("/");
  }
    return (
        <div id="fondo">
       <div id="contenedor">
           <div className="title">
           <h1>
           Cuidando mi cuerpo
           </h1>
           </div>
       
       <div id="c1">
        <h3>
    Incorrecto
        </h3>
        <section>
        La espalda en forma curva nos puede causar mucho daño si lo hacemos durante un tiempo prolongado.
            </section>
            <img className="imagenPupitre" id="hernia" src={im5}
            >

            </img>
       </div>
       <div id="c2">
       <h3>
           Mantener la postura
        </h3>
        <section>
      Durante todo el tiempo en clase debemos permanecer tranquilos y sin realizar demasiado movimiento en el pupitre, ya que muchas veces estos no se ajustan a muestro cuerpo.

                 </section>
            <img className="imagenPupitre" src={im6}
            >

            </img>
       </div>
       <div id="c3">
       <h3>
         Correcto!
        </h3>
        <section>
        Espalda y pies planos sin doblarnos mucho  y en caso de presentar molestias no dudes en comunicarlo con un adulto.
            </section>
          <br>
          </br>
          <br>
          </br>
            <img className="imagenPupitre" src={im4}
            >

            </img>
       </div>
      
       <div className="container">  
  <button   onClick={irAnterior}  className="button" id="anterior">Anterior</button>
</div>  
<div className="container">  
  <button   onClick={irSiguiente} className="button" id="siguiente">Siguiente</button>
</div>  
      
       </div>


   

       </div>
    )
}
