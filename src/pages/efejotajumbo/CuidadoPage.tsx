import React from "react";
import "../../themes/estilosFj.css";

import im4 from "../../assets/pos.jpg";
import im5 from "../../assets/pos2.jpg";
import im6 from "../../assets/posfelix.jpg";
import { useHistory } from "react-router-dom";

export const CuidadoPage = () => {
  const history = useHistory();
  const irAnterior = () => {
    history.push("/Pupitre");
  };
  const irSiguiente = () => {
    history.push("/lesiones");
  };
  return (
    <div id="fondo">
      <div id="contenedor">
        <div className="title">
          <h1>Cuidando mi cuerpo</h1>
        </div>

        <div id="c1" style={{ display: "flex", flexDirection: "column" }}>
          <h3>Incorrecto</h3>
          <section>
            La espalda en forma curva nos puede causar mucho daño si lo hacemos
            durante un tiempo prolongado.
          </section>
          <img
            className=""
            id="hernia"
            src={im5}
            style={{
              flex: 1,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          ></img>
        </div>
        <div id="c2" style={{ display: "flex", flexDirection: "column" }}>
          <h3>Mantener la postura</h3>
          <section style={{fontSize:20}}>
            Durante todo el tiempo en clase debemos permanecer tranquilos y sin
            realizar demasiado movimiento en el pupitre, ya que muchas veces
            estos no se ajustan a muestro cuerpo.
          </section>
          <img
            className=""
            src={im6}
            style={{
              flex: 1,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          ></img>
        </div>
        <div id="c3" style={{ display: "flex", flexDirection: "column" }}>
          <h3>Correcto!</h3>
          <section>
            Espalda y pies planos sin doblarnos mucho y en caso de presentar
            molestias no dudes en comunicarlo con un adulto.
          </section>
          <img
            className=""
            src={im4}
            style={{
              flex: 1,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          ></img>
        </div>

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
  );
};
