import React from "react";
//import '../themes/estilosFj.css'
import im1 from "../assets/dolor.png";
import im2 from "../assets/dolor2.png";
import im3 from "../assets/dolor3.png";

import { useHistory } from "react-router-dom";
import useWindowDimensions from '../hooks/useWindowDimensions';

export const LesionesPage = () => {
  const {height,width}=useWindowDimensions();
  const history = useHistory();
  const irAnterior = () => {
    history.push("/ejercicios4");
  };
  const irSiguiente = () => {
    history.push("/LesionesB");
  };
  return (
    <div id="fondo">
      <div id="contenedor" >
        <div className="title">
          <h1>Principales Lesiones</h1>
        </div>

        <div id="c1">
          <h3>Excesos</h3>
          <section>
            Las causas más comunes son levantar objetos de forma incorrecta, la
            mala postura, la falta de ejercicio regular, las fracturas, las
            hernias de disco o la artritis
          </section>
          <img className="img" src={im1}></img>
        </div>
        <div id="c2">
          <h3>Lumbago</h3>
          <section>
            Al manejar cargas, nuestro cuerpo es sometido a adoptar posturas
            incorrectas y a efectuar movimientos reiterados, que podrían derivar
            en molestias y lesiones dolorosas.
          </section>
          <img className="img" src={im2}></img>
        </div>
        <div id="c3">
          <h3>Desgarros</h3>
          <section>
            Los síntomas incluyen dolor, hinchazón, espasmos musculares y
            capacidad limitada para mover el músculo. El tratamiento incluye
            analgésicos, hielo o el uso de férulas.
          </section>
          <img className="img" src={im3}></img>
        </div>

        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "space-between",marginTop:480}}
        >
          <div className="container">
            <button onClick={irAnterior} className="button" id="anterior">
              Anterior
            </button>
          </div>
          <div className="container">
            <button onClick={irSiguiente} className="button" id="siguiente">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
