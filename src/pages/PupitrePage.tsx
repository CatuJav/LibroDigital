import React from 'react'
import '../pages/estilosFj.css'

import im4 from '../assets/sierra.jpg';
import im5 from '../assets/correcto.jpg';
import im6 from '../assets/correcto2.png';
import { useHistory } from "react-router-dom";



export const PupitrePage = () => {
    const history = useHistory();
    const irAnterior=()=>{
        history.push("/");
      }
const irSiguiente=()=>{
    history.push("/Cuidado");
  }
    return (
        <div id="fondo">
       <div id="contenedor">
           <div className="title">
           <h1>
           Como sentarse correctamente en clase
           </h1>
           </div>
       
       <div id="c1">
        <h3>
     En nuestra clase..
        </h3>
        <section>
        Debemos pegar la espalda hacia el pupitre para evitar dolores y futuras complicaciones
            </section>
            <img className="imagenPupitre" id="hernia" src={im5}
            >

            </img>
       </div>
       <div id="c2">
       <h3>
           Cuida tu cuerpo..
        </h3>
        <section>
       Si tu o tus compañeros realizan posturas incorrectas o sienten incomodidad en clase, corrijelos y ayudalos a cuidar su cuerpo también.            </section>
            <img className="imagenPupitre" src={im6}
            >

            </img>
       </div>
       <div id="c3">
       <h3>
            Recuerdalo !
        </h3>
        <section>
        Maestros y alumnos somos una familia y todos podemos cuidarnos entre nosotros.
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
