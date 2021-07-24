import React from 'react'
import { useHistory } from 'react-router-dom';
import "../conte/css/estilos.css";
import chumbi1 from "../conte/images/chumbi1.png";






export const UsoChumbi1 = () => {
    const history = useHistory();
    const irAnterior = () => {
      history.push("/Chumbi");
    };
    const irSiguiente= () => {
      history.push("/uso2");
    };

    return (
        <div className="fondo">
            <div className="divtitulo">
                <p>USOS</p>
            </div>
            <div className="divvideo">
        
      </div>

            <div className="divcontenido">
        <div className="divImagen">
        <img src={chumbi1} width="100%" />
        </div>
        <div className="divf" style={{display:'flex',height:'100%', backgroundColor:'',padding:10, fontSize:25, fontWeight:'bold'}}>
          <div className="divtexto1">
            <br />
            ENTRE LOS USOS TENEMOS:
            <br />
            <br />
            <li>Fajar</li>
            <li>Ceñir (Ajustar)</li>
            <li>Envolver en la falda de las mujeres</li>
            <li>Ajustar en la cintura</li>

          </div>
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
        
    );
};
