import React from 'react'
import { useHistory } from 'react-router-dom';
import "../conte/css/estilos.css";
import chumbi2 from "../conte/images/chumbi2.png";
import chumbi3 from "../conte/images/chumbi3.png";

export const UsoChumbi2 = () => {
    const history = useHistory();
    const irAnterior = () => {
      history.push("/uso1");
    };
    const irSiguiente= () => {
      history.push("/consecuenciasChumbi");
    };
    return (
        <div className="fondo">
            <div className="divtitulo">
                <p>USOS</p>
            </div>
            <div className="divvideo">
        
      </div>

      <div className="divcontenido">
      
      <h1 style={{color:"white", textAlign:"center" }} >BENEFICIOS</h1>
      <br />
      <div className="divch2">
          <br />
          <p  style={{fontSize:"28px", textAlign:"center" }}>
              Aliviar malestares en la columna de adultos
              <br />
              <br />
      <img src={chumbi2} width="35%" />
              </p>
      
        </div>
        <div className="divch1">
            <br />
            <p style={{fontSize:"28px", textAlign:"center" }} >
                Soporte de la cintura al trabajar
                <br />
                <br />
                <img src={chumbi3} width="50%" />
                </p>
            
        
        </div>
      
      </div>



      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="">
          <button className="button" onClick={irAnterior}>
            ANTERIOR{" "}
          </button>
        </div>
        <div className="">
          <button className="button" onClick={irSiguiente}>
            SIGUIENTE{" "}
          </button>
        </div>
      </div>

        </div>
    )
}
