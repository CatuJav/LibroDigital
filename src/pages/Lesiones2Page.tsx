import React from "react";
import "../themes/estilosFj.css";

import im4 from "../assets/dolor4.png";
import im5 from "../assets/dolor5.png";
import im6 from "../assets/dolor6.png";
import { useHistory } from "react-router-dom";

export const Lesiones2Page = () => {
  const history = useHistory();
  const irAnterior = () => {
    history.push("/Lesiones");
  };
  const irSiguiente = () => {
    history.push("/cargaD");
  };
  return (
    <div id="fondo">
      <div id="contenedor">
        <div className="title">
          <h1>Principales Lesiones</h1>
        </div>

        <div id="c1">
          <h3>Hernia Discal</h3>
          <section>
            Afección caracterizada por un problema en el disco cartilaginoso
            ubicado entre los huesos de la columna vertebral.
          </section>
          <img id="hernia" src={im5}></img>
        </div>
        <div id="c2">
          <h3>Fractura</h3>
          <section>
            Puede haber pérdida de funcionalidad. El tratamiento generalmente
            implica volver a colocar el hueso en su lugar e, inmovilizarlo con
            un yeso o una férula
          </section>
          <img className="img" src={im6}></img>
        </div>
        <div id="c3">
          <h3>Ciatica</h3>
          <section>
            Dolor que se extiende desde la espalda baja hasta una o ambas
            piernas. Suele ocurrir cuando una hernia de disco o un espolón en la
            columna vertebral presionan el nervio.
          </section>
          <img className="img" src={im4}></img>
        </div>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 480,
          }}
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
